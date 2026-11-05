const fs=require('fs'),vm=require('vm');
const GAME='C:/Users/Administrator/WorkBuddy/2026-11-03-11-15-20/index.html';
const OUT='C:/Users/Administrator/WorkBuddy/2026-11-03-11-15-20/灵契大陆-精灵图鉴预览.html';
const html=fs.readFileSync(GAME,'utf8');
let code=html.match(/<script>([\s\S]*?)<\/script>/)[1];
code=code.replace(/\nboot\(\);\s*$/,'\n');
code+="\n;globalThis.__SPIRITS=SPIRITS;globalThis.__svg=spiritSVG;globalThis.__ART_TYPE=ART_TYPE;";
function stub(){const f=function(){return stub();};return new Proxy(f,{get(t,p){
  if(p==='getContext')return ()=>stub();
  if(p==='classList')return{add(){},remove(){},toggle(){},contains(){return false}};
  if(p==='getBoundingClientRect')return ()=>({left:0,top:0,width:100,height:100});
  if(p==='offsetWidth'||p==='offsetHeight')return 0;
  if(p==='style')return stub();
  if(p==='textContent'||p==='innerHTML')return '';
  if(typeof p==='symbol')return undefined;
  return stub();},apply(){return stub();},set(){return true;}});}
const sb={document:stub(),window:stub(),localStorage:stub(),requestAnimationFrame:()=>0,setTimeout:()=>0,console};
sb.globalThis=sb; sb.window.document=sb.document;
vm.runInNewContext(code,sb);
const S=sb.__SPIRITS, svg=sb.__svg, AT=sb.__ART_TYPE;
const TYPE_CN={fire:'火',water:'水',grass:'草',electric:'电',light:'光',dark:'暗',rock:'岩',ice:'冰',wind:'风',psychic:'念',dragon:'龙'};
let cards='';
S.forEach((sp,i)=>{
  const col=(AT[sp.type]||{}).c||'#888';
  const row=[0,1,2].map(st=>{
    const o=svg(sp.id,st);
    const inner=o.replace(/^<svg[^>]*>/,'').replace(/<\/svg>$/,'');
    return `<div class="st"><div class="pic">${o}</div><div class="nm">${sp.stages[st]}</div></div>`;
  }).join('');
  cards+=`<section class="card"><header><span class="idx">${String(i+1).padStart(2,'0')}</span><div><h3>${sp.name}</h3><p><i style="background:${col}"></i>${TYPE_CN[sp.type]||sp.type}系 · ${sp.stages.join(' → ')}</p></div></header><div class="row">${row}</div></section>`;
});
const page=`<!DOCTYPE html><html lang="zh-CN"><head><meta charset="utf-8"><title>灵契大陆 · 精灵图鉴（40 种 × 三阶）</title>
<style>
:root{--bg:#0c1024;--card:#151c38;--line:#26305a;--tx:#e8eeff;--dim:#8b98c4}
*{box-sizing:border-box}
body{margin:0;background:radial-gradient(1200px 600px at 50% -10%,#1a2350,#0c1024 60%);color:var(--tx);font-family:"PingFang SC","Microsoft YaHei",system-ui,sans-serif;padding:28px 20px 60px}
h1{font-size:22px;margin:0 0 6px;letter-spacing:.06em}
.sub{color:var(--dim);font-size:13px;margin-bottom:22px}
.grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(330px,1fr));gap:14px;max-width:1400px;margin:0 auto}
.card{background:linear-gradient(180deg,#161e3c,#121834);border:1px solid var(--line);border-radius:14px;padding:12px 12px 10px}
.card header{display:flex;gap:10px;align-items:center;margin-bottom:6px}
.idx{font:600 12px/1 ui-monospace,monospace;color:#6f7dad;background:#0e1430;border:1px solid var(--line);border-radius:6px;padding:5px 6px}
h3{margin:0;font-size:15px}
.card p{margin:2px 0 0;font-size:11.5px;color:var(--dim);display:flex;align-items:center;gap:5px}
.card p i{width:8px;height:8px;border-radius:2px;display:inline-block}
.row{display:grid;grid-template-columns:repeat(3,1fr);gap:4px}
.st{text-align:center}
.pic svg{width:100%;height:auto;display:block}
.nm{font-size:11px;color:#a9b6dc;margin-top:-4px}
</style></head><body>
<h1>灵契大陆 · 精灵图鉴</h1>
<div class="sub">40 种精灵 × 三阶进化 = 120 形态 · 由游戏内同一套 SVG 造型引擎实时渲染（与游戏内完全一致）</div>
<div class="grid">${cards}</div>
</body></html>`;
fs.writeFileSync(OUT,page);
console.log('wrote',OUT,(page.length/1024|0)+'KB','svg=',(page.match(/<svg/g)||[]).length);
