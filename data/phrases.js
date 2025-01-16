// 所有中式英语词条数据
const allPhrases = [
    {
        chinglish: "You are my vegetable",
        english: "You are my type",
        pinyin: "Nǐ shì wǒ de cài",
        chinese: "你是我的菜",
        examples: [
            {
                chinglish: "Hey, you are my vegetable!",
                chinese: "嘿，你是我的菜！",
                meaning: "Hey, you're just my type!"
            },
            {
                chinglish: "This new colleague is totally my vegetable.",
                chinese: "这个新同事太我的菜了。",
                meaning: "This new colleague is exactly my type."
            }
        ]
    },
    {
        chinglish: "Involution",
        english: "Excessive competition with diminishing returns",
        pinyin: "Nèi juǎn",
        chinese: "内卷",
        examples: [
            {
                chinglish: "The tech industry is full of involution.",
                chinese: "科技行业都在内卷。",
                meaning: "The tech industry is experiencing excessive competition."
            }
        ]
    },
    {
        chinglish: "Lie flat",
        english: "Opting out of societal pressure",
        pinyin: "Tǎng píng",
        chinese: "躺平",
        examples: [
            {
                chinglish: "I decided to lie flat and quit the rat race.",
                chinese: "我决定躺平，不再参与竞争。",
                meaning: "I decided to opt out of the competitive lifestyle."
            }
        ]
    },
    {
        chinglish: "Long time no see",
        english: "It's been a while",
        pinyin: "Hǎo jiǔ bú jiàn",
        chinese: "好久不见",
        examples: [
            {
                chinglish: "Long time no see, old friend!",
                chinese: "好久不见，老朋友！",
                meaning: "It's been a while, old friend!"
            }
        ]
    },
    {
        chinglish: "Give you color see see",
        english: "Teach you a lesson",
        pinyin: "Gěi nǐ diǎn yán sè kàn kàn",
        chinese: "给你点颜色看看",
        examples: [
            {
                chinglish: "If you keep misbehaving, I'll give you color see see!",
                chinese: "你要是再这样，我就给你点颜色看看！",
                meaning: "If you keep misbehaving, I'll teach you a lesson!"
            }
        ]
    },
    {
        chinglish: "People mountain people sea",
        english: "Crowded with people",
        pinyin: "Rén shān rén hǎi",
        chinese: "人山人海"
    },
    {
        chinglish: "No horse no tiger",
        english: "So-so / Not too bad",
        pinyin: "Mǎ mǎ hǔ hǔ",
        chinese: "马马虎虎"
    },
    {
        chinglish: "Add oil",
        english: "Keep it up / Go for it",
        pinyin: "Jiā yóu",
        chinese: "加油"
    },
    {
        chinglish: "Eat vinegar",
        english: "Be jealous",
        pinyin: "Chī cù",
        chinese: "吃醋"
    },
    {
        chinglish: "Open heart flower",
        english: "Be happy / Feel delighted",
        pinyin: "Kāi xīn huā",
        chinese: "开心花"
    },
    {
        chinglish: "Paper tiger",
        english: "All talk and no action",
        pinyin: "Zhǐ lǎo hǔ",
        chinese: "纸老虎"
    },
    {
        chinglish: "Lose face",
        english: "Be embarrassed",
        pinyin: "Diū liǎn",
        chinese: "丢脸"
    },
    {
        chinglish: "Back door",
        english: "Use connections/Pull strings",
        pinyin: "Zǒu hòu mén",
        chinese: "走后门"
    },
    {
        chinglish: "Give you face",
        english: "Show respect to you",
        pinyin: "Gěi nǐ miàn zi",
        chinese: "给你面子"
    },
    {
        chinglish: "Buddha-like",
        english: "Easy-going / Care-free",
        pinyin: "Fó xì",
        chinese: "佛系"
    },
    {
        chinglish: "Lie flat",
        english: "Opt out of the rat race",
        pinyin: "Tǎng píng",
        chinese: "躺平"
    },
    {
        chinglish: "Drawing a big pancake",
        english: "Making empty promises or setting unrealistic goals",
        pinyin: "Huà dà bǐng",
        chinese: "画大饼"
    },
    {
        chinglish: "Pit daddy",
        english: "Something extremely bad",
        pinyin: "Kēng diē",
        chinese: "坑爹"
    },
    {
        chinglish: "Awake on earth",
        english: "Clear-headed, grounded",
        pinyin: "Rén jiān qīng xǐng",
        chinese: "人间清醒"
    },
    {
        chinglish: "Amazing, my bro!",
        english: "Impressed by someone",
        pinyin: "Lì hài le, wǒ de gē",
        chinese: "厉害了，我的哥"
    },
    {
        chinglish: "Has some stuff",
        english: "There's something special about it",
        pinyin: "Yǒu diǎn dōng xi",
        chinese: "有点东西"
    },
    {
        chinglish: "Spicy eyes",
        english: "Something painful to watch",
        pinyin: "Là yǎn jīng",
        chinese: "辣眼睛"
    },
    {
        chinglish: "Scared me a jump",
        english: "You gave me a fright",
        pinyin: "Xià wǒ yī tiào",
        chinese: "吓我一跳"
    },
    {
        chinglish: "I kind of want to laugh",
        english: "Indicating absurdity but also amusement",
        pinyin: "Wǒ yǒu diǎn xiǎng xiào",
        chinese: "我有点想笑"
    },
    {
        chinglish: "Scheming b****",
        english: "Manipulative woman",
        pinyin: "Xīn jī biǎo",
        chinese: "心机婊"
    },
    {
        chinglish: "What ghost?",
        english: "What the heck?",
        pinyin: "Shén me guǐ",
        chinese: "什么鬼"
    },
    {
        chinglish: "Mind collapsed",
        english: "Lost composure",
        pinyin: "Xīn tài bēng le",
        chinese: "心态崩了"
    },
    {
        chinglish: "666",
        english: "Awesome",
        pinyin: "Liù liù liù",
        chinese: "666"
    },
    {
        chinglish: "Give a call",
        english: "Support / Cheer for",
        pinyin: "Dǎ call",
        chinese: "打call"
    },
    {
        chinglish: "Eating melon",
        english: "Watching the drama unfold",
        pinyin: "Chī guā",
        chinese: "吃瓜"
    },
    {
        chinglish: "Messing around",
        english: "Just being playful",
        pinyin: "Pí yī xià",
        chinese: "皮一下"
    },
    {
        chinglish: "Bringing goods",
        english: "Product promotion",
        pinyin: "Dài huò",
        chinese: "带货"
    },
    {
        chinglish: "Little happiness",
        english: "Small joy in life",
        pinyin: "Xiǎo què xìng",
        chinese: "小确幸"
    },
    {
        chinglish: "Really fragrant",
        english: "I take it back, I was wrong",
        pinyin: "Zhēn xiāng",
        chinese: "真香"
    },
    {
        chinglish: "Social superiority complex",
        english: "Master of socializing",
        pinyin: "Shè jiāo niú bī zhèng",
        chinese: "社交牛逼症"
    },
    {
        chinglish: "Hard core",
        english: "Intense, strong",
        pinyin: "Yìng hé",
        chinese: "硬核"
    },
    {
        chinglish: "Throw the pot",
        english: "Pass the blame",
        pinyin: "Shuǎi guō",
        chinese: "甩锅"
    },
    {
        chinglish: "On top",
        english: "Getting hyped up",
        pinyin: "Shàng tóu",
        chinese: "上头"
    },
    {
        chinglish: "Cry until faint in the bathroom",
        english: "Crying in despair",
        pinyin: "Kū yūn zài cè suǒ",
        chinese: "哭晕在厕所"
    },
    {
        chinglish: "Cloud petting",
        english: "Virtual pet ownership",
        pinyin: "Yún yǎng māo/gǒu",
        chinese: "云养猫/狗"
    },
    {
        chinglish: "Awkward talk",
        english: "Cringe conversation",
        pinyin: "Gà liáo",
        chinese: "尬聊"
    },
    {
        chinglish: "Self-blackening",
        english: "Self-deprecation",
        pinyin: "Zì hēi",
        chinese: "自黑"
    },
    {
        chinglish: "Inhumane",
        english: "Absolutely brutal",
        pinyin: "Cǎn wú rén dào",
        chinese: "惨无人道"
    },
    {
        chinglish: "Hardcore fan",
        english: "Die-hard fan",
        pinyin: "Yìng hé fěn",
        chinese: "硬核粉"
    },
    {
        chinglish: "King is back",
        english: "The king has returned",
        pinyin: "Wáng zhě guī lái",
        chinese: "王者归来"
    },
    {
        chinglish: "Eat sleep play games",
        english: "Lazy lifestyle",
        pinyin: "Chī fàn shuì jiào dǎ yóu xì",
        chinese: "吃饭睡觉打游戏"
    },
    {
        chinglish: "Powerful",
        english: "Impressive",
        pinyin: "Gěi lì",
        chinese: "给力"
    },
    {
        chinglish: "Please",
        english: "For the love of God",
        pinyin: "Bài tuō le",
        chinese: "拜托了"
    },
    {
        chinglish: "Thank you, I am really impressed",
        english: "Sarcastically thanking someone",
        pinyin: "Xiè xiè nǐ, wǒ zhēn shì fú le",
        chinese: "谢谢你，我真是服了"
    },
    {
        chinglish: "Buy soy sauce",
        english: "Just passing by",
        pinyin: "Dǎ jiàng yóu",
        chinese: "打酱油"
    },
    {
        chinglish: "So handsome",
        english: "Totally awesome",
        pinyin: "Shuài dāi le",
        chinese: "帅呆了"
    },
    {
        chinglish: "Too stunning",
        english: "Amazing",
        pinyin: "Tài jīng yàn le",
        chinese: "太惊艳了"
    },
    {
        chinglish: "Riding heat",
        english: "Piggybacking on the hype",
        pinyin: "Cèng rè dù",
        chinese: "蹭热度"
    },
    {
        chinglish: "Water reverse",
        english: "Mercury retrograde",
        pinyin: "Shuǐ nì",
        chinese: "水逆"
    },
    {
        chinglish: "Quick flash",
        english: "Quick exit",
        pinyin: "Kuài shǎn",
        chinese: "快闪"
    },
    {
        chinglish: "No eyes to watch",
        english: "Too cringe",
        pinyin: "Méi yǎn kàn",
        chinese: "没眼看"
    },
    {
        chinglish: "Embarrassed",
        english: "Cringe",
        pinyin: "Jiǒng",
        chinese: "囧"
    },
    {
        chinglish: "Silent naughty",
        english: "Shy but naughty",
        pinyin: "Mèn sāo",
        chinese: "闷骚"
    },
    {
        chinglish: "Sense of loss",
        english: "Feeling empty",
        pinyin: "Shī luò gǎn",
        chinese: "失落感"
    },
    {
        chinglish: "Expose the stuffing",
        english: "Exposed",
        pinyin: "Lù xiàn le",
        chinese: "露馅了"
    },
    {
        chinglish: "Why don't you go to the sky?",
        english: "Sarcastic ambition",
        pinyin: "Nǐ zǎ bù shàng tiān ne",
        chinese: "你咋不上天呢"
    },
    {
        chinglish: "Has poison",
        english: "Addictive",
        pinyin: "Yǒu dú",
        chinese: "有毒"
    },
    {
        chinglish: "You know it",
        english: "You get it",
        pinyin: "Nǐ dǒng de",
        chinese: "你懂的"
    },
    {
        chinglish: "Fighting spirit",
        english: "Determination",
        pinyin: "Pīn jìn",
        chinese: "拼劲"
    },
    {
        chinglish: "Pick up, put down",
        english: "Take it or leave it",
        pinyin: "Ná de qǐ fàng de xià",
        chinese: "拿得起放得下"
    },
    {
        chinglish: "Open black",
        english: "Play together",
        pinyin: "Kāi hēi",
        chinese: "开黑"
    },
    {
        chinglish: "Carry",
        english: "To carry the team",
        pinyin: "Carry",
        chinese: "Carry"
    },
    {
        chinglish: "Hang up",
        english: "AFK - Away From Keyboard",
        pinyin: "Guà jī",
        chinese: "挂机"
    },
    {
        chinglish: "Give heads",
        english: "Feeding the enemy",
        pinyin: "Sòng rén tóu",
        chinese: "送人头"
    },
    {
        chinglish: "Flip car",
        english: "Fail",
        pinyin: "Fān chē",
        chinese: "翻车"
    },
    {
        chinglish: "Blow up",
        english: "Crush",
        pinyin: "Dǎ bào",
        chinese: "打爆"
    },
    {
        chinglish: "Blow head",
        english: "Headshot",
        pinyin: "Bào tóu",
        chinese: "爆头"
    },
    {
        chinglish: "Kill",
        english: "Take down",
        pinyin: "Jī shā",
        chinese: "击杀"
    },
    {
        chinglish: "Outburst",
        english: "Burst of power",
        pinyin: "Bào fā",
        chinese: "爆发"
    },
    {
        chinglish: "Chain kill",
        english: "Killing spree",
        pinyin: "Lián shā",
        chinese: "连杀"
    },
    {
        chinglish: "Invincible",
        english: "Unstoppable",
        pinyin: "Wú dí",
        chinese: "无敌"
    },
    {
        chinglish: "High-end match",
        english: "Pro-level match",
        pinyin: "Gāo duān jú",
        chinese: "高端局"
    },
    {
        chinglish: "Card pause",
        english: "Lag",
        pinyin: "Kǎ dùn",
        chinese: "卡顿"
    },
    {
        chinglish: "Gank",
        english: "Ambush",
        pinyin: "Gank",
        chinese: "Gank"
    },
    {
        chinglish: "Farm",
        english: "Grinding",
        pinyin: "Farm",
        chinese: "Farm"
    },
    {
        chinglish: "Small monster",
        english: "Minions",
        pinyin: "Xiǎo guài",
        chinese: "小怪"
    },
    {
        chinglish: "Wild area",
        english: "Jungle",
        pinyin: "Yě qū",
        chinese: "野区"
    },
    {
        chinglish: "Open cheat",
        english: "Using hacks",
        pinyin: "Kāi guà",
        chinese: "开挂"
    },
    {
        chinglish: "Tumor player",
        english: "Toxic player",
        pinyin: "Dú liú wán jiā",
        chinese: "毒瘤玩家"
    },
    {
        chinglish: "Lie and win",
        english: "Lazy win",
        pinyin: "Tǎng yíng",
        chinese: "躺赢"
    },
    {
        chinglish: "Involution",
        english: "Excessive competition with diminishing returns",
        pinyin: "Nèi juǎn",
        chinese: "内卷"
    },
    {
        chinglish: "Versailles",
        english: "Subtle boasting",
        pinyin: "Fán ěr sài",
        chinese: "凡尔赛",
        examples: [
            {
                chinglish: "My small 200m² apartment is so cramped.",
                chinese: "我这个小小的200平米公寓好挤啊。",
                meaning: "Humble bragging about having a large apartment."
            }
        ]
    },
    {
        chinglish: "Big pig's hoof",
        english: "Mocking unreliable men",
        pinyin: "Dà zhū tí zi",
        chinese: "大猪蹄子",
        examples: [
            {
                chinglish: "He's such a big pig's hoof, always breaking promises.",
                chinese: "他就是个大猪蹄子，总是放鸽子。",
                meaning: "He's so unreliable, always breaking promises."
            }
        ]
    },
    {
        chinglish: "I'm too hard",
        english: "Life is tough",
        pinyin: "Wǒ tài nán le",
        chinese: "我太难了",
        examples: [
            {
                chinglish: "Working overtime again, I'm too hard!",
                chinese: "又要加班，我太难了！",
                meaning: "Having to work overtime again, life is so tough!"
            }
        ]
    },
    {
        chinglish: "Throwing dog food",
        english: "Showing off couple's affection",
        pinyin: "Sā gǒu liàng",
        chinese: "撒狗粮",
        examples: [
            {
                chinglish: "Stop throwing dog food on social media!",
                chinese: "别在社交媒体上撒狗粮了！",
                meaning: "Stop showing off your relationship on social media!"
            }
        ]
    },
    {
        chinglish: "Messing around is fun",
        english: "Just enjoying a playful moment",
        pinyin: "Pí yī xià hěn kāi xīn",
        chinese: "皮一下很开心"
    },
    {
        chinglish: "Grumpy old bro",
        english: "Angry dude",
        pinyin: "Bào zào lǎo gē",
        chinese: "暴躁老哥"
    },
    {
        chinglish: "Dad, I was wrong",
        english: "A playful apology",
        pinyin: "Bà ba wǒ cuò le",
        chinese: "爸爸我错了"
    }
];
