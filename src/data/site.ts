export const navigation = [
  { href: '/', label: '首页' },
  { href: '/world', label: '世界总览' },
  { href: '/search', label: '搜索' },
  { href: '/history', label: '编年史' },
  { href: '/tournaments', label: '四年四会' },
  { href: '/rankings', label: '名榜暗榜' },
  { href: '/kingdoms', label: '王国与势力' },
  { href: '/atlas', label: '地图与疆域' },
  { href: '/personae', label: '人物列传' },
  { href: '/relations', label: '关系图' },
];

export const worldBasics = {
  techLevel:
    '剑与魔法并存，同时存在枪械与载具等物理科技。整体观感更接近“更发达的中世纪”：魔法替代许多现代高科技需求，但也催生了另一条基于物理法则的工程路线。',
  geography:
    '大陆完整广阔，中部自东向西延展的沙漠带将南北分隔。长期对峙使北方与南方各自内部更趋团结。',
  north:
    '北方为统一帝国，以王权与中央秩序统合诸地与诸组织。',
  south:
    '南方为万国联盟，名义上诸国并立、宗派林立，实际上由“魔法学校”及其校联合部门维系共同秩序与资格体系。',
};

export const academyOverview = {
  origin:
    '最初只有一所“魔法学校”，凭创始人实力在联盟立足；后因培养成效惊人而名望骤起，学院出身者逐步占据南方关键岗位。',
  legitimacy:
    '学院名分上被视为“南方天下共主”：并非直接任命各国官员，而是以教育、军衔与高阶魔法许可构成资格秩序的核心入口。',
  admissions:
    '南方十四岁以下几乎所有普通人孩子都想进入学院，但统一试炼极为严苛，形成全民共识的上升通道与残酷筛选。',
  whoDidNotEnter:
    '未入学院者主要流向宗派/教团体系、各国地方行政与军队、雇佣兵与地下世界（暗榜温床），以及地方分院/预备役等第二梯队体系。',
  certifications: [
    '军职/禁卫军体系的军衔与指挥资格',
    '魔法等级与禁术许可（部分术法需许可与记录）',
    '学术与毕业头衔（不直接掌管各国官职任用，但社会默认以文凭与履历决定门槛）',
  ],
  colleges: [
    { name: '魔法院', note: '传统法术体系的核心学院。' },
    { name: '召唤院', note: '以契约、召唤与异界联系著称。' },
    { name: '死灵院', note: '研究亡灵与生死边界，力量与争议并存。' },
    {
      name: '物理院',
      note: '面向执着物理法则或缺乏魔法天赋者的工程路线；枪械、载具与实用技术在此汇流。',
    },
  ],
};

export const immortalityOrder = {
  summary:
    '世界每隔若干年会诞生极少数“永生名额”（民间多将其视作尊贵神迹，而非可讨论的制度资源）。名额由十大强者与少数顶尖人物共同管理与裁定，各方承认其权威，不构成争抢，只有争取。',
  rule:
    '永生不可从现存永生者身上转移；名额只会在“新增授予”时出现，世界照常运转。',
  council:
    '评议会以程序裁定归属，强调长期影响与秩序平衡。对大多数人而言，永生者更像信仰与时代象征。',
};

export const tournaments = [
  {
    year: 1,
    title: '门派新人战',
    onceInLife: false,
    eligibility: '门派新人',
    reward: '胜者获得门派内奖励与声望。',
    note: '宗派体系的重要入口，也是许多未入学院者的第一条道路。',
  },
  {
    year: 2,
    title: '门派战',
    onceInLife: true,
    eligibility: '门派代表（不限年龄势力）',
    reward: '胜者门派获得大量奖励与地位提升。',
    note: '宗派之间的公开竞争，往往牵动联盟的资源与话语权。',
  },
  {
    year: 3,
    title: '新人战',
    onceInLife: true,
    eligibility: '年龄 40 岁以下（不限势力）',
    reward: '胜者获大院指导，并可自由进入各职体系。',
    note: '更接近“全社会的晋升试炼”，也是雇佣兵与地方军政的跃迁通道。',
  },
  {
    year: 4,
    title: '圣战',
    onceInLife: true,
    eligibility: '不限年龄势力（每人一生仅一次）',
    reward: '冠军获大校亲授；前十名亦获关照与资源倾斜。',
    note: '四年一轮的顶点盛会，被视为时代的公开选拔与命运改写之机。',
  },
];

