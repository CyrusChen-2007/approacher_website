
import { Club, Resident, Language } from './types';
import React from 'react';
import { Printer, Plane, Car, Terminal, Sigma, Leaf, MessageCircle, Briefcase, Box } from 'lucide-react';

export const COLORS = {
  black: '#000000',
  white: '#ffffff',
  orange: '#FF3B30', // International Orange
  blue: '#0047BB',   // Cobalt Blue
  gray: '#F0F0F0',
};

export const ICONS: Record<string, React.FC<any>> = {
  Printer, Plane, Car, Terminal, Sigma, Leaf, MessageCircle, Briefcase, Box
};

const CLUBS_DATA_BASE = [
  { id: '3d-print', icon: 'Printer', color: 'bg-orange-500', leaderImage: "images/Machine on Table.jpg" },
  { id: 'flight-sim', icon: 'Plane', color: 'bg-blue-500', leaderImage: "images/Black Gray Robot Toy.jpg" },
  { id: 'racing-sim', icon: 'Car', color: 'bg-red-600', leaderImage: "images/Race Car Driving Photo.jpg" },
  { id: 'cs-club', icon: 'Terminal', color: 'bg-green-600', leaderImage: "images/Computer Screen Code Photo.jpg" },
  { id: 'math-garden', icon: 'Sigma', color: 'bg-purple-600', leaderImage: "images/Close Up Paper Numbers.jpg" },
  { id: 'ecoharbor', icon: 'Leaf', color: 'bg-emerald-500', leaderImage: "images/Green Plants on Soil.jpg" },
  { id: 'societal-hotspot', icon: 'MessageCircle', color: 'bg-pink-500', leaderImage: "images/Green Ceramic Statue Photo.jpg" },
  { id: 'entrepreneur', icon: 'Briefcase', color: 'bg-yellow-500', leaderImage: "images/Person near Stairs Unsplash.jpg" },
  { id: 'mc-econ', icon: 'Box', color: 'bg-cyan-600', leaderImage: "images/Free Money Image.jpg" },
];

const RESIDENTS_DATA_BASE = [
  { id: '1', name: 'Cyrus C.', clubId: 'math-garden', garmentImage: "images/Cyrus.jpg" }, 
  { id: '2', name: 'Sam D.', clubId: 'flight-sim', garmentImage: "images/Sam.jpg" }, 
  { id: '3', name: 'James Z.', clubId: 'flight-sim', garmentImage: "images/James.jpg" },
  { id: '4', name: 'Simon H.', clubId: 'mc-econ', garmentImage: "images/Simon.jpg" },
  { id: '5', name: 'Apple Z.', clubId: 'racing-sim', garmentImage: "images/Apple.jpg" }, 
  { id: '6', name: 'Michael W.', clubId: '3d-print', garmentImage: "images/Michael.jpg" },
  { id: '7', name: 'Watson W.', clubId: 'racing-sim', garmentImage: "images/Watson.jpg" }, 
  { id: '8', name: 'Edgar Z.', clubId: 'racing-sim', garmentImage: "images/Edgar.jpg" }, 
  { id: '9', name: 'Andy W.', clubId: 'racing-sim', garmentImage: "images/Andy.jpg" }, 
  { id: '10', name: 'Javier S.', clubId: 'ecoharbor', garmentImage: "images/Javier.jpg" }, 
  { id: '11', name: 'Rey Q.', clubId: 'societal-hotspot', garmentImage: "images/Rey.jpg" }, 
  { id: '12', name: 'Albert G.', clubId: 'societal-hotspot', garmentImage: "images/Albert.jpg" }, 
  { id: '13', name: 'Steve H.', clubId: 'math-garden', garmentImage: "images/Steve.jpg" }, 
  { id: '14', name: 'Ethan W.', clubId: 'entrepreneur', garmentImage: "images/Ethan.jpg" }, 
  { id: '15', name: 'Luke L.', clubId: 'flight-sim', garmentImage: "images/Undefined.jpg" }, 
  { id: '16', name: 'Will Z.', clubId: 'flight-sim', garmentImage: "images/Undefined.jpg" },
  { id: '17', name: 'Charlie F.', clubId: 'societal-hotspot', garmentImage: "images/Charlie.jpg" },
  { id: '18', name: 'Stone W.', clubId: 'ecoharbor', garmentImage: "images/Stone.jpg" },
  { id: '19', name: 'Ruian W.', clubId: 'societal-hotspot', garmentImage: "images/Undefined.jpg" },
  { id: '20', name: 'Justin H.', clubId: 'cs-club', garmentImage: "images/Undefined.jpg" },
  { id: '21', name: 'Zee L.', clubId: '3d-print', garmentImage: "images/Undefined.jpg" },
  { id: '22', name: 'Anonymous', clubId: 'entrepreneur', garmentImage: "images/Undefined.jpg" },
  { id: '23', name: 'Anonymous', clubId: 'entrepreneur', garmentImage: "images/Undefined.jpg" },
  { id: '24', name: 'Anonymous', clubId: 'entrepreneur', garmentImage: "images/Undefined.jpg" },
  { id: '25', name: 'Anonymous', clubId: 'entrepreneur', garmentImage: "images/Undefined.jpg" },


] as const;

