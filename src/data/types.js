// ============================================================
// 数据层：属性 / 属性克制 / 属性招式 / 特性 / 性格
// 迁移自 index.html（原 406–475 行），纯数据 + 纯函数，无 DOM 依赖。
// ============================================================

export const TYPES = {
  fire:    { name: '火', color: 'var(--type-fire)' },
  water:   { name: '水', color: 'var(--type-water)' },
  grass:   { name: '草', color: 'var(--type-grass)' },
  electric:{ name: '电', color: 'var(--type-electric)' },
  light:   { name: '光', color: 'var(--type-light)' },
  dark:    { name: '暗', color: 'var(--type-dark)' },
  rock:    { name: '岩', color: 'var(--type-rock)' },
  ice:     { name: '冰', color: 'var(--type-ice)' },
  wind:    { name: '风', color: 'var(--type-wind)' },
  psychic: { name: '超', color: 'var(--type-psychic)' },
  dragon:  { name: '龙', color: 'var(--type-dragon)' }
};

export const TYPE_NONE = { name: '普', color: '#9aa6d6' };

export function typeInfo(t) { return t === 'none' ? TYPE_NONE : (TYPES[t] || TYPE_NONE); }
export function typeName(t) { return typeInfo(t).name; }

// 属性克制倍率表：atk -> { def: 倍率 }
export const TYPE_CHART = {
  fire:     { grass: 2, ice: 2, fire: .5, water: .5, rock: .5, dragon: .5 },
  water:    { fire: 2, rock: 2, water: .5, grass: .5, dragon: .5 },
  grass:    { water: 2, rock: 2, fire: .5, grass: .5, wind: .5, dragon: .5 },
  electric: { water: 2, wind: 2, electric: .5, grass: .5, dragon: .5 },
  ice:      { grass: 2, wind: 2, dragon: 2, fire: .5, water: .5, ice: .5 },
  rock:     { fire: 2, ice: 2, wind: 2 },
  dark:     { psychic: 2, dark: .5, light: .5 },
  light:    { dragon: 2, dark: 2, fire: .5 },
  psychic:  { psychic: .5, dark: 0 },
  wind:     { grass: 2, electric: .5, rock: .5 },
  dragon:   { dragon: 2, light: 0 }
};

// 攻击属性对防御属性的克制倍率（缺省 1）
export function mult(atk, def) {
  const row = TYPE_CHART[atk];
  return (row && row[def] !== undefined) ? row[def] : 1;
}

// 各属性对应的招式池（3 个：弱 / 中 / 强）
export const TYPE_MOVES = {
  fire:     [{ name: '火花', power: 40, acc: 100 }, { name: '喷射火焰', power: 90, acc: 95 }, { name: '烈焰冲撞', power: 120, acc: 85 }],
  water:    [{ name: '水枪', power: 40, acc: 100 }, { name: '冲浪', power: 90, acc: 95 }, { name: '水炮', power: 110, acc: 85 }],
  grass:    [{ name: '藤鞭', power: 45, acc: 100 }, { name: '飞叶风暴', power: 90, acc: 95 }, { name: '阳光烈焰', power: 120, acc: 90 }],
  electric: [{ name: '电击', power: 40, acc: 100 }, { name: '十万伏特', power: 90, acc: 95 }, { name: '打雷', power: 110, acc: 85 }],
  ice:      [{ name: '冰砾', power: 40, acc: 100 }, { name: '冰冻光束', power: 90, acc: 95 }, { name: '暴风雪', power: 110, acc: 80 }],
  rock:     [{ name: '落石', power: 50, acc: 95 }, { name: '岩崩', power: 75, acc: 90 }, { name: '尖石攻击', power: 100, acc: 80 }],
  dark:     [{ name: '突袭', power: 60, acc: 100 }, { name: '咬碎', power: 80, acc: 95 }, { name: '恶之波动', power: 90, acc: 95 }],
  light:    [{ name: '魔法闪光', power: 40, acc: 100 }, { name: '妖精之风', power: 80, acc: 100 }, { name: '月亮之力', power: 95, acc: 90 }],
  psychic:  [{ name: '念力', power: 50, acc: 100 }, { name: '精神强念', power: 90, acc: 95 }, { name: '预知未来', power: 120, acc: 90 }],
  wind:     [{ name: '起风', power: 40, acc: 100 }, { name: '空气斩', power: 75, acc: 95 }, { name: '暴风', power: 110, acc: 80 }],
  dragon:   [{ name: '龙息', power: 60, acc: 100 }, { name: '龙爪', power: 80, acc: 95 }, { name: '逆鳞', power: 120, acc: 80 }]
};

// 特性（按属性）
export const ABILITIES = {
  fire:     { name: '烈焰之躯', kind: 'boost', desc: '火系招式威力 +10%。' },
  water:    { name: '激流',     kind: 'boost', desc: '水系招式威力 +10%。' },
  grass:    { name: '茂盛',     kind: 'boost', desc: '草系招式威力 +10%。' },
  electric: { name: '蓄电',     kind: 'boost', desc: '电系招式威力 +10%。' },
  ice:      { name: '雪隐',     kind: 'boost', desc: '冰系招式威力 +10%。' },
  light:    { name: '闪耀',     kind: 'boost', desc: '光系招式威力 +10%。' },
  dark:     { name: '威吓',     kind: 'intimidate', desc: '登场时降低对手攻击 10%。' },
  rock:     { name: '坚硬',     kind: 'bulk', desc: '防御力 +10%。' },
  psychic:  { name: '同步',     kind: 'boost', desc: '超能系招式威力 +10%。' },
  wind:     { name: '疾风',     kind: 'swift', desc: '速度 +10%。' },
  dragon:   { name: '龙鳞',     kind: 'bulk', desc: '防御力 +10%。' }
};

// 天赋（个体天赋）
export const TALENTS = {
  atk:  { name: '天生神力', kind: 'stat', stat: 'atk',  mult: 1.12, desc: '攻击力 +12%。' },
  def:  { name: '铁壁之躯', kind: 'stat', stat: 'def',  mult: 1.12, desc: '防御力 +12%。' },
  spd:  { name: '疾风之足', kind: 'stat', stat: 'spd',  mult: 1.12, desc: '速度 +12%。' },
  hp:   { name: '生命洪流', kind: 'stat', stat: 'hp',   mult: 1.15, desc: '最大体力 +15%。' },
  crit: { name: '强运',     kind: 'crit', desc: '15% 几率造成 1.5 倍暴击。' },
  elem: { name: '元素亲和', kind: 'elem', desc: '属性克制时额外 +10% 伤害。' }
};

export const NATURES = [
  { name: '坦率', up: null, down: null }, { name: '固执', up: 'atk', down: 'spd' },
  { name: '勇敢', up: 'atk', down: 'def' }, { name: '大胆', up: 'def', down: 'atk' },
  { name: '淘气', up: 'def', down: 'spd' }, { name: '胆小', up: 'spd', down: 'atk' },
  { name: '开朗', up: 'spd', down: 'def' }
];

export const STAT_CN = { hp: '体力', atk: '攻击', def: '防御', spd: '速度' };

export function natureDesc(n) {
  if (!n || (!n.up && !n.down)) return '均衡型性格。';
  let s = '';
  if (n.up) s += STAT_CN[n.up] + ' +10%';
  if (n.down) { if (s) s += '，'; s += STAT_CN[n.down] + ' -10%'; }
  return s + '。';
}
export function randomNature() { return NATURES[Math.floor(Math.random() * NATURES.length)]; }
export function findNature(name) { return NATURES.find(n => n.name === name) || NATURES[0]; }
