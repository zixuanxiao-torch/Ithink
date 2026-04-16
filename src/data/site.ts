export const navigation = [
  { href: '/', label: '首页' },
  { href: '/search', label: '搜索' },
  { href: '/history', label: '编年史' },
  { href: '/kingdoms', label: '王国与势力' },
  { href: '/atlas', label: '地图与疆域' },
  { href: '/personae', label: '人物列传' },
  { href: '/relations', label: '关系图' },
];

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
    { id: 'whiteStag', label: '白鹿王廷', type: 'kingdom' },
    { id: 'duskTide', label: '暮海商盟', type: 'kingdom' },
    { id: 'obsidianSee', label: '曜石圣座', type: 'kingdom' },
    { id: 'islanderIII', label: '伊斯兰德三世', type: 'person' },
    { id: 'aurora', label: '阿芙萝拉', type: 'person' },
    { id: 'blackScribe', label: '黑冠书记官', type: 'person' },
  ],
  edges: [
    { from: 'islanderIII', to: 'whiteStag', label: '统御' },
    { from: 'aurora', to: 'duskTide', label: '效力' },
    { from: 'blackScribe', to: 'obsidianSee', label: '隐秘服务' },
    { from: 'whiteStag', to: 'duskTide', label: '贸易盟约' },
    { from: 'obsidianSee', to: 'whiteStag', label: '边境施压' },
    { from: 'obsidianSee', to: 'duskTide', label: '争夺航路' },
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
];
