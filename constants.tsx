
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
  { id: '3d-print', icon: 'Printer', color: 'bg-orange-500', leaderImage: "https://images.unsplash.com/photo-1581092921461-eab6245b0262?auto=format&fit=crop&q=80&w=800" },
  { id: 'flight-sim', icon: 'Plane', color: 'bg-blue-500', leaderImage: "https://images.unsplash.com/photo-1544654573-039c0953c8dc?auto=format&fit=crop&q=80&w=800" },
  { id: 'racing-sim', icon: 'Car', color: 'bg-red-600', leaderImage: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&q=80&w=800" },
  { id: 'cs-club', icon: 'Terminal', color: 'bg-green-600', leaderImage: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?auto=format&fit=crop&q=80&w=800" },
  { id: 'math-garden', icon: 'Sigma', color: 'bg-purple-600', leaderImage: "https://images.unsplash.com/photo-1530910401309-786d8b672727?auto=format&fit=crop&q=80&w=800" },
  { id: 'ecobay', icon: 'Leaf', color: 'bg-emerald-500', leaderImage: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&q=80&w=800" },
  { id: 'social-affair', icon: 'MessageCircle', color: 'bg-pink-500', leaderImage: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800" },
  { id: 'entrepreneur', icon: 'Briefcase', color: 'bg-yellow-500', leaderImage: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=800" },
  { id: 'mc-econ', icon: 'Box', color: 'bg-cyan-600', leaderImage: "https://images.unsplash.com/photo-1595795454984-b1b742cb6ae9?auto=format&fit=crop&q=80&w=800" },
];

const RESIDENTS_DATA_BASE = [
  { id: '1', name: 'Cyrus C.', clubId: '3d-print', garmentImage: "https://images.unsplash.com/photo-1556906781-9a412961d289?auto=format&fit=crop&q=80&w=800" }, // Hoodie
  { id: '2', name: 'Sam D.', clubId: 'mc-econ', garmentImage: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&q=80&w=800" }, // Shirt
  { id: '3', name: 'James Z.', clubId: 'cs-club', garmentImage: "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?auto=format&fit=crop&q=80&w=800" }, // Hat
  { id: '4', name: 'Simon H.', clubId: 'social-affair', garmentImage: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&q=80&w=800" }, // Jacket
  { id: '5', name: 'Apple Z.', clubId: 'ecobay', garmentImage: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&q=80&w=800" }, // T-shirt
  { id: '6', name: 'Michael W.', clubId: 'flight-sim', garmentImage: "https://images.unsplash.com/photo-1620799140408-ed5341cd2431?auto=format&fit=crop&q=80&w=800" }, // Sweater
  { id: '7', name: 'Watson W.', clubId: 'ecobay', garmentImage: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&q=80&w=800" }, // T-shirt
  { id: '8', name: 'Edgar Z.', clubId: 'flight-sim', garmentImage: "https://images.unsplash.com/photo-1620799140408-ed5341cd2431?auto=format&fit=crop&q=80&w=800" }, // Sweater
  { id: '9', name: 'Xiaoleng W.', clubId: 'ecobay', garmentImage: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&q=80&w=800" }, // T-shirt
  { id: '10', name: 'Javier S.', clubId: 'flight-sim', garmentImage: "https://images.unsplash.com/photo-1620799140408-ed5341cd2431?auto=format&fit=crop&q=80&w=800" }, // Sweater
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
      subHeadline: "The campus HQ for creators, leaders, and the 'productively blurry'.",
      cta: "Don't just join a club—join the Guild.",
      buttonEnter: "Enter The Blur",
      buttonArtifacts: "Explore Artifacts",
      marquee: "+++ WELCOME TO THE PRODUCTIVE BLUR +++ IDEAS COLLIDE HERE +++ DO NOT EAT THE 3D PRINTER FILAMENT +++"
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
      philosophies: [
        { title: "Productive Blur", desc: "We are not just a room. We are a collision space. We believe that the best ideas happen when a roboticist spills coffee on a philosopher's notebook." },
        { title: "Dual Citizenship", desc: "Identity 1", label1: "Your Major / Club", sub1: "Robotics, Drama, CS...", desc2: "Identity 2", label2: "Approacher", sub2: "Guild Member" }
      ],
      howTo: {
        title: "How to Participate",
        steps: [
          "Bring a Mug. It marks your territory.",
          "Respect the Vibe. Don't be a jerk.",
          "Say hi to someone not in your major."
        ]
      }
    },
    artifacts: {
      title: "Artifact Wall",
      inspect: "Click to Inspect",
      status: "// STATUS: RECRUITING",
      buttonJoin: "Join Channel",
      buttonClose: "Close",
      leaderTitle: "Club Lead",
      leaderSub: "Selected by Consensus",
      archive: "Archive: Skill Swap Tapes",
      files: "34 Files Available"
    },
    wardrobe: {
      title: "The Wardrobe",
      desc: "Members don't have headshots. They have outfits. Hover to identify the resident.",
      card: {
        affiliation: "Affiliation"
      }
    },
    ops: {
      title: "Room Ops",
      team: "Core Team",
      teamSub: "(Here to help, not to boss)",
      rules: [
        { id: "01", title: "Priority Seating", desc: "If the light is yellow, registered Guild Members get the comfy chairs. Guests take the stools." },
        { id: "02", title: "The Open Chair", desc: "Don't bag seats. If you leave for more than 15 minutes, your seat is forfeit to the hive." },
        { id: "03", title: "The Snack Tax", desc: "Feed the hive. Bringing snacks grants you temporary immunity from Rule 02." }
      ]
    },
    footer: {
      location: "Location",
      locationDesc: "Engineering Block B\nRoom 404 (Not Found)\nCampus North",
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
        'ecobay': 'Ecobay',
        'social-affair': 'Social Affair Decoding',
        'entrepreneur': 'Entrepreneurial Workshop',
        'mc-econ': 'Economics Via Minecraft'
      }[c.id] || c.id,
      shortDesc: {
        '3d-print': 'Layer by layer.',
        'flight-sim': 'Virtual altitude.',
        'racing-sim': 'Apex hunters.',
        'cs-club': 'Runtime errors welcome.',
        'math-garden': 'Cultivating logic.',
        'ecobay': 'Campus agriculture.',
        'social-affair': 'Human protocols.',
        'entrepreneur': 'Zero to one.',
        'mc-econ': 'Supply, demand, blocks.'
      }[c.id] || '',
      fullDesc: {
        '3d-print': "We turn plastic spaghetti into functional art. If you can CAD it, we can fail to print it three times before succeeding. Our sanctuary smells of melted PLA and victory.",
        'flight-sim': "Flying without leaving the ground. We simulate 747 landings in typhoons while eating cup noodles. Serious about checklists, casual about gravity.",
        'racing-sim': "Chasing tenths of a second. Our rigs cost more than our actual cars. We believe in trail braking and optimal racing lines above all else.",
        'cs-club': "We decode the matrix. Mostly debugging infinite loops and arguing about Vim vs Emacs. Caffeine is our primary fuel source.",
        'math-garden': "Where abstract algebra meets actual dirt. We model growth patterns and optimize sunlight algorithms using fractals and fertilizer.",
        'ecobay': "Sustainable living on a student budget. Hydroponics, aquaponics, and saving the planet one lettuce leaf at a time. Green thumbs required.",
        'social-affair': "Deconstructing human interaction protocols. We analyze why you felt awkward at that party and map social dynamics like network topologies.",
        'entrepreneur': "Building the next unicorn or at least a profitable lemonade stand. We speak in pitch decks, KPIs, and pizza consumption rates.",
        'mc-econ': "Simulating market crashes in a block-based economy. Inflation is real, diamonds are scarce, and the villagers are unionizing."
      }[c.id] || ''
    })) as Club[],
    residents: RESIDENTS_DATA_BASE.map(r => ({
      ...r,
      major: {
        '1': 'Mechanical Eng.',
        '2': 'Economics',
        '3': 'Computer Sci',
        '4': 'Philosophy',
        '5': 'Biology',
        '6': 'Aerospace'
      }[r.id] || 'Student',
      motto: {
        '1': "If it breaks, print it again.",
        '2': "Emeralds are money.",
        '3': "It works on my machine.",
        '4': "Why are we here?",
        '5': "Photosynthesis is cool.",
        '6': "V1, Rotate."
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
      subHeadline: "创作者、领袖和“跨界者”的校园大本营。",
      cta: "别只加入社团——加入公会。",
      buttonEnter: "进入模糊地带",
      buttonArtifacts: "探索造物",
      marquee: "+++ 欢迎来到高效模糊地带 +++ 灵感在此碰撞 +++ 请勿食用3D打印耗材 +++"
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
      philosophies: [
        { title: "跨界共生", desc: "我们不只是一个房间，而是一个碰撞空间。我们相信，当机器人专家把咖啡洒在哲学家的笔记本上时，最棒的创意就诞生了。" },
        { title: "双重身份", desc: "身份 1", label1: "你的专业 / 社团", sub1: "机器人, 戏剧, 计算机...", desc2: "身份 2", label2: "Approacher", sub2: "公会成员" }
      ],
      howTo: {
        title: "参与指南",
        steps: [
          "带个马克杯。这是你的领地标记。",
          "尊重氛围。别做个讨厌鬼。",
          "和非你专业的同学打个招呼。"
        ]
      }
    },
    artifacts: {
      title: "造物墙",
      inspect: "点击查看",
      status: "// 状态：招募中",
      buttonJoin: "加入频道",
      buttonClose: "关闭",
      leaderTitle: "社团负责人",
      leaderSub: "共识推选",
      archive: "归档：技能交换录像",
      files: "34 个文件可用"
    },
    wardrobe: {
      title: "成员衣橱",
      desc: "成员们没有头像，只有穿搭。悬停以识别成员身份。",
      card: {
        affiliation: "所属"
      }
    },
    ops: {
      title: "空间运营",
      team: "核心团队",
      teamSub: "（提供帮助，而非发号施令）",
      rules: [
        { id: "01", title: "优先座位", desc: "如果是黄灯亮起，注册公会成员优先使用舒适座位。访客请坐圆凳。" },
        { id: "02", title: "空椅原则", desc: "不要占座。如果你离开超过15分钟，你的座位将充公给集体。" },
        { id: "03", title: "零食税", desc: "投喂集体。带零食来可以让你暂时豁免第二条规则。" }
      ]
    },
    footer: {
      location: "位置",
      locationDesc: "工程楼 B座\n404室 (Not Found)\n北校区",
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
        'ecobay': '生态湾',
        'social-affair': '社交解码研讨会',
        'entrepreneur': '创业工坊',
        'mc-econ': 'Minecraft经济学'
      }[c.id] || c.id,
      shortDesc: {
        '3d-print': '层层堆叠。',
        'flight-sim': '虚拟高度。',
        'racing-sim': '弯心猎手。',
        'cs-club': '欢迎运行时错误。',
        'math-garden': '培育逻辑。',
        'ecobay': '校园农业。',
        'social-affair': '人类协议。',
        'entrepreneur': '从0到1。',
        'mc-econ': '供给，需求，方块。'
      }[c.id] || '',
      fullDesc: {
        '3d-print': "我们将塑料细丝变成功能性艺术。如果你能画出CAD图，我们就能在失败三次后把它打印出来。我们的圣地弥漫着熔化的PLA味道和胜利的气息。",
        'flight-sim': "足不出户地飞行。我们一边吃泡面一边模拟台风中降落波音747。对检查单极其严肃，对地心引力极其随意。",
        'racing-sim': "追逐十分之一秒的差距。我们的设备比我们的真车还贵。我们信仰循迹刹车和最佳赛车线。",
        'cs-club': "我们解码矩阵。大部分时间在调试无限循环和争论Vim与Emacs的优劣。咖啡因是我们的主要燃料。",
        'math-garden': "抽象代数遇见真实泥土的地方。我们利用分形和肥料模拟生长模式并优化日照算法。",
        'ecobay': "学生预算下的可持续生活。水培、鱼菜共生，一次一片生菜叶地拯救地球。需要园艺天赋。",
        'social-affair': "解构人类互动协议。我们分析你为什么在那个派对上感到尴尬，并将社交动态映射为网络拓扑。",
        'entrepreneur': "建立下一个独角兽，或者至少是一个盈利的柠檬水摊。我们用商业计划书、关键绩效指标和披萨消耗率交流。",
        'mc-econ': "在方块经济中模拟市场崩盘。通货膨胀是真实的，钻石是稀缺的，村民们正在组建工会。"
      }[c.id] || ''
    })) as Club[],
    residents: RESIDENTS_DATA_BASE.map(r => ({
      ...r,
      major: {
        '1': '机械工程',
        '2': '经济学',
        '3': '计算机科学',
        '4': '哲学',
        '5': '生物学',
        '6': '航空航天'
      }[r.id] || 'Student',
      motto: {
        '1': "如果坏了，就再打一个。",
        '2': "绿宝石就是金钱。",
        '3': "在我的机器上能跑。",
        '4': "我们为什么在这里？",
        '5': "光合作用很酷。",
        '6': "V1, 抬轮。"
      }[r.id] || ''
    })) as Resident[]
  }
};