export const CONTENT = {
  en: {
    nav: {
      hub: 'Hub',
      manifesto: 'Manifesto',
      artifacts: 'Artifacts',
      wardrobe: 'Wardrobe',
      ops: 'Ops',
      sys: 'SYS: ONLINE',
    },
    hero: {
      welcome: 'Welcome to Approacher Studio',
      headline: {
        where: 'Where',
        ideas: 'Ideas',
        collide: 'Collide'
      },
      subHeadline: "The campus HQ for creators and leaders that fosters 'productive collision'.",
      cta: "Join the Creative Hub.",
      buttonEnter: "Enter The Collision",
      buttonArtifacts: "Explore Artifacts",
      marquee: "+++ WELCOME TO THE PRODUCTIVE COLLISION +++ IDEAS COLLIDE HERE +++ DO NOT EAT THE 3D PRINTER FILAMENT +++"
    },
    poll: {
      tag: "LIVE POLL",
      title: "Controversial Whiteboard",
      question: "Is a hotdog a sandwich?",
      optionA: "YES (CHAOS)",
      voteA: "Vote Yes",
      optionB: "NO (ORDER)",
      voteB: "Vote No",
      thanks: "THANKS FOR PARTICIPATING. \n RESULT WILL BE ARCHIVED."
    },
    manifesto: {
      title: "The Manifesto",
      subtitle: "Core Philosophy",
      philosophies: [
        { title: "Productive collision", desc: "We are a group of collision. We believe that the best ideas happen when a roboticist spills coffee on a philosopher's notebook." },
        { title: "A New Identity", desc0: "At here, members are called 'residents'. Each of us are deeply connected with this guild and the precious space we own. Regardless of vast difference in background, we are bond as 'Approachers'.", desc: "Original", label1: "Your Background", sub1: "Your program, concentrations, year cohort...", desc2: "New", label2: "Approacher", sub2: "Hub Resident" },
      ],
      howTo: {
        title: "How to Participate",
        steps: [
          "Wear your favorite outfit. It's your territorial marker.",
          "Respect the Vibe. Don't be a jerk.",
          "Say hi to someone you do not know."
        ]
      }
    },
    artifacts: {
      title: "Artifact Wall",
      subtitle: "Projects & Clubs",
      inspect: "Click to Inspect",
      status: "// STATUS: RECRUITING",
      buttonJoin: "Join Channel",
      buttonClose: "Close",
      leaderTitle: "Club Symbol",
      leaderSub: "Selected by Consensus",
      archive: "Archive: Skill Swap Tapes",
      files: "34 Files Available"
    },
    wardrobe: {
      title: "The Wardrobe",
      subtitle: "Resident Profiles",
      desc: "Residents don't have headshots. They have outfits. Hover to identify them.",
      card: {
        affiliation: "Affiliation"
      }
    },
    ops: {
      title: "Room Ops",
      subitle: "Administration",
      team: "Admin",
      teamSub: "(Have any questions? Find them here.)",
      rules: [
        { id: "01", title: "Student Governance", desc: "Registered Members gets the right to vote in Member Assembly for decision-making." },
        { id: "02", title: "The Open Chair", desc: "Don't bag seats. If you leave for more than 15 minutes, your seat is forfeit to the hive." },
        { id: "03", title: "The Snack Fund", desc: "Endowment of foods grants you the most comfy chair." }
      ]
    },
    footer: {
      location: "Location",
      locationDesc: "Building 1, Rm. 1507, \nBeijing Royal School Campus",
      status: "System Status",
      statusDesc: "☕ Brewing Coffee",
      lastUpdate: "Last update: 4 mins ago",
      connect: "Connect",
      links: ["Instagram", "Discord Server", "Guild Handbook.pdf"],
      copyright: "APPROACHER STUDIO. DESIGNED FOR COLLISION."
    },
    clubs: CLUBS_DATA_BASE.map(c => ({
      ...c,
      name: {
        '3d-print': '3D Printing Club',
        'flight-sim': 'Flight Sim Club',
        'racing-sim': 'Racing Sim Club',
        'cs-club': 'CS Club',
        'math-garden': 'Math Garden',
        'ecoharbor': 'EcoHarbor',
        'societal-hotspot': 'Societal Hotspot Decoding Seminar',
        'entrepreneur': 'Entrepreneurial Workshop',
        'mc-econ': 'Economics Via Minecraft'
      }[c.id] || c.id, 
      shortDesc: {
        '3d-print': 'Layer by layer.',
        'flight-sim': 'Virtual altitude.',
        'racing-sim': 'Apex hunters.',
        'cs-club': 'Runtime errors welcome.',
        'math-garden': 'Cultivating logic.',
        'ecoharbor': 'Campus agriculture.',
        'societal-hotspot': 'Deep into human society',
        'entrepreneur': 'Zero to one.',
        'mc-econ': 'Supply, demand, blocks.'
      }[c.id] || '',
      fullDesc: {
        '3d-print': "We turn plastic spaghetti into functional art. If you can CAD it, we can fail to print it three times before succeeding. Our sanctuary smells of melted PLA and victory.",
        'flight-sim': "Flying without leaving the ground. We simulate 747 landings in typhoons while eating cup noodles. Serious about checklists, casual about gravity.",
        'racing-sim': "Chasing tenths of a second. Our rigs cost more than our actual cars. We believe in trail braking and optimal racing lines above all else.",
        'cs-club': "We decode the matrix. Mostly debugging infinite loops and arguing about Vim vs Emacs. Caffeine is our primary fuel source.",
        'math-garden': "Where abstract algebra meets actual dirt. We model growth patterns and optimize sunlight algorithms using fractals and fertilizer.",
        'ecoharbor': "Sustainable living on a student budget. Hydroponics, aquaponics, and saving the planet one lettuce leaf at a time. Green thumbs required.",
        'societal-hotspot': "Deconstructing Society's hotspot, get insight into social dynamics and human behavior.",
        'entrepreneur': "Building the next unicorn or at least a profitable lemonade stand. We speak in pitch decks, KPIs, and pizza consumption rates.",
        'mc-econ': "Simulating market crashes in a block-based economy. Inflation is real, diamonds are scarce, and the villagers are unionizing."
      }[c.id] || ''
    })) as Club[],
    residents: RESIDENTS_DATA_BASE.map(r => ({
      ...r,
      major: {
        '1': 'Math/Psych',
        '2': 'Econometrics',
        '3': 'EE & CE',
        '4': 'Economics',
        '5': 'Computer Science',
        '6': 'Chemistry',
        '7': 'Aerospace Engineering',
        '8': 'Material Science & Chemistry',
        '9': 'Applied Math',
        '10': 'Environmental Science',
        '11': 'Psychology',
        '12': 'Public Policy',
        '13': 'EE & CE',
        '17': 'Psychology',
        '18': 'Physics & CS',

      }[r.id] || 'Student',
      motto: {
        '1': "Fortuna Favet Fortibus.",
        '2': "Too young too simple, sometimes naive",
        '3': "It works on my machine.",
        '4': "Don't thank me, thank ____",
        '5': "I AM SEAL!",
        '6': "Vision always with Action",
        '7': "Ja sam ptica nebeska.",
        '8': "Savor every moment.",
        '9': "吾日三省吾身，能否不做，能否明天做，能否别人做。",
        '10': "The hundred and first blow.",
        '11': "‘The world is a fine place,and worth fighting for.’ I agree with the second part",
        '12': "兼容并蓄，实事求是。",
        '13': "画个原理图看看？",
        '17': 'Anything you can acquire is only another thing you\'ll lose.',
        '18': "清清爽爽，义无反顾。",
      }[r.id] || ''
    })) as Resident[]
  },
  zh: {
    nav: {
      hub: '枢纽',
      manifesto: '宣言',
      artifacts: '造物',
      wardrobe: '衣橱',
      ops: '运营',
      sys: '系统：在线',
    },
    hero: {
      welcome: '欢迎来到 Approacher Studio',
      headline: {
        where: '灵感',
        ideas: '在此',
        collide: '碰撞'
      },
      subHeadline: "创作者、领袖们参与“生产力碰撞”的的校园大本营。",
      cta: "即刻加入本公会。",
      buttonEnter: "进入模糊地带",
      buttonArtifacts: "探索造物",
      marquee: "+++ 欢迎来到生产力碰撞地带 +++ 灵感在此碰撞 +++ 请勿食用3D打印耗材 +++"
    },
    poll: {
      tag: "实时投票",
      title: "争议白板",
      question: "热狗是三明治吗？",
      optionA: "是 (混乱阵营)",
      voteA: "投赞成",
      optionB: "不是 (秩序阵营)",
      voteB: "投反对",
      thanks: "感谢参与。\n 结果将被存档。"
    },
    manifesto: {
      title: "宣言",
      subtitle: "核心哲学",
      philosophies: [
        { title: "高效碰撞", desc: "我们是一个碰撞空间。我们相信，当机器人专家把咖啡洒在哲学家的笔记本上时，最棒的创意就诞生了。" },
        { title: "全新身份", desc0: "在这里，成员被称为“居民”。我们每个人都与这个群体和我们拥有的宝贵空间有着深厚的联系。无论背景差异多大，我们都以“Approacher”的身份紧密相连。", desc: "原有身份", label1: "你的背景", sub1: "你的专业、年级、社团...", desc2: "新身份", label2: "Approacher", sub2: "公会居民" },
      ],
      howTo: {
        title: "参与指南",
        steps: [
          "穿上你最喜欢的衣服，这是你的领地标记。",
          "尊重氛围。别做个讨厌鬼。",
          "和你不认识的同学打个招呼。"
        ]
      }
    },
    artifacts: {
      title: "造物墙",
      subtitle: "项目与社团",
      inspect: "点击查看",
      status: "// 状态：招募中",
      buttonJoin: "加入频道",
      buttonClose: "关闭",
      leaderTitle: "社团形象标志",
      leaderSub: "共识推选",
      archive: "归档：技能交换录像",
      files: "34 个文件可用"
    },
    wardrobe: {
      title: "衣橱",
      subtitle: "居民档案",
      desc: "居民们没有头像，只有穿搭。悬停以识别他们的身份。",
      card: {
        affiliation: "所属"
      }
    },
    ops: {
      title: "空间运营",
      subitle: "行政管理",
      team: "核心团队",
      teamSub: "（有任何问题？找他们就对了。）",
      rules: [
        { id: "01", title: "优先座位", desc: "我们欢迎所有人来做客，不过注册公会成员优先使用舒适座位。" },
        { id: "02", title: "空椅原则", desc: "不要占座。如果你离开超过15分钟，你的座位将充公给集体。" },
        { id: "03", title: "零食税", desc: "投喂集体。带零食来可以让你暂时豁免第二条规则。" }
      ]
    },
    footer: {
      location: "位置",
      locationDesc: "一号楼 1507，\n 北京王府学校校园",
      status: "系统状态",
      statusDesc: "☕ 正在煮咖啡",
      lastUpdate: "最后更新：4分钟前",
      connect: "连接",
      links: ["Instagram", "Discord 服务器", "公会手册.pdf"],
      copyright: "APPROACHER STUDIO. 为碰撞而设计。"
    },
    clubs: CLUBS_DATA_BASE.map(c => ({
      ...c,
      name: {
        '3d-print': '3D打印社',
        'flight-sim': '飞行模拟社',
        'racing-sim': '赛车模拟社',
        'cs-club': '计算机社',
        'math-garden': '数学花园',
        'ecoharbor': '生态港',
        'societal-hotspot': '社会事件解码社',
        'entrepreneur': '创业工坊',
        'mc-econ': 'Minecraft经济学'
      }[c.id] || c.id,
      shortDesc: {
        '3d-print': '层层堆叠。',
        'flight-sim': '虚拟高度。',
        'racing-sim': '弯心猎手。',
        'cs-club': '欢迎运行时错误。',
        'math-garden': '培育逻辑。',
        'ecoharbor': '校园农业。',
        'societal-hotspot': '深入社会',
        'entrepreneur': '从0到1。',
        'mc-econ': '供给，需求，方块。'
      }[c.id] || '',
      fullDesc: {
        '3d-print': "我们将塑料细丝变成功能性艺术。如果你能画出CAD图，我们就能在失败三次后把它打印出来。我们的圣地弥漫着熔化的PLA味道和胜利的气息。",
        'flight-sim': "足不出户地飞行。我们一边吃泡面一边模拟台风中降落波音747。对检查单极其严肃，对地心引力极其随意。",
        'racing-sim': "追逐十分之一秒的差距。我们的设备比我们的真车还贵。我们信仰循迹刹车和最佳赛车线。",
        'cs-club': "我们解码矩阵。大部分时间在调试无限循环和争论Vim与Emacs的优劣。咖啡因是我们的主要燃料。",
        'math-garden': "抽象代数遇见真实泥土的地方。我们利用分形和肥料模拟生长模式并优化日照算法。",
        'ecoharbor': "学生预算下的可持续生活。水培、鱼菜共生，一次一片生菜叶地拯救地球。需要园艺天赋。",
        'societal-hotspot': "解构社会热点，深入了解社会动态和人类行为。",
        'entrepreneur': "建立下一个独角兽，或者至少是一个盈利的柠檬水摊。我们用商业计划书、关键绩效指标和披萨消耗率交流。",
        'mc-econ': "在方块经济中模拟市场崩盘。通货膨胀是真实的，钻石是稀缺的，村民们正在组建工会。"
      }[c.id] || ''
    })) as Club[],
    residents: RESIDENTS_DATA_BASE.map(r => ({
      ...r,
      major: {
        '1': '数学&心理学',
        '2': '计量经济学',
        '3': '物理学',
        '4': '经济学',
        '5': '计算机科学',
        '6': '化学',
        '7': '航空航天',
        '8': '材料科学与化学',
        '9': '物理学',
        '10': '环境科学',
        '11': '心理学',
        '12': '公共政策',
        '13': '电子与计算机工程',
        '17': '心理学',
        '18': '物理学与计算机科学',

      }[r.id] || '学生',
      motto: {
        '1': "运气眷顾勇者",
        '2': "年少轻狂，偶尔天真",
        '3': "It works on my machine.",
        '4': "别谢我，谢____",
        '5': "我是海豹！",
        '6': "V1, Rotate.",
        '7': "Ja sam ptica nebeska.",
        '8': "珍惜每一刻。",
        '9': "吾日三省吾身，能否不做，能否明天做，能否别人做。",
        '10': "百发百中。",
        '11': "‘这世界是个好地方，值得生活’ 我同意后半句",
        '12': "兼容并蓄，实事求是。",
        '13': "画个原理图看看？",
        '17': 'Anything you can acquire is only another thing you\'ll lose.',
        '18': "清清爽爽，义无反顾。",
      }[r.id] || ''
    })) as Resident[]
  }
};