export const rankings = {
  brightTop10: [
    {
      rank: 1,
      name: '帝国帝王',
      side: '北',
      gender: '男',
      title: '北方帝国皇帝',
      note: '以“帝王之术”统一北方，明榜第一。',
    },
    {
      rank: 2,
      name: '学院院长',
      side: '南',
      gender: '女',
      title: '魔法学校创始人',
      note: '南方共主的象征，唯一正校长。',
    },
    {
      rank: 3,
      name: '亡灵之主',
      side: '南',
      gender: '女',
      title: '死灵院创始人',
      note: '第三位加入学院的顶尖人物，亡灵术与武力并重。',
    },
    {
      rank: 4,
      name: '武僧达摩',
      side: '北',
      gender: '男',
      title: '北方寺庙之主',
      note: '拳腿奥义登峰，正国级人物。',
    },
    {
      rank: 5,
      name: '萝莉召唤师',
      side: '南',
      gender: '女',
      title: '召唤院创始人',
      note: '第二位加入学院的顶尖人物，召唤术冠绝一时。',
    },
    {
      rank: 6,
      name: '地狱之主',
      side: '中',
      gender: '男',
      title: '异空间魔族之王',
      note: '不属南北，关系更亲北方。',
    },
    {
      rank: 7,
      name: '刺客首领',
      side: '北',
      gender: '女',
      title: '北方刺客机构创始人',
      note: '暗杀全术之巅，正国级。',
    },
    {
      rank: 8,
      name: '帝国大将',
      side: '北',
      gender: '男',
      title: '北方最大将军',
      note: '雇佣军出身，统御军势。',
    },
    {
      rank: 9,
      name: '图书馆长',
      side: '北',
      gender: '男',
      title: '北方学院体系一把手',
      note: '法术奇迹层次的研究者与组织者。',
    },
    {
      rank: 10,
      name: '物流司长',
      side: '中',
      gender: '男',
      title: '穿越沙漠的桥梁',
      note: '对峙时代唯一能稳定跨越沙漠寄送物资与情报的组织掌舵者。',
    },
  ],
  dark: [
    {
      rank: 1,
      name: '枭',
      side: '南',
      weapon: '双刀',
      style: '极致双刀',
      note: '百年前崛起的异数，领悟万事万物的奥义以精进武力；情商在线，常在世界级场合担任主持般的枢纽人物。',
    },
    {
      rank: 2,
      name: '慕容家主',
      side: '中立',
      weapon: '未知',
      style: '综合能力',
      note: '枭之妻，枭入赘慕容家后其势力与人脉更为复杂。',
    },
    {
      rank: 3,
      name: '融合者',
      side: '中立',
      weapon: '未知',
      style: '各类能力',
      note: '关于其能力来源与上限众说纷纭，被认为是暗榜最危险的变量之一。',
    },
  ],
};

export const featureCards = [
  {
    title: '世界总览',
    description: '从创世传说、诸海与大陆，到文明边界与旧时代遗迹，先建立你的世界坐标。',
  },
  {
    title: '历史纪年',
    description: '把战争、建国、王朝更替、神谕与灾厄按年代整理成可查阅的编年系统。',
  },
  {
    title: '势力档案',
    description: '每个王国、教团、商盟和骑士团都可以拥有独立条目与内部组织结构。',
  },
  {
    title: '站内检索',
    description: '把人物、地点、势力和历史事件放进同一索引，后续查找会比翻页快得多。',
  },
  {
    title: '关系图谱',
    description: '把阵营、血脉、盟约与敌对关系做成图谱，为后续复杂设定留下接口。',
  },
  {
    title: '地图锚点',
    description: '先从静态地图开始，后续可逐步加入城池、航路、遗迹和时代切换。',
  },
  {
    title: '四年四会',
    description: '四年一轮的盛会节律：门派、军政、学院与地下世界都在其中寻找上升通道。',
  },
  {
    title: '名榜与暗榜',
    description: '明榜是时代的常量，暗榜是时代的变量；两者共同塑造世界的天花板与变数。',
  },
];

export const timeline = [
  {
    era: '创世神话',
    year: '创世前 0 年',
    title: '诸星坠落与原海升起',
    description: '传说最初的大地从坠星之火中冷却，而海洋在神祇沉眠处逐渐漫延。',
  },
  {
    era: '诸城时代',
    year: '苍冠纪 173 年',
    title: '霜林同盟成立',
    description: '北境七城邦在霜林会议上结盟，确立了后世王国议会的雏形。',
  },
  {
    era: '帝国战争',
    year: '赤旌纪 24 年',
    title: '灰塔之战',
    description: '一场改变大陆贸易路线的大战，从此西境港口成为诸国必争之地。',
  },
  {
    era: '帝国战争',
    year: '赤旌纪 41 年',
    title: '沉钟和约',
    description: '诸国在长达十七年的边境拉锯后签署和约，旧贵族秩序由此松动。',
  },
  {
    era: '新航海纪',
    year: '远潮纪 6 年',
    title: '黑流航道被重新发现',
    description: '暮海商盟借此打开南方群岛贸易，也让海权第一次压过陆上王廷。',
  },
];

