// ============================================================
// 数据层：精灵物种基础数据（40 种 × 三阶）
// 迁移自 index.html（原 480–541 行）。
// 依赖 types.js 的 ABILITIES / TALENTS 做物种初始化。
// ============================================================
import { ABILITIES, TALENTS } from './types.js';

export const SPIRITS = [
  { id: 's1',  name: '火苗鼠', type: 'fire',     emoji: ['🐭','🦊','🐲'], stages: ['火苗鼠','烈焰狐','焰王兽'],     base: { hp: 45, atk: 62, def: 40, spd: 72 }, talent: 'atk',  desc: '尾尖跳动着不灭的火花，越战斗越炽热。' },
  { id: 's2',  name: '水珠蛙', type: 'water',    emoji: ['🐸','🐊','🐉'], stages: ['水珠蛙','潮汐鳄','深海龙'],     base: { hp: 55, atk: 50, def: 55, spd: 48 }, talent: 'hp',   desc: '皮肤能分泌治愈水露，是可靠的伙伴。' },
  { id: 's3',  name: '草芽兔', type: 'grass',    emoji: ['🐰','🐇','🌙'], stages: ['草芽兔','苔原兔','月影兔王'],   base: { hp: 60, atk: 46, def: 58, spd: 54 }, talent: 'spd',  desc: '头顶嫩芽随心情生长，月夜下跃动如影。' },
  { id: 's4',  name: '电光鼠', type: 'electric', emoji: ['🐹','🦅','🐉'], stages: ['电光鼠','雷霆鹰','风暴龙'],     base: { hp: 42, atk: 66, def: 38, spd: 85 }, talent: 'spd',  desc: '颊囊蓄满电能，速度冠绝同族。' },
  { id: 's5',  name: '光羽鸟', type: 'light',    emoji: ['🐤','🕊️','🦅'],stages: ['光羽鸟','圣光鹤','日向神鸟'],   base: { hp: 50, atk: 58, def: 46, spd: 70 }, talent: 'spd',  desc: '羽翼洒落暖光，为队伍驱散阴霾。' },
  { id: 's6',  name: '暗影猫', type: 'dark',     emoji: ['🐱','🐆','😈'], stages: ['暗影猫','夜行豹','虚空魔'],     base: { hp: 48, atk: 64, def: 44, spd: 74 }, talent: 'atk',  desc: '潜行于夜色，眼神能看穿谎言。' },
  { id: 's7',  name: '岩石龟', type: 'rock',     emoji: ['🐢','🐢','🗿'], stages: ['岩石龟','山岳龜','巨岩神'],     base: { hp: 70, atk: 52, def: 75, spd: 30 }, talent: 'def',  desc: '背甲坚不可摧，是团队的壁垒。' },
  { id: 's8',  name: '冰晶狐', type: 'ice',      emoji: ['🦊','🐺','🐻'], stages: ['冰晶狐','寒霜狼','极地霸主'],   base: { hp: 52, atk: 56, def: 50, spd: 66 }, talent: 'atk',  desc: '呼出的白雾能冻结空气。' },
  { id: 's9',  name: '风灵蝶', type: 'wind',     emoji: ['🐛','🦋','🦅'], stages: ['风灵蝶','疾风隼','天穹鹏'],     base: { hp: 46, atk: 60, def: 42, spd: 80 }, talent: 'spd',  desc: '乘风而行，踪迹难觅。' },
  { id: 's10', name: '心灵枭', type: 'psychic',  emoji: ['🐣','🦉','👁️'],stages: ['心灵枭','幻念枭','梦界主宰'],   base: { hp: 54, atk: 68, def: 48, spd: 64 }, talent: 'crit', desc: '能读取微弱的心声，通晓梦境。' },
  { id: 's11', name: '烈焰虎', type: 'fire',     emoji: ['🐯','🐅','🦁'], stages: ['小火虎','烈焰虎','焚天虎王'],   base: { hp: 56, atk: 80, def: 48, spd: 66 }, talent: 'atk',  desc: '虎啸生风，每根毛发都燃烧着战意。' },
  { id: 's12', name: '幼叶鹿', type: 'grass',    emoji: ['🦌','🦌','🌳'], stages: ['幼叶鹿','森灵鹿','世界树灵'],   base: { hp: 58, atk: 50, def: 56, spd: 62 }, talent: 'hp',   desc: '踏入森林便与草木共鸣，角上生花。' },
  { id: 's13', name: '岩甲蜥', type: 'rock',     emoji: ['🦎','🦎','🐊'], stages: ['幼岩蜥','岩甲蜥','熔岩巨蜥'],   base: { hp: 64, atk: 58, def: 70, spd: 38 }, talent: 'def',  desc: '坚硬鳞甲能抵挡滚石，栖息在火山口。' },
  { id: 's14', name: '大地龙', type: 'dragon',   emoji: ['🦕','🦖','🐉'], stages: ['幼土龙','岩甲龙','大地龙王'],   base: { hp: 72, atk: 76, def: 64, spd: 48 }, talent: 'elem', desc: '沉睡于大地深处，苏醒时山岳为之震动。' },
  { id: 's15', name: '苍穹龙', type: 'dragon',   emoji: ['🐲','🦅','🐉'], stages: ['翼龙崽','风翼龙','苍穹龙王'],   base: { hp: 62, atk: 78, def: 54, spd: 78 }, talent: 'spd',  desc: '展开遮天巨翼，翱翔于云海之上。' },
  { id: 's16', name: '火羽雀', type: 'fire',     emoji: ['🐤','🕊️','🦅'],stages: ['火羽雀','烈焰鸢','焚天凤'],     base: { hp: 46, atk: 64, def: 42, spd: 76 }, talent: 'atk',  desc: '尾羽燃着不熄的火苗，越飞火势越盛。' },
  { id: 's17', name: '熔岩蟹', type: 'fire',     emoji: ['🦀','🦂','🦞'], stages: ['熔岩蟹','炽甲蟹','炼狱蟹王'],   base: { hp: 64, atk: 54, def: 72, spd: 34 }, talent: 'def',  desc: '甲壳是冷却的火山岩，钳中藏着熔浆。' },
  { id: 's18', name: '炎鬃狼', type: 'fire',     emoji: ['🐺','🐺','🐺'], stages: ['炎鬃狼','烈焰狼','狱炎狼王'],   base: { hp: 56, atk: 72, def: 46, spd: 70 }, talent: 'atk',  desc: '鬃毛如流动火焰，夜行时像一盏游走的灯。' },
  { id: 's19', name: '潮汐鱼', type: 'water',    emoji: ['🐟','🐠','🐋'], stages: ['潮汐鱼','涌浪鱼','深渊鲸'],     base: { hp: 50, atk: 54, def: 48, spd: 66 }, talent: 'spd',  desc: '随潮起潮落改变体色，是湖中的信使。' },
  { id: 's20', name: '寒潮鲨', type: 'water',    emoji: ['🐟','🦈','🦈'], stages: ['寒潮鲨','齿鲨','磷光鲨王'],     base: { hp: 58, atk: 70, def: 50, spd: 68 }, talent: 'atk',  desc: '背鳍切开寒流，磷光在深水中指引方向。' },
  { id: 's21', name: '泡沫蛙', type: 'water',    emoji: ['🐸','🐊','🐉'], stages: ['泡沫蛙','潮汐蛙','碧海蛙神'],   base: { hp: 58, atk: 50, def: 56, spd: 48 }, talent: 'hp',   desc: '鼓起的腮能吐出治愈的泡沫。' },
  { id: 's22', name: '藤蔓蛇', type: 'grass',    emoji: ['🐍','🐲','🐉'], stages: ['藤蔓蛇','绞藤蟒','世界树蟒'],   base: { hp: 54, atk: 58, def: 52, spd: 64 }, talent: 'spd',  desc: '缠绕古树而生，绞缠间绽放新芽。' },
  { id: 's23', name: '苔原熊', type: 'grass',    emoji: ['🐻','🐻','🐻'], stages: ['苔原熊','林熊','森灵熊王'],     base: { hp: 66, atk: 56, def: 64, spd: 40 }, talent: 'def',  desc: '背披苔藓，沉睡时与森林融为一体。' },
  { id: 's24', name: '花灵蝶', type: 'grass',    emoji: ['🐛','🦋','🦋'], stages: ['花灵蝶','花裳蝶','花界女王'],   base: { hp: 48, atk: 58, def: 44, spd: 78 }, talent: 'spd',  desc: '翅上花开引来蜂群，是草原的园丁。' },
  { id: 's25', name: '雷角牛', type: 'electric', emoji: ['🐂','🐃','🐮'], stages: ['雷角牛','雷蹄牛','雷霆牛王'],   base: { hp: 62, atk: 74, def: 58, spd: 52 }, talent: 'atk',  desc: '双角积蓄雷电，踏地便引发小型风暴。' },
  { id: 's26', name: '电尾鼠', type: 'electric', emoji: ['🐭','🐹','🐭'], stages: ['电尾鼠','雷光鼠','暴雷鼠王'],   base: { hp: 44, atk: 64, def: 40, spd: 82 }, talent: 'spd',  desc: '尾巴如天线般竖起，感应远处的雷云。' },
  { id: 's27', name: '晨光鹿', type: 'light',    emoji: ['🦌','🦌','🌟'], stages: ['晨光鹿','辉鹿','朝阳神鹿'],     base: { hp: 60, atk: 52, def: 56, spd: 62 }, talent: 'hp',   desc: '鹿角承住第一缕晨光，所到之处阴霾退散。' },
  { id: 's28', name: '辉羽枭', type: 'light',    emoji: ['🐣','🦉','👁️'],stages: ['辉羽枭','圣光枭','曜日枭神'],   base: { hp: 54, atk: 60, def: 48, spd: 66 }, talent: 'crit', desc: '羽翼滤下暖光，为迷途者指路。' },
  { id: 's29', name: '影蝙蝠', type: 'dark',     emoji: ['🦇','🦇','😈'], stages: ['影蝙蝠','夜魇蝠','永夜蝠王'],   base: { hp: 50, atk: 62, def: 44, spd: 80 }, talent: 'spd',  desc: '翼膜吸纳夜色，飞行时无声无息。' },
  { id: 's30', name: '暗影蛛', type: 'dark',     emoji: ['🕷️','🕷️','🕸️'],stages: ['暗影蛛','毒丝蛛','虚空蛛后'],   base: { hp: 52, atk: 66, def: 50, spd: 60 }, talent: 'atk',  desc: '在遗迹暗角结网，丝线带着沉睡的毒。' },
  { id: 's31', name: '磐石龟', type: 'rock',     emoji: ['🐢','🐢','🗿'], stages: ['磐石龟','岩磐龟','山岳龟神'],   base: { hp: 72, atk: 50, def: 76, spd: 30 }, talent: 'def',  desc: '背负整座小山前行，是移动的堡垒。' },
  { id: 's32', name: '岩爪蟹', type: 'rock',     emoji: ['🦀','🦀','🦞'], stages: ['岩爪蟹','碎岩蟹','巨钳蟹将'],   base: { hp: 60, atk: 56, def: 70, spd: 38 }, talent: 'def',  desc: '钳子能夹碎顽石，守护矿脉入口。' },
  { id: 's33', name: '冰晶熊', type: 'ice',      emoji: ['🐻','🐺','🐻'], stages: ['冰晶熊','霜铠熊','极地熊帝'],   base: { hp: 64, atk: 58, def: 62, spd: 44 }, talent: 'def',  desc: '呼出的白雾凝成铠甲，踏雪无痕。' },
  { id: 's34', name: '霜翼鸟', type: 'ice',      emoji: ['🐤','🕊️','🦅'],stages: ['霜翼鸟','冰羽鹰','寒霜鸟王'],   base: { hp: 52, atk: 58, def: 46, spd: 74 }, talent: 'spd',  desc: '翅尖结霜，掠过湖面留下冰纹。' },
  { id: 's35', name: '疾风隼', type: 'wind',     emoji: ['🐤','🦅','🦅'], stages: ['疾风隼','裂空隼','天风隼王'],   base: { hp: 48, atk: 62, def: 44, spd: 84 }, talent: 'spd',  desc: '翅如弯刀切开气流，俯冲快过视线。' },
  { id: 's36', name: '旋风蛇', type: 'wind',     emoji: ['🐍','🐍','🐉'], stages: ['旋风蛇','气旋蟒','飓风蛇王'],   base: { hp: 52, atk: 56, def: 48, spd: 72 }, talent: 'spd',  desc: '盘旋成风口，所过之处落叶飞舞。' },
  { id: 's37', name: '飘羽蝶', type: 'wind',     emoji: ['🐛','🦋','🦋'], stages: ['飘羽蝶','风裳蝶','天穹蝶后'],   base: { hp: 46, atk: 58, def: 42, spd: 80 }, talent: 'spd',  desc: '翅上生有气孔，乘风飘行不落地面。' },
  { id: 's38', name: '念力章', type: 'psychic',  emoji: ['🐙','🦑','🐙'], stages: ['念力章','灵能章','虚空章王'],   base: { hp: 56, atk: 60, def: 54, spd: 58 }, talent: 'crit', desc: '触腕编织精神丝线，能使物体悬浮。' },
  { id: 's39', name: '幻梦枭', type: 'psychic',  emoji: ['🐣','🦉','👁️'],stages: ['幻梦枭','迷梦枭','梦境主宰'],   base: { hp: 54, atk: 64, def: 48, spd: 66 }, talent: 'crit', desc: '目光所及便织出幻梦，猎物在安宁中沉眠。' },
  { id: 's40', name: '深渊龙', type: 'dragon',   emoji: ['🐲','🐉','🐉'], stages: ['深渊幼龙','幽渊龙','深渊龙王'], base: { hp: 70, atk: 78, def: 66, spd: 60 }, talent: 'atk',  desc: '来自地脉最深处，鳞间渗着幽蓝的微光。' }
];

export const ART_TYPE = {
  fire:     { c: '#ff6b35', line: 'mystic' }, water:   { c: '#4d96ff', line: 'mystic' },
  grass:    { c: '#5fd068', line: 'mystic' }, electric:{ c: '#ffd93d', line: 'tech' },
  light:    { c: '#ffe27a', line: 'mystic' }, dark:    { c: '#9b6dff', line: 'mystic' },
  rock:     { c: '#c08552', line: 'tech' },    ice:     { c: '#7fd8e8', line: 'tech' },
  wind:     { c: '#76e0a8', line: 'mystic' }, psychic:{ c: '#ff8fd0', line: 'tech' },
  dragon:   { c: '#6b5cff', line: 'tech' }
};

export const ART_INK = '#0b1026', ART_BASE = '#3A4C86', ART_DARK = '#161F45', ART_LITE = '#5A70B0', ART_HI = '#E8F4FF';

// 物种初始化：挂上特性与天赋对象（运行时一次性完成）
SPIRITS.forEach(s => { s.ability = ABILITIES[s.type]; s.talentObj = TALENTS[s.talent]; });
