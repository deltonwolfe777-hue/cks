// ============================================================
// 数据层：地图瓦片 / 生物群系 / 出生点
// 迁移自 index.html（原 2454–2472 行）。
// 注意：碰撞相关的 walkable() 在 map 模块实现，这里只放静态配置。
// ============================================================

export const TILE = 32, MAP_W = 48, MAP_H = 34;

export const T = {
  GRASS: 0, TALL: 1, PATH: 2, TREE: 3, WATER: 4,
  ROCK: 5, SNOW: 6, SAND: 7, LAVA: 8, RUIN: 9
};

export const TILE_CLASS = [
  't-grass', 't-tall', 't-path', 't-tree', 't-water',
  't-rock', 't-snow', 't-sand', 't-lava', 't-ruin'
];

export const WALKABLE = new Set([T.GRASS, T.TALL, T.PATH, T.SNOW, T.SAND, T.RUIN]);

// 草丛遇敌概率（按瓦片类型）
export const ENC_CHANCE = {};
ENC_CHANCE[T.TALL] = .16;
ENC_CHANCE[T.SNOW] = .16;
ENC_CHANCE[T.SAND] = .10;
ENC_CHANCE[T.RUIN] = .07;

// 中央枢纽（精灵中心 + 出发点附近）
export const HUB = { x: 25, y: 17 };

// 生物群系：每个群系定义中心、半径、精灵池与稀有种
export const BIOMES = [
  { key: 'plains',  name: '微风草原', cx: 8,  cy: 8,  r: 7, pools: ['s1','s3','s11','s9','s18','s23','s35'], rare: 's18' },
  { key: 'forest',  name: '低语森林', cx: 8,  cy: 26, r: 7, pools: ['s3','s12','s1','s10','s22','s24','s39'], rare: 's39' },
  { key: 'lake',    name: '碧波湖',   cx: 22, cy: 7,  r: 7, pools: ['s2','s9','s4','s19','s20','s21'],       rare: 's20' },
  { key: 'volcano', name: '灰烬火山', cx: 41, cy: 8,  r: 7, pools: ['s1','s11','s13','s7','s16','s17','s33'], rare: 's17' },
  { key: 'snow',    name: '霜白雪原', cx: 41, cy: 26, r: 7, pools: ['s8','s13','s7','s33','s34'],      rare: 's33' },
  { key: 'desert',  name: '流沙荒漠', cx: 22, cy: 27, r: 6, pools: ['s7','s13','s4','s32','s25'],      rare: 's25' },
  { key: 'ruins',   name: '遗忘遗迹', cx: 13, cy: 17, r: 4, pools: ['s10','s6','s14','s29','s30','s38'],     rare: 's38' },
  { key: 'ridge',   name: '龙脊山道', cx: 35, cy: 17, r: 4, pools: ['s14','s15','s7','s40','s36'],     rare: 's40' }
];

export const BIOME_BY_KEY = {};
BIOMES.forEach(b => { BIOME_BY_KEY[b.key] = b; });