export const kingdoms = [
  {
    name: '白鹿王廷',
    seat: '雪垒城',
    alignment: '山地王权',
    summary: '以山地关隘与古老誓约闻名，贵族秩序森严，崇尚血脉与守土。',
  },
  {
    name: '暮海商盟',
    seat: '银潮港',
    alignment: '海上城邦联盟',
    summary: '以港口城市与远航舰队为核心，实际由数个大商族与航道公会共治。',
  },
  {
    name: '曜石圣座',
    seat: '圣垣高城',
    alignment: '神权军国',
    summary: '兼具宗教与军事统治的政体，扩张依靠圣职军团和巡礼网络。',
  },
];

export const personae = [
  {
    name: '伊斯兰德三世',
    role: '白鹿王廷的摄政君主',
    allegiance: '白鹿王廷',
    note: '因提前继位而备受争议，却在北境危局中完成了军制改革。',
  },
  {
    name: '阿芙萝拉',
    role: '暮海商盟的星潮领航者',
    allegiance: '暮海商盟',
    note: '掌握最完整的洋流图，被许多水手认为是新时代的开路者。',
  },
  {
    name: '黑冠书记官',
    role: '曜石圣座的秘密史官',
    allegiance: '曜石圣座',
    note: '记录王朝不愿公开的真相，也可能是多场宫廷清洗的设计者。',
  },
];

export const relationGraph = {
  nodes: [
    { id: 'northEmpire', label: '北方统一帝国', type: 'faction' },
    { id: 'southAlliance', label: '南方万国联盟', type: 'faction' },
    { id: 'magicSchool', label: '魔法学校（学院体系）', type: 'institution' },
    { id: 'unionDept', label: '校联合部门', type: 'institution' },
    { id: 'imperialMonarch', label: '帝国帝王（明一）', type: 'person' },
    { id: 'academyHead', label: '学院院长（明二）', type: 'person' },
    { id: 'owl', label: '枭（暗一）', type: 'person' },
    { id: 'fourYearCycle', label: '四年四会', type: 'event' },
    { id: 'brightList', label: '明榜·十大强者', type: 'system' },
    { id: 'darkList', label: '暗榜', type: 'system' },
    { id: 'immortalCouncil', label: '永生评议会', type: 'system' },
    { id: 'fourColleges', label: '四大学院', type: 'institution' },
    { id: 'academyTrial', label: '统一试炼', type: 'event' },
  ],
  edges: [
    { from: 'imperialMonarch', to: 'northEmpire', label: '统一与统御' },
    { from: 'academyHead', to: 'magicSchool', label: '创始与掌权' },
    { from: 'magicSchool', to: 'southAlliance', label: '资格秩序中枢' },
    { from: 'unionDept', to: 'southAlliance', label: '联合行政执行' },
    { from: 'academyTrial', to: 'magicSchool', label: '筛选与入学共识' },
    { from: 'fourColleges', to: 'magicSchool', label: '同属一校' },
    { from: 'fourYearCycle', to: 'magicSchool', label: '公开筛选与认证' },
    { from: 'brightList', to: 'immortalCouncil', label: '权威背书' },
    { from: 'darkList', to: 'owl', label: '首位异数' },
    { from: 'owl', to: 'southAlliance', label: '枢纽与变数' },
  ],
};

export const searchIndex = [
  ...timeline.map((item) => ({
    type: '历史事件',
    title: item.title,
    href: '/history',
    meta: `${item.year} · ${item.era}`,
    body: item.description,
  })),
  ...kingdoms.map((item) => ({
    type: '王国势力',
    title: item.name,
    href: '/kingdoms',
    meta: `${item.seat} · ${item.alignment}`,
    body: item.summary,
  })),
  ...personae.map((item) => ({
    type: '人物',
    title: item.name,
    href: '/personae',
    meta: `${item.role} · ${item.allegiance}`,
    body: item.note,
  })),
  ...rankings.brightTop10.map((item) => ({
    type: '明榜',
    title: item.name,
    href: '/rankings',
    meta: `${item.title} · ${item.side}`,
    body: item.note,
  })),
  ...rankings.dark.map((item) => ({
    type: '暗榜',
    title: item.name,
    href: '/rankings',
    meta: `${item.style} · ${item.side}`,
    body: item.note,
  })),
  ...tournaments.map((item) => ({
    type: '盛会',
    title: item.title,
    href: '/tournaments',
    meta: `第 ${item.year} 年 · ${item.onceInLife ? '一生一次' : '可多次参与'}`,
    body: `${item.eligibility}。${item.reward}`,
  })),
];

