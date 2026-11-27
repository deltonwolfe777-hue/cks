/* 灵契大陆 · 离线缓存
   GitHub Pages 的 Cache-Control 固定 max-age=600 且不可配置，
   所以「第二次访问不必重下」只能靠 Service Worker 自己做。

   策略：
   - 导航请求（HTML）：network-first。页面是唯一不带版本号的东西，
     必须每次回源，否则推了新版本玩家永远看不到。
   - 其余同源静态资源：cache-first。它们全部带 ?v=<版本> 查询串，
     版本一变 URL 就变，不存在拿到旧内容的可能。

   自愈：如果页面里引用的资源版本号和本文件 VER 对不上（说明改了页面
   但忘了改 VER），就把整个缓存清空回源。宁可重下一次，也不要让玩家
   卡在一份自相矛盾的旧缓存里 —— 那种 bug 极难自查。

   升级方法：改 VER，同时改 game-phaser.html 里的 ?v= 和资源生成器的 SR_VER。
*/
const VER = '20261127a';
const CACHE = 'sr-' + VER;
const VER_KEY = './__sr_ver__';

const CORE = [
  './',
  './index.html',
  './game-phaser.html',
  './phaser.min.js',
  './phaser-assets.js?v=' + VER,
  './story.js?v=' + VER
];

self.addEventListener('install', e => {
  e.waitUntil((async () => {
    const c = await caches.open(CACHE);
    // 逐个吞掉失败：任何一个 404 都不能让整个 SW 装不上
    await Promise.all(CORE.map(u =>
      c.add(new Request(u, { cache: 'reload' })).catch(() => {})
    ));
    self.skipWaiting();
  })());
});

self.addEventListener('activate', e => {
  e.waitUntil((async () => {
    const keys = await caches.keys();
    await Promise.all(keys
      .filter(k => k.startsWith('sr-') && k !== CACHE)
      .map(k => caches.delete(k)));
    await self.clients.claim();
  })());
});

async function dropAllCaches(){
  const keys = await caches.keys();
  await Promise.all(keys.filter(k => k.startsWith('sr-')).map(k => caches.delete(k)));
}

/* 比对页面引用版本与 VER，不一致就清空缓存 */
async function noteVersion(html){
  const m = /phaser-assets\.js\?v=([A-Za-z0-9._-]+)/.exec(html || '');
  if (!m) return;
  const c = await caches.open(CACHE);
  const prevRes = await c.match(VER_KEY);
  const prev = prevRes ? await prevRes.text() : null;
  if (prev && prev !== m[1]) {
    await dropAllCaches();
  }
  const c2 = await caches.open(CACHE);
  await c2.put(VER_KEY, new Response(m[1]));
}

self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET') return;
  let url;
  try { url = new URL(req.url); } catch (err) { return; }
  if (url.origin !== self.location.origin) return;

  if (req.mode === 'navigate') {
    /* 根路径直接交给游戏页，省掉 index.html 那一跳。
       相对路径在这里是安全的：从 /cks/ 和从 /cks/game-phaser.html 取
       phaser.min.js 都落到 /cks/phaser.min.js，解析结果一致。 */
    const isRoot = url.pathname.endsWith('/') || url.pathname.endsWith('/index.html');
    const docUrl = isRoot ? './game-phaser.html' : req;

    e.respondWith((async () => {
      try {
        const r = await fetch(docUrl);
        try {
          await noteVersion(await r.clone().text());
          const c = await caches.open(CACHE);
          await c.put(docUrl, r.clone());
          if (isRoot) await c.put(req, r.clone());
        } catch (err) {}
        return r;
      } catch (err) {
        const hit = await caches.match(docUrl) || await caches.match('./game-phaser.html');
        return hit || new Response('离线：请检查网络后重试', {
          status: 503, headers: { 'Content-Type': 'text/plain; charset=utf-8' }
        });
      }
    })());
    return;
  }

  e.respondWith((async () => {
    const hit = await caches.match(req);
    if (hit) return hit;
    try {
      const r = await fetch(req);
      if (r && r.ok) {
        try {
          const c = await caches.open(CACHE);
          await c.put(req, r.clone());
        } catch (err) {}
      }
      return r;
    } catch (err) {
      return new Response('', { status: 504 });
    }
  })());
});
