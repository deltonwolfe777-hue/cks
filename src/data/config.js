// ============================================================
// 数据层：全局游戏配置 / 经验与进化参数 / 敌方层级
// 迁移自 index.html（原 2434–2452 行）。
// ============================================================

// 进化：羁绊阈值 / 等级阈值（对应一阶→二阶→三阶）
export const EVO_BOND = [0, 4, 9];
export const EVO_LV = [0, 7, 18];

export const MAX_BOND = 12;
export const MAX_PARTY = 6;
export const MAX_LV = 50;

// 升到 L+1 需要的经验 = (L+1)^3 - L^3
export function expNeed(lv) {
  lv = Math.max(1, Math.min(MAX_LV - 1, lv || 1));
  return 3 * lv * lv + 3 * lv + 1;
}
export function expTotalAt(lv) { return Math.pow(Math.max(1, lv || 1), 3); }

// 种族基础经验：由种族值总和推导
export function baseExp(sp) {
  const b = sp.base;
  return Math.round((b.hp * 0.5 + b.atk + b.def + b.spd) / 4);
}

// 敌方层级：普通 / 稀有 / 训练家 / 霸主，经验倍率不同
export const TIERS = {
  wild:     { name: '野生',   mult: 1.0, color: '#9aa6d6' },
  rare:     { name: '稀有',   mult: 2.2, color: '#22d3ee' },
  trainer:  { name: '训练家', mult: 1.6, color: '#ffd166' },
  boss:     { name: '霸主',   mult: 3.2, color: '#fb7185' }
};