export const pageSearchIndex = [
  {
    type: '页面内容',
    title: '首页',
    href: '/',
    meta: '定晓定史书 · 世界总览',
    body:
      '把你脑中的王国、旧神与漫长战争，整理成一部能被翻阅的世界史。这里是一座私人设定档案馆，可以承载创世神话、王朝末路、群山边疆、远海航路、人物列传、地图锚点与派系关系。',
  },
  {
    type: '页面内容',
    title: '首页 · 写作方式建议',
    href: '/',
    meta: '首页说明 · 结构建议',
    body:
      '先把大框架写成短条目，再慢慢补充细节。同一条目尽量固定结构，时间线负责建立顺序，人物页负责讲命运，关系图负责讲势力牵扯。',
  },
  {
    type: '页面内容',
    title: '编年史页',
    href: '/history',
    meta: '纪元、战争、迁徙、灾变',
    body:
      '这里适合放纪元划分、王朝更替、战争、迁徙、灾变和神话事件。第二版已经预留出时代标签与事件筛选思路。',
  },
  {
    type: '页面内容',
    title: '王国与势力页',
    href: '/kingdoms',
    meta: '政体、教团、商盟、组织架构',
    body:
      '每个条目未来都能扩展出统治结构、贵族谱系、军制、外交与代表人物，逐步形成你的设定百科。',
  },
  {
    type: '页面内容',
    title: '地图与疆域页',
    href: '/atlas',
    meta: '总地图、边疆、城邦、航路',
    body:
      '第一版先放总地图图片或示意图，后面再补点击区域、旅行路线、边界变化和历史疆域对比。可以先从静态图片开始，再给航线、战争路线和遗迹位置加标记。',
  },
  {
    type: '页面内容',
    title: '人物列传页',
    href: '/personae',
    meta: '人物、家族、阵营、敌友关系',
    body:
      '让重要人物拥有传记、立场与关系网。后面可以继续给人物增加家族、称号、阵营、敌友关系、关键事件与结局。',
  },
  {
    type: '页面内容',
    title: '关系图页',
    href: '/relations',
    meta: '人物、王权、盟约、敌对',
    body:
      '让人物、王权与盟约之间的牵连一眼可见。这是一版结构原型，后面可以升级成真正可点击、可筛选的互动图谱。',
  },
  {
    type: '页面内容',
    title: '世界总览页',
    href: '/world',
    meta: '大陆格局 · 南北对峙 · 魔法与科技',
    body:
      '大陆完整广阔，中部沙漠带横断南北。北方统一帝国，南方万国联盟以学院为共主。剑与魔法并存，同时也有枪械与载具等物理科技。',
  },
  {
    type: '页面内容',
    title: '学院体系页',
    href: '/academy',
    meta: '统一试炼 · 军衔认证 · 禁术许可 · 四大学院',
    body:
      '魔法学校不只是魔法学院。随着四大学院（魔法院、召唤院、死灵院、物理院）成形，学院成为南方资格秩序的入口：培养、认证与许可。',
  },
  {
    type: '页面内容',
    title: '四年四会页',
    href: '/tournaments',
    meta: '门派新人战 · 门派战 · 新人战 · 圣战',
    body:
      '四年一轮，每年一会。由学院与校联合部门主导的公开盛会节律，把门派、军政与地下世界纳入同一条可被承认的上升通道。',
  },
  {
    type: '页面内容',
    title: '名榜暗榜页',
    href: '/rankings',
    meta: '明榜十大强者 · 暗榜枭',
    body:
      '明榜前十来自远古时代，数万年后仍无人能及。暗榜记录时代变量：暗榜第一枭为百年前崛起的强者，常作为世界级场合的枢纽人物。',
  },
  {
    type: '页面内容',
    title: '永生与评议会页',
    href: '/immortality',
    meta: '极少数名额 · 评议会裁定 · 民间信仰',
    body:
      '永生名额极少，民间多将永生者视作尊贵象征。名额由十大强者与顶尖人物共同管理裁定；永生不可从现存永生者身上转移，只会新增授予。',
  },
];
