// Chinglish 词典数据
const dictionary = {
    "xswl": {
        chinese: "笑死我了",
        pinyin: "xiào sǐ wǒ le",
        meaning: "LOL (Laugh Out Loud) / ROFL (Rolling On Floor Laughing)",
        examples: [
            {
                chinglish: "This meme is so funny, XSWL!",
                chinese: "这个梗太搞笑了，笑死我了！",
                meaning: "This meme is so funny that I'm dying of laughter!"
            },
            {
                chinglish: "The cat video made me XSWL all day!",
                chinese: "这个猫咪视频让我笑死我了一整天！",
                meaning: "The cat video was so hilarious!"
            }
        ]
    },
    "siha": {
        chinese: "撕哈/斯哈",
        pinyin: "sī hā / sī hā",
        meaning: "An expression of attraction or admiration, used when seeing someone attractive",
        examples: [
            {
                chinglish: "Wow, siha siha! That guy is so handsome!",
                chinese: "哇，斯哈斯哈！那个男生好帅！",
                meaning: "Expressing attraction towards a handsome guy"
            },
            {
                chinglish: "Look at that beautiful girl! Siha!",
                chinese: "看那个漂亮女生！斯哈！",
                meaning: "Expressing attraction towards a beautiful girl"
            }
        ]
    },
    "awsl": {
        chinese: "啊我死了",
        pinyin: "ā wǒ sǐ le",
        meaning: "OMG, I'm dying! (used to express extreme excitement or admiration)",
        examples: [
            {
                chinglish: "This puppy is so cute, AWSL!",
                chinese: "这只小狗太可爱了，啊我死了！",
                meaning: "This puppy is so adorably cute that I can't handle it!"
            },
            {
                chinglish: "The new BTS dance video, AWSL!",
                chinese: "BTS新的舞蹈视频，啊我死了！",
                meaning: "The new BTS dance video is so amazing!"
            }
        ]
    },
    "yyds": {
        chinese: "永远的神",
        pinyin: "yǒng yuǎn de shén",
        meaning: "GOAT (Greatest Of All Time)",
        examples: [
            {
                chinglish: "Michael Jordan is YYDS in basketball!",
                chinese: "迈克尔·乔丹是篮球界永远的神！",
                meaning: "Michael Jordan is the greatest basketball player of all time!"
            },
            {
                chinglish: "iPhone is YYDS in smartphones!",
                chinese: "iPhone是手机界永远的神！",
                meaning: "iPhone is the greatest smartphone ever!"
            }
        ]
    },
    "woc": {
        chinese: "我靠",
        pinyin: "wǒ kào",
        meaning: "OMG / Holy cow!",
        examples: [
            {
                chinglish: "WOC, did you see that amazing shot?",
                chinese: "我靠，你看到那个神奇的投篮了吗？",
                meaning: "Oh my god, did you see that amazing shot?"
            },
            {
                chinglish: "WOC, I forgot to do my homework!",
                chinese: "我靠，我忘记做作业了！",
                meaning: "Oh my god, I forgot to do my homework!"
            }
        ]
    },
    "you are my vegetable": {
        chinese: "你是我的菜",
        pinyin: "Nǐ shì wǒ de cài",
        meaning: "You are my type",
        examples: [
            {
                chinglish: "You are my vegetable",
                chinese: "你是我的菜",
                meaning: "I like you / You're my type"
            },
            {
                chinglish: "That girl is totally my vegetable!",
                chinese: "那个女生完全是我的菜！",
                meaning: "That girl is exactly my type!"
            }
        ]
    },
    "long time no see": {
        chinese: "好久不见",
        pinyin: "Hǎo jiǔ bú jiàn",
        meaning: "Haven't seen you for a long time",
        examples: [
            {
                chinglish: "Long time no see",
                chinese: "好久不见",
                meaning: "It's been a long time since we last met"
            },
            {
                chinglish: "Long time no see! How have you been?",
                chinese: "好久不见！你最近怎么样？",
                meaning: "Haven't seen you in ages! How are you doing?"
            }
        ]
    },
    "people mountain people sea": {
        chinese: "人山人海",
        pinyin: "Rén shān rén hǎi",
        meaning: "A huge crowd of people",
        examples: [
            {
                chinglish: "The concert was people mountain people sea",
                chinese: "音乐会人山人海",
                meaning: "The concert was extremely crowded"
            },
            {
                chinglish: "During the festival, it was people mountain people sea everywhere!",
                chinese: "节日期间，到处都是人山人海！",
                meaning: "During the festival, there were huge crowds everywhere!"
            }
        ]
    },
    "give you some color to see see": {
        chinese: "给你点颜色看看",
        pinyin: "Gěi nǐ diǎn yán sè kàn kan",
        meaning: "I'll teach you a lesson",
        examples: [
            {
                chinglish: "If you don't behave, I'll give you some color to see see",
                chinese: "如果你不听话，我就给你点颜色看看",
                meaning: "If you don't behave, I'll teach you a lesson"
            },
            {
                chinglish: "The teacher said he would give us some color to see see if we didn't finish homework",
                chinese: "老师说如果我们不完成作业，他就给我们点颜色看看",
                meaning: "The teacher said he would teach us a lesson if we didn't finish homework"
            }
        ]
    },
    "eat vinegar": {
        chinese: "吃醋",
        pinyin: "Chī cù",
        meaning: "To be jealous",
        examples: [
            {
                chinglish: "My girlfriend is eating vinegar again",
                chinese: "我女朋友又吃醋了",
                meaning: "My girlfriend is jealous again"
            },
            {
                chinglish: "Don't eat vinegar, we're just friends!",
                chinese: "别吃醋，我们只是朋友！",
                meaning: "Don't be jealous, we're just friends!"
            }
        ]
    },
    "no three no four": {
        chinese: "不三不四",
        pinyin: "Bù sān bù sì",
        meaning: "Dubious, shady",
        examples: [
            {
                chinglish: "That guy looks no three no four",
                chinese: "那个人看起来不三不四",
                meaning: "That person looks suspicious/shady"
            },
            {
                chinglish: "Don't hang out with those no three no four people",
                chinese: "别和那些不三不四的人混在一起",
                meaning: "Don't hang out with those shady people"
            }
        ]
    },
    "yysy": {
        chinese: "有一说一",
        pinyin: "yǒu yī shuō yī",
        meaning: "To be honest / TBH",
        examples: [
            {
                chinglish: "YYSY, this movie is not as good as everyone says",
                chinese: "有一说一，这电影没有大家说的那么好",
                meaning: "To be honest, this movie isn't as good as people claim"
            },
            {
                chinglish: "YYSY, you look better with short hair",
                chinese: "有一说一，你短发比较好看",
                meaning: "Honestly speaking, you look better with short hair"
            }
        ]
    },
    "plmm": {
        chinese: "漂亮妹妹",
        pinyin: "piào liàng mèi mei",
        meaning: "Pretty girl / Beautiful young lady",
        examples: [
            {
                chinglish: "There's a PLMM in our class",
                chinese: "我们班有个漂亮妹妹",
                meaning: "There's a pretty girl in our class"
            },
            {
                chinglish: "The new transfer student is such a PLMM!",
                chinese: "新来的转学生真是个漂亮妹妹！",
                meaning: "The new transfer student is such a beauty!"
            }
        ]
    },
    "gkd": {
        chinese: "搞快点",
        pinyin: "gǎo kuài diǎn",
        meaning: "Hurry up! / Let's go! / Get moving!",
        examples: [
            {
                chinglish: "We're gonna be late, GKD!",
                chinese: "要迟到了，搞快点！",
                meaning: "We're running late, hurry up!"
            },
            {
                chinglish: "The movie is about to start, GKD!",
                chinese: "电影要开始了，搞快点！",
                meaning: "The movie is starting soon, let's hurry!"
            }
        ]
    },
    "nsdd": {
        chinese: "你说得对",
        pinyin: "nǐ shuō de duì",
        meaning: "You're right / You have a point",
        examples: [
            {
                chinglish: "NSDD, we should try that restaurant",
                chinese: "你说得对，我们应该试试那家餐厅",
                meaning: "You're right, we should give that restaurant a try"
            },
            {
                chinglish: "NSDD, I need to study harder",
                chinese: "你说得对，我需要更努力学习",
                meaning: "You're right, I need to study more"
            }
        ]
    },
    "szbd": {
        chinese: "实在不懂",
        pinyin: "shí zài bù dǒng",
        meaning: "Really don't understand / Totally confused",
        examples: [
            {
                chinglish: "This math problem, SZBD!",
                chinese: "这道数学题，实在不懂！",
                meaning: "I really don't understand this math problem!"
            },
            {
                chinglish: "Why did she get angry? SZBD!",
                chinese: "她为什么生气？实在不懂！",
                meaning: "Why did she get angry? I really don't get it!"
            }
        ]
    },
    "dddd": {
        chinese: "打打打打",
        pinyin: "dǎ dǎ dǎ dǎ",
        meaning: "Fight! Fight! Fight! (gaming slang)",
        examples: [
            {
                chinglish: "Enemy spotted! DDDD!",
                chinese: "发现敌人！打打打打！",
                meaning: "Enemy spotted! Let's fight!"
            },
            {
                chinglish: "Team battle starting, DDDD!",
                chinese: "团战开始了，打打打打！",
                meaning: "Team battle is starting, let's fight!"
            }
        ]
    },
    "tql": {
        chinese: "太强了",
        pinyin: "tài qiáng le",
        meaning: "Too strong! / Amazing! / Impressive!",
        examples: [
            {
                chinglish: "Your gaming skills, TQL!",
                chinese: "你的游戏技术，太强了！",
                meaning: "Your gaming skills are amazing!"
            },
            {
                chinglish: "You solved that problem so fast, TQL!",
                chinese: "你解决那个问题太快了，太强了！",
                meaning: "You solved that problem so quickly, impressive!"
            }
        ]
    },
    "zqsg": {
        chinese: "真情实感",
        pinyin: "zhēn qíng shí gǎn",
        meaning: "Real feelings / Genuine emotions",
        examples: [
            {
                chinglish: "This drama made me cry, ZQSG!",
                chinese: "这部剧让我真情实感地哭了！",
                meaning: "This drama made me cry with real emotions!"
            },
            {
                chinglish: "Writing this love letter, ZQSG!",
                chinese: "写这封情书，真情实感！",
                meaning: "Writing this love letter with genuine feelings!"
            }
        ]
    },
    "xfxy": {
        chinese: "想发小姨",
        pinyin: "xiǎng fā xiǎo yí",
        meaning: "Want to get rich quickly (internet slang)",
        examples: [
            {
                chinglish: "Playing lottery again? XFXY?",
                chinese: "又在买彩票？想发小姨？",
                meaning: "Buying lottery tickets again? Want to get rich quick?"
            },
            {
                chinglish: "Investing in crypto, XFXY!",
                chinese: "投资加密货币，想发小姨！",
                meaning: "Investing in cryptocurrency, hoping to get rich!"
            }
        ]
    },
    "good good study day day up": {
        chinese: "好好学习天天向上",
        pinyin: "hǎo hǎo xué xí tiān tiān xiàng shàng",
        meaning: "Study hard and make progress every day",
        examples: [
            {
                chinglish: "Remember: good good study, day day up!",
                chinese: "记住：好好学习，天天向上！",
                meaning: "Remember to study hard and improve every day!"
            },
            {
                chinglish: "My mom always says good good study day day up",
                chinese: "我妈总是说好好学习天天向上",
                meaning: "My mom always encourages me to study hard and improve"
            }
        ]
    },
    "add oil": {
        chinese: "加油",
        pinyin: "jiā yóu",
        meaning: "Come on! / Keep going! / You can do it!",
        examples: [
            {
                chinglish: "Big test tomorrow? Add oil!",
                chinese: "明天大考？加油！",
                meaning: "Big test tomorrow? You can do it!"
            },
            {
                chinglish: "The race is tough, but add oil!",
                chinese: "比赛很艰难，但是加油！",
                meaning: "The race is tough, but keep going!"
            }
        ]
    },
    "skr": {
        chinese: "尚可热",
        pinyin: "shàng kě rè",
        meaning: "Cool! / Awesome! (slang from rap culture)",
        examples: [
            {
                chinglish: "Your new song is SKR!",
                chinese: "你的新歌太尚可热了！",
                meaning: "Your new song is so cool!"
            },
            {
                chinglish: "The dance moves are SKR!",
                chinese: "这个舞步太尚可热了！",
                meaning: "These dance moves are awesome!"
            }
        ]
    },
    "yyqx": {
        chinese: "营业期限",
        pinyin: "yíng yè qī xiàn",
        meaning: "Business hours (internet slang for celebrity interactions)",
        examples: [
            {
                chinglish: "The idol couple's YYQX is over",
                chinese: "这对偶像的营业期限结束了",
                meaning: "The idol couple's promotional period is over"
            },
            {
                chinglish: "New drama YYQX starts today!",
                chinese: "新剧的营业期限今天开始！",
                meaning: "The promotion period for the new drama starts today!"
            }
        ]
    },
    "666": {
        chinese: "六六六",
        pinyin: "liù liù liù",
        meaning: "Awesome / Amazing / Impressive",
        examples: [
            {
                chinglish: "Your performance was 666!",
                chinese: "你的表现666！",
                meaning: "Your performance was awesome!"
            },
            {
                chinglish: "That move was so 666!",
                chinese: "那个动作太666了！",
                meaning: "That move was incredibly impressive!"
            }
        ]
    },
    "diacall": {
        chinese: "打call",
        pinyin: "dǎ call",
        meaning: "To support / To cheer for someone",
        examples: [
            {
                chinglish: "I'm giving a call for my idol!",
                chinese: "我在为我的偶像打call！",
                meaning: "I'm cheering for my idol!"
            },
            {
                chinglish: "Everyone give a call for the team!",
                chinese: "大家一起为团队打call！",
                meaning: "Let's all support the team!"
            }
        ]
    },
    "chigua": {
        chinese: "吃瓜",
        pinyin: "chī guā",
        meaning: "Watching drama unfold (lit. eating melon)",
        examples: [
            {
                chinglish: "I'm just eating melon here",
                chinese: "我就是在这吃瓜",
                meaning: "I'm just here watching the drama unfold"
            },
            {
                chinglish: "The melon is so juicy today!",
                chinese: "今天的瓜好劲爆啊！",
                meaning: "Today's drama is so intense!"
            }
        ]
    },
    // 网络梗和流行语（第一批）
    "neijuan": {
        chinese: "内卷",
        pinyin: "nèi juǎn",
        meaning: "Involution / Excessive competition",
        examples: [
            {
                chinglish: "The school is too involution",
                chinese: "这个学校太内卷了",
                meaning: "The competition in this school is too intense"
            },
            {
                chinglish: "Stop making involution worse",
                chinese: "别再加剧内卷了",
                meaning: "Stop making the competition more intense"
            }
        ]
    },
    "tangping": {
        chinese: "躺平",
        pinyin: "tǎng píng",
        meaning: "Lying flat / Giving up on competition",
        examples: [
            {
                chinglish: "I choose to lie flat",
                chinese: "我选择躺平",
                meaning: "I choose to opt out of the rat race"
            },
            {
                chinglish: "Lying flat is my lifestyle",
                chinese: "躺平是我的生活方式",
                meaning: "Avoiding competition is my way of life"
            }
        ]
    },
    "versailles": {
        chinese: "凡尔赛",
        pinyin: "fán ěr sài",
        meaning: "Humble bragging",
        examples: [
            {
                chinglish: "Stop being so Versailles",
                chinese: "别这么凡尔赛了",
                meaning: "Stop humble bragging"
            },
            {
                chinglish: "This post is very Versailles",
                chinese: "这条动态很凡尔赛",
                meaning: "This post is full of humble bragging"
            }
        ]
    },
    "pigfoot": {
        chinese: "大猪蹄子",
        pinyin: "dà zhū tí zi",
        meaning: "Playboy / Unfaithful person (playful)",
        examples: [
            {
                chinglish: "You big pig foot!",
                chinese: "你这个大猪蹄子！",
                meaning: "You unfaithful person! (playful)"
            },
            {
                chinglish: "He is such a pig foot",
                chinese: "他就是个大猪蹄子",
                meaning: "He's such a player (playful)"
            }
        ]
    },
    "kewang": {
        chinese: "渴望",
        pinyin: "kě wàng",
        meaning: "Thirsty for / Desperate for attention",
        examples: [
            {
                chinglish: "So thirsty for attention",
                chinese: "太渴望关注了",
                meaning: "Too desperate for attention"
            },
            {
                chinglish: "Stop being so thirsty",
                chinese: "别这么渴望了",
                meaning: "Stop being so desperate for attention"
            }
        ]
    },
    // 中式英语表达（第一批）
    "eat sleep play games": {
        chinese: "吃饭睡觉打游戏",
        pinyin: "chī fàn shuì jiào dǎ yóu xì",
        meaning: "Eat, sleep, and play games (describing a lazy lifestyle)",
        examples: [
            {
                chinglish: "All I do is eat sleep play games",
                chinese: "我整天就是吃饭睡觉打游戏",
                meaning: "I spend all my time eating, sleeping, and playing games"
            },
            {
                chinglish: "Summer vacation = eat sleep play games",
                chinese: "暑假=吃饭睡觉打游戏",
                meaning: "Summer vacation is all about eating, sleeping, and gaming"
            }
        ]
    },
    "geili": {
        chinese: "给力",
        pinyin: "gěi lì",
        meaning: "Awesome / Powerful / Impressive",
        examples: [
            {
                chinglish: "Your new car is so powerful!",
                chinese: "你的新车太给力了！",
                meaning: "Your new car is so awesome!"
            },
            {
                chinglish: "This movie is really powerful!",
                chinese: "这电影真给力！",
                meaning: "This movie is really impressive!"
            }
        ]
    },
    "baituo": {
        chinese: "拜托了",
        pinyin: "bài tuō le",
        meaning: "Please / I beg you",
        examples: [
            {
                chinglish: "Please, help me just this once!",
                chinese: "拜托了，就帮我这一次！",
                meaning: "For the love of God, help me just this once!"
            },
            {
                chinglish: "Please, don't tell anyone!",
                chinese: "拜托了，别告诉其他人！",
                meaning: "Please, I beg you, don't tell anyone!"
            }
        ]
    },
    // 网络流行语（第二批）
    "foxi": {
        chinese: "佛系",
        pinyin: "fó xì",
        meaning: "Buddha-like attitude / Going with the flow",
        examples: [
            {
                chinglish: "I'm very Buddha-like about dating",
                chinese: "我对约会很佛系",
                meaning: "I'm very laid-back about dating"
            },
            {
                chinglish: "Let's be Buddha-like about this",
                chinese: "我们对这件事佛系一点",
                meaning: "Let's take a relaxed approach to this"
            }
        ]
    },
    "piyixia": {
        chinese: "皮一下",
        pinyin: "pí yī xià",
        meaning: "To mess around / To be playful",
        examples: [
            {
                chinglish: "Just messing around, don't be mad",
                chinese: "就皮一下，别生气",
                meaning: "Just being playful, don't be angry"
            },
            {
                chinglish: "He likes to mess around in class",
                chinese: "他喜欢在课堂上皮一下",
                meaning: "He likes to be playful in class"
            }
        ]
    },
    "daihuo": {
        chinese: "带货",
        pinyin: "dài huò",
        meaning: "Product promotion (usually by influencers)",
        examples: [
            {
                chinglish: "This streamer is bringing goods again",
                chinese: "这个主播又在带货了",
                meaning: "This streamer is promoting products again"
            },
            {
                chinglish: "Her bringing goods ability is strong",
                chinese: "她的带货能力很强",
                meaning: "She's very good at promoting products"
            }
        ]
    },
    // 网络流行语（第三批）
    "xiaoqueying": {
        chinese: "小确幸",
        pinyin: "xiǎo què xìng",
        meaning: "Small happiness in life",
        examples: [
            {
                chinglish: "Finding a parking spot is little happiness",
                chinese: "找到停车位是一种小确幸",
                meaning: "Finding a parking spot is a small joy in life"
            },
            {
                chinglish: "Free coffee is my little happiness today",
                chinese: "今天的免费咖啡是我的小确幸",
                meaning: "Getting free coffee is my small joy today"
            }
        ]
    },
    "zhengxiang": {
        chinese: "真香",
        pinyin: "zhēn xiāng",
        meaning: "I take it back (admitting something is good after criticizing it)",
        examples: [
            {
                chinglish: "I said I wouldn't buy it, but really fragrant!",
                chinese: "我说我不买的，但是真香！",
                meaning: "I said I wouldn't buy it, but I take that back!"
            },
            {
                chinglish: "Hated this game before, but really fragrant now!",
                chinese: "之前讨厌这个游戏，但现在真香！",
                meaning: "I used to hate this game, but now I love it!"
            }
        ]
    },
    "shejiaoniubi": {
        chinese: "社交牛逼症",
        pinyin: "shè jiāo niú bī zhèng",
        meaning: "Social superiority complex / Master of socializing",
        examples: [
            {
                chinglish: "He has social superiority complex",
                chinese: "他有社交牛逼症",
                meaning: "He's extremely good at socializing"
            },
            {
                chinglish: "My social superiority complex kicks in at parties",
                chinese: "我在派对上就犯社交牛逼症",
                meaning: "I become a social butterfly at parties"
            }
        ]
    },
    // 网络流行语（第四批）
    "yinghe": {
        chinese: "硬核",
        pinyin: "yìng hé",
        meaning: "Hardcore / Intense / Strong",
        examples: [
            {
                chinglish: "This game is too hardcore!",
                chinese: "这个游戏太硬核了！",
                meaning: "This game is extremely challenging!"
            },
            {
                chinglish: "His workout routine is hardcore",
                chinese: "他的训练计划很硬核",
                meaning: "His workout routine is very intense"
            }
        ]
    },
    "shuaiguo": {
        chinese: "甩锅",
        pinyin: "shuǎi guō",
        meaning: "To pass the blame (lit. throw the pot)",
        examples: [
            {
                chinglish: "Don't throw the pot to me!",
                chinese: "别往我这甩锅！",
                meaning: "Don't try to blame me!"
            },
            {
                chinglish: "He always throws the pot to others",
                chinese: "他总是往别人身上甩锅",
                meaning: "He always tries to blame others"
            }
        ]
    },
    "shangtou": {
        chinese: "上头",
        pinyin: "shàng tóu",
        meaning: "Getting hyped up / Excited",
        examples: [
            {
                chinglish: "This song makes me on top!",
                chinese: "这首歌让我上头！",
                meaning: "This song gets me so hyped!"
            },
            {
                chinglish: "The crowd is getting on top!",
                chinese: "观众都上头了！",
                meaning: "The crowd is getting really excited!"
            }
        ]
    },
    // 中式英语表达（第二批）
    "thank you impressed": {
        chinese: "谢谢你，我真是服了",
        pinyin: "xiè xie nǐ, wǒ zhēn shi fú le",
        meaning: "Thank you, I am really impressed (often used sarcastically)",
        examples: [
            {
                chinglish: "Thank you, I am really impressed by your excuse",
                chinese: "谢谢你，我真是服了你的借口",
                meaning: "I can't believe your excuse (sarcastic)"
            },
            {
                chinglish: "Thank you, I am really impressed by your lateness",
                chinese: "谢谢你，我真是服了你的迟到",
                meaning: "I'm fed up with your lateness (sarcastic)"
            }
        ]
    },
    "buy soy sauce": {
        chinese: "打酱油",
        pinyin: "dǎ jiàng yóu",
        meaning: "Just passing by / Not involved",
        examples: [
            {
                chinglish: "I'm just here to buy soy sauce",
                chinese: "我就是来打个酱油的",
                meaning: "I'm just passing by, not getting involved"
            },
            {
                chinglish: "Don't mind me, buying soy sauce",
                chinese: "别管我，我就打个酱油",
                meaning: "Don't mind me, I'm just a bystander"
            }
        ]
    },
    "so handsome": {
        chinese: "帅呆了",
        pinyin: "shuài dāi le",
        meaning: "Super handsome / Totally awesome",
        examples: [
            {
                chinglish: "Your new haircut is so handsome!",
                chinese: "你的新发型帅呆了！",
                meaning: "Your new haircut is totally awesome!"
            },
            {
                chinglish: "That move was so handsome!",
                chinese: "那个动作帅呆了！",
                meaning: "That move was incredibly cool!"
            }
        ]
    },
    "too stunning": {
        chinese: "太惊艳了",
        pinyin: "tài jīng yàn le",
        meaning: "Too stunning / Amazing",
        examples: [
            {
                chinglish: "This dress is too stunning!",
                chinese: "这件裙子太惊艳了！",
                meaning: "This dress is absolutely gorgeous!"
            },
            {
                chinglish: "Her performance was too stunning!",
                chinese: "她的表演太惊艳了！",
                meaning: "Her performance was breathtaking!"
            }
        ]
    },
    "riding heat": {
        chinese: "蹭热度",
        pinyin: "cèng rè dù",
        meaning: "Riding the hype / Piggybacking on popularity",
        examples: [
            {
                chinglish: "This brand is riding heat again",
                chinese: "这个品牌又在蹭热度了",
                meaning: "This brand is trying to capitalize on the trend again"
            },
            {
                chinglish: "Stop riding heat of other's success",
                chinese: "别总蹭别人的热度",
                meaning: "Stop trying to profit from others' success"
            }
        ]
    },
    "water reverse": {
        chinese: "水逆",
        pinyin: "shuǐ nì",
        meaning: "Mercury retrograde / Bad luck period",
        examples: [
            {
                chinglish: "My water reverse period is coming",
                chinese: "我的水逆期要来了",
                meaning: "My unlucky period is approaching"
            },
            {
                chinglish: "Everything goes wrong, must be water reverse",
                chinese: "什么都不顺，一定是水逆了",
                meaning: "Everything's going wrong, must be Mercury retrograde"
            }
        ]
    },
    "quick flash": {
        chinese: "快闪",
        pinyin: "kuài shǎn",
        meaning: "Flash mob / Quick appearance",
        examples: [
            {
                chinglish: "Let's do a quick flash at the mall",
                chinese: "我们在商场搞个快闪吧",
                meaning: "Let's organize a flash mob at the mall"
            },
            {
                chinglish: "The store is doing quick flash sales",
                chinese: "这家店在搞快闪特卖",
                meaning: "The store is having a pop-up sale"
            }
        ]
    },
    "no eyes watch": {
        chinese: "没眼看",
        pinyin: "méi yǎn kàn",
        meaning: "Too cringe to watch",
        examples: [
            {
                chinglish: "This scene is no eyes to watch",
                chinese: "这个场面真是没眼看",
                meaning: "This scene is too embarrassing to watch"
            },
            {
                chinglish: "Your dance moves are no eyes to watch",
                chinese: "你的舞步真是没眼看",
                meaning: "Your dancing is so cringe-worthy"
            }
        ]
    },
    "embarrassed": {
        chinese: "囧",
        pinyin: "jiǒng",
        meaning: "Embarrassed / Awkward situation",
        examples: [
            {
                chinglish: "That moment was so jiong",
                chinese: "那一刻真是太囧了",
                meaning: "That moment was so embarrassing"
            },
            {
                chinglish: "My jiong face when I fell",
                chinese: "我摔倒时的囧脸",
                meaning: "My embarrassed face when I fell"
            }
        ]
    },
    "silent naughty": {
        chinese: "闷骚",
        pinyin: "mēn sāo",
        meaning: "Quiet but playful / Reserved but wild inside",
        examples: [
            {
                chinglish: "He looks quiet but is silent naughty",
                chinese: "他看着安静，其实很闷骚",
                meaning: "He seems quiet but is actually quite wild inside"
            },
            {
                chinglish: "The silent naughty type is dangerous",
                chinese: "闷骚型的最危险",
                meaning: "The quiet but playful type is the most dangerous"
            }
        ]
    },
    // 中式英语表达（第三批）
    "sense of loss": {
        chinese: "失落感",
        pinyin: "shī luò gǎn",
        meaning: "Feeling of loss / Empty feeling",
        examples: [
            {
                chinglish: "I have sense of loss after finishing the book",
                chinese: "看完这本书后有种失落感",
                meaning: "I feel empty after finishing the book"
            },
            {
                chinglish: "The sense of loss is strong today",
                chinese: "今天的失落感很强",
                meaning: "The feeling of emptiness is strong today"
            }
        ]
    },
    "expose stuffing": {
        chinese: "露馅了",
        pinyin: "lòu xiàn le",
        meaning: "To be exposed / True nature revealed",
        examples: [
            {
                chinglish: "My lie exposed the stuffing",
                chinese: "我的谎言露馅了",
                meaning: "My lie was exposed"
            },
            {
                chinglish: "Be careful not to expose the stuffing",
                chinese: "小心别露馅了",
                meaning: "Be careful not to reveal the truth"
            }
        ]
    },
    "go to sky": {
        chinese: "你咋不上天呢",
        pinyin: "nǐ zǎ bù shàng tiān ne",
        meaning: "Why don't you go to heaven? (sarcastic)",
        examples: [
            {
                chinglish: "Why don't you go to the sky if you're so great?",
                chinese: "你那么厉害你咋不上天呢？",
                meaning: "You think you're so amazing, why don't you just fly? (sarcastic)"
            },
            {
                chinglish: "Go to the sky with your perfect scores!",
                chinese: "考满分你咋不上天呢！",
                meaning: "Oh, you got perfect scores, why don't you just ascend to heaven! (sarcastic)"
            }
        ]
    },
    "has poison": {
        chinese: "有毒",
        pinyin: "yǒu dú",
        meaning: "Addictive / Toxic (in a playful way)",
        examples: [
            {
                chinglish: "This game has poison, I can't stop playing",
                chinese: "这游戏有毒，我停不下来",
                meaning: "This game is so addictive, I can't stop playing"
            },
            {
                chinglish: "Your jokes have poison!",
                chinese: "你的笑话有毒！",
                meaning: "Your jokes are addictively funny!"
            }
        ]
    },
    "you know it": {
        chinese: "你懂的",
        pinyin: "nǐ dǒng de",
        meaning: "You know what I mean / You get it",
        examples: [
            {
                chinglish: "I can't say more, you know it",
                chinese: "我不能多说，你懂的",
                meaning: "I can't say more, you understand what I mean"
            },
            {
                chinglish: "The reason? You know it!",
                chinese: "原因？你懂的！",
                meaning: "The reason? You get what I mean!"
            }
        ]
    },
    // 网络游戏用语（第一批）
    "kaihei": {
        chinese: "开黑",
        pinyin: "kāi hēi",
        meaning: "Play together as a team (gaming)",
        examples: [
            {
                chinglish: "Let's open black tonight",
                chinese: "今晚一起开黑吧",
                meaning: "Let's team up and play together tonight"
            },
            {
                chinglish: "Opening black with 5 people",
                chinese: "五个人开黑",
                meaning: "Playing as a team of five"
            }
        ]
    },
    "carry": {
        chinese: "带飞",
        pinyin: "dài fēi",
        meaning: "To carry the team / Lead team to victory",
        examples: [
            {
                chinglish: "Please carry me in this game",
                chinese: "请在这局游戏带飞我",
                meaning: "Please help me win this game"
            },
            {
                chinglish: "The pro player carried the whole team",
                chinese: "职业选手带飞了整个队伍",
                meaning: "The professional player led the entire team to victory"
            }
        ]
    },
    "guaji": {
        chinese: "挂机",
        pinyin: "guà jī",
        meaning: "AFK (Away From Keyboard) / Idle in game",
        examples: [
            {
                chinglish: "Our teammate is hanging up",
                chinese: "我们的队友挂机了",
                meaning: "Our teammate is AFK"
            },
            {
                chinglish: "Don't hang up during ranked games",
                chinese: "排位赛时别挂机",
                meaning: "Don't go AFK during ranked matches"
            }
        ]
    },
    "songren": {
        chinese: "送人头",
        pinyin: "sòng rén tóu",
        meaning: "Feeding (giving easy kills to enemy)",
        examples: [
            {
                chinglish: "Stop giving heads to enemy",
                chinese: "别再送人头了",
                meaning: "Stop feeding the enemy team"
            },
            {
                chinglish: "He gave ten heads already",
                chinese: "他已经送了十个人头了",
                meaning: "He has died to the enemy ten times already"
            }
        ]
    },
    "fanche": {
        chinese: "翻车",
        pinyin: "fān chē",
        meaning: "To fail badly / Mess up (gaming)",
        examples: [
            {
                chinglish: "We flipped car in the last round",
                chinese: "我们上一局翻车了",
                meaning: "We failed badly in the last round"
            },
            {
                chinglish: "The pro team flipped car against newbies",
                chinese: "职业队伍竟然被新手队翻车了",
                meaning: "The professional team unexpectedly lost to beginners"
            }
        ]
    },
    // 网络游戏用语（第二批）
    "dabao": {
        chinese: "打爆",
        pinyin: "dǎ bào",
        meaning: "To crush / Dominate opponent",
        examples: [
            {
                chinglish: "We got blown up by the enemy team",
                chinese: "我们被敌队打爆了",
                meaning: "We were completely dominated by the enemy team"
            },
            {
                chinglish: "Let's blow up their base",
                chinese: "我们去打爆他们基地",
                meaning: "Let's destroy their base completely"
            }
        ]
    },
    "baotou": {
        chinese: "爆头",
        pinyin: "bào tóu",
        meaning: "Headshot",
        examples: [
            {
                chinglish: "Nice blow head!",
                chinese: "漂亮的爆头！",
                meaning: "Nice headshot!"
            },
            {
                chinglish: "One blow head, one kill",
                chinese: "一发爆头，一个击杀",
                meaning: "One headshot, one kill"
            }
        ]
    },
    "jisha": {
        chinese: "击杀",
        pinyin: "jī shā",
        meaning: "Kill (in gaming)",
        examples: [
            {
                chinglish: "I got three kills in a row",
                chinese: "我连续击杀了三个",
                meaning: "I got three kills in succession"
            },
            {
                chinglish: "The kill count is rising",
                chinese: "击杀数在上升",
                meaning: "The number of kills is increasing"
            }
        ]
    },
    "baofar": {
        chinese: "爆发",
        pinyin: "bào fā",
        meaning: "Burst damage / Sudden power spike",
        examples: [
            {
                chinglish: "The mage's outburst is too high",
                chinese: "法师的爆发太高了",
                meaning: "The mage's burst damage is too powerful"
            },
            {
                chinglish: "Save skills for outburst",
                chinese: "留着技能等爆发",
                meaning: "Save abilities for burst damage"
            }
        ]
    },
    "liansha": {
        chinese: "连杀",
        pinyin: "lián shā",
        meaning: "Killing spree / Multi-kill",
        examples: [
            {
                chinglish: "Legendary chain kill!",
                chinese: "超神连杀！",
                meaning: "Legendary killing spree!"
            },
            {
                chinglish: "Break their chain kill",
                chinese: "终结他们的连杀",
                meaning: "End their killing spree"
            }
        ]
    },
    // 网络游戏用语（第三批）
    "tank": {
        chinese: "坦克",
        pinyin: "tǎn kè",
        meaning: "Tank (gaming role)",
        examples: [
            {
                chinglish: "We need a tank in team",
                chinese: "我们队伍需要一个坦克",
                meaning: "We need a tank player in our team"
            },
            {
                chinglish: "This tank is too strong",
                chinese: "这个坦克太肉了",
                meaning: "This tank is too tough"
            }
        ]
    },
    "dps": {
        chinese: "输出",
        pinyin: "shū chū",
        meaning: "DPS (Damage Per Second)",
        examples: [
            {
                chinglish: "Your output is too low",
                chinese: "你的输出太低了",
                meaning: "Your DPS is too low"
            },
            {
                chinglish: "We need more output",
                chinese: "我们需要更多输出",
                meaning: "We need more damage dealers"
            }
        ]
    },
    "fuzhu": {
        chinese: "辅助",
        pinyin: "fǔ zhù",
        meaning: "Support (gaming role)",
        examples: [
            {
                chinglish: "Play support for me",
                chinese: "给我玩辅助",
                meaning: "Be my support player"
            },
            {
                chinglish: "This support is very strong",
                chinese: "这个辅助很强",
                meaning: "This support player is very skilled"
            }
        ]
    },
    "shangfen": {
        chinese: "上分",
        pinyin: "shàng fēn",
        meaning: "Ranking up / Gaining points",
        examples: [
            {
                chinglish: "Let's up points together",
                chinese: "一起上分吧",
                meaning: "Let's rank up together"
            },
            {
                chinglish: "I'm going up points all night",
                chinese: "我要通宵上分",
                meaning: "I'm going to rank up all night"
            }
        ]
    },
    "xiafen": {
        chinese: "下分",
        pinyin: "xià fēn",
        meaning: "Losing rank / Dropping points",
        examples: [
            {
                chinglish: "I'm down points all day",
                chinese: "我今天一直在下分",
                meaning: "I've been losing rank all day"
            },
            {
                chinglish: "Stop making me down points",
                chinese: "别让我再下分了",
                meaning: "Stop making me lose rank"
            }
        ]
    },
    // 网络梗和流行语（第二批）
    "xswl": {
        chinese: "笑死我了",
        pinyin: "xiào sǐ wǒ le",
        meaning: "ROFL (Rolling On Floor Laughing)",
        examples: [
            {
                chinglish: "This joke XSWL",
                chinese: "这个笑话笑死我了",
                meaning: "This joke is so funny I'm dying"
            },
            {
                chinglish: "Your face XSWL",
                chinese: "你的表情笑死我了",
                meaning: "Your expression is hilarious"
            }
        ]
    },
    "plpl": {
        chinese: "噗噜噗噜",
        pinyin: "pū lū pū lū",
        meaning: "Bubbling / Giggling sound",
        examples: [
            {
                chinglish: "PLPL so cute",
                chinese: "噗噜噗噜好可爱",
                meaning: "That's so adorably funny"
            },
            {
                chinglish: "Making PLPL sounds",
                chinese: "发出噗噜噗噜的声音",
                meaning: "Making cute giggling sounds"
            }
        ]
    },
    "awsl": {
        chinese: "啊我死了",
        pinyin: "a wǒ sǐ le",
        meaning: "OMG I'm dead (from cuteness)",
        examples: [
            {
                chinglish: "This puppy AWSL",
                chinese: "这只小狗啊我死了",
                meaning: "This puppy is so cute I can't even"
            },
            {
                chinglish: "Your baby AWSL",
                chinese: "你家宝宝啊我死了",
                meaning: "Your baby is devastatingly cute"
            }
        ]
    },
    "dbq": {
        chinese: "对不起",
        pinyin: "duì bù qǐ",
        meaning: "Sorry (abbreviated)",
        examples: [
            {
                chinglish: "DBQ I'm late",
                chinese: "对不起我迟到了",
                meaning: "Sorry I'm late"
            },
            {
                chinglish: "DBQ my mistake",
                chinese: "对不起我的错",
                meaning: "Sorry, my bad"
            }
        ]
    },
    // 网络梗和流行语（第三批）
    "yysy": {
        chinese: "有一说一",
        pinyin: "yǒu yī shuō yī",
        meaning: "To be honest / Speaking frankly",
        examples: [
            {
                chinglish: "YYSY this is not good",
                chinese: "有一说一，这个不太行",
                meaning: "To be honest, this isn't good"
            },
            {
                chinglish: "YYSY you're right",
                chinese: "有一说一，你说得对",
                meaning: "Frankly speaking, you're right"
            }
        ]
    },
    "xdm": {
        chinese: "兄弟们",
        pinyin: "xiōng dì men",
        meaning: "Bros / Guys (internet slang)",
        examples: [
            {
                chinglish: "XDM look at this",
                chinese: "兄弟们看这个",
                meaning: "Guys, check this out"
            },
            {
                chinglish: "XDM help me",
                chinese: "兄弟们救救我",
                meaning: "Bros, help me out"
            }
        ]
    },
    "nsdd": {
        chinese: "你说得对",
        pinyin: "nǐ shuō de duì",
        meaning: "You're right (abbreviated)",
        examples: [
            {
                chinglish: "NSDD but...",
                chinese: "你说得对，但是...",
                meaning: "You're right, but..."
            },
            {
                chinglish: "This time NSDD",
                chinese: "这次你说得对",
                meaning: "You're right this time"
            }
        ]
    },
    "wdnmd": {
        chinese: "我的天呐",
        pinyin: "wǒ de tiān na",
        meaning: "OMG (polite version)",
        examples: [
            {
                chinglish: "WDNMD what happened",
                chinese: "我的天呐发生什么了",
                meaning: "OMG what happened"
            },
            {
                chinglish: "WDNMD so expensive",
                chinese: "我的天呐太贵了",
                meaning: "OMG it's so expensive"
            }
        ]
    },
    "rnm": {
        chinese: "任你们",
        pinyin: "rèn nǐ men",
        meaning: "Up to you all (polite version)",
        examples: [
            {
                chinglish: "RNM decide",
                chinese: "任你们决定",
                meaning: "It's up to you all to decide"
            },
            {
                chinglish: "RNM choose",
                chinese: "任你们选择",
                meaning: "The choice is yours"
            }
        ]
    },
    // 网络流行语（新批次1）
    "cry faint": {
        chinese: "哭晕在厕所",
        pinyin: "kū yūn zài cè suǒ",
        meaning: "Cry until faint in the bathroom (Crying in despair)",
        examples: [
            {
                chinglish: "When I saw my exam score, I cry faint in bathroom",
                chinese: "看到考试成绩，我哭晕在厕所",
                meaning: "I was so devastated by my exam score"
            },
            {
                chinglish: "The ending made me cry faint in bathroom",
                chinese: "这个结局让我哭晕在厕所",
                meaning: "The ending was so sad it made me cry in despair"
            }
        ]
    },
    "cloud pet": {
        chinese: "云养猫/狗",
        pinyin: "yún yǎng māo/gǒu",
        meaning: "Cloud petting (Virtual pet raising)",
        examples: [
            {
                chinglish: "I'm cloud petting five cats now",
                chinese: "我现在在云养五只猫",
                meaning: "I'm virtually taking care of five cats"
            },
            {
                chinglish: "Cloud petting is cheaper than real pets",
                chinese: "云养宠物比养真的便宜",
                meaning: "Virtual pet raising is cheaper than having real pets"
            }
        ]
    },
    "awkward talk": {
        chinese: "尬聊",
        pinyin: "gà liáo",
        meaning: "Awkward talk (Cringe conversation)",
        examples: [
            {
                chinglish: "Stop the awkward talk please",
                chinese: "别尬聊了",
                meaning: "Please stop this awkward conversation"
            },
            {
                chinglish: "We had an awkward talk for 10 minutes",
                chinese: "我们尬聊了十分钟",
                meaning: "We had a cringeworthy conversation for 10 minutes"
            }
        ]
    },
    "self black": {
        chinese: "自黑",
        pinyin: "zì hēi",
        meaning: "Self-blackening (Self-deprecation)",
        examples: [
            {
                chinglish: "I like self black to make others laugh",
                chinese: "我喜欢自黑逗别人笑",
                meaning: "I like to make self-deprecating jokes to make others laugh"
            },
            {
                chinglish: "His self black is so funny",
                chinese: "他的自黑太搞笑了",
                meaning: "His self-deprecating humor is hilarious"
            }
        ]
    },
    "inhumane": {
        chinese: "惨无人道",
        pinyin: "cǎn wú rén dào",
        meaning: "Inhumane (Absolutely brutal)",
        examples: [
            {
                chinglish: "This exam is so inhumane",
                chinese: "这个考试太惨无人道了",
                meaning: "This exam is brutally difficult"
            },
            {
                chinglish: "The price is inhumane",
                chinese: "这个价格惨无人道",
                meaning: "The price is absolutely brutal"
            }
        ]
    },
    // 网络流行语（新批次2）
    "hardcore fan": {
        chinese: "硬核粉",
        pinyin: "yìng hé fěn",
        meaning: "Hardcore fan (Die-hard fan)",
        examples: [
            {
                chinglish: "I'm a hardcore fan of this band",
                chinese: "我是这个乐队的硬核粉",
                meaning: "I'm a die-hard fan of this band"
            },
            {
                chinglish: "Only hardcore fans understand this reference",
                chinese: "只有硬核粉才懂这个梗",
                meaning: "Only die-hard fans get this reference"
            }
        ]
    },
    "mind collapsed": {
        chinese: "心态崩了",
        pinyin: "xīn tài bēng le",
        meaning: "Mind collapsed (Mental breakdown)",
        examples: [
            {
                chinglish: "My mind collapsed after seeing the test",
                chinese: "看到考试题目后心态崩了",
                meaning: "I had a mental breakdown after seeing the test"
            },
            {
                chinglish: "Don't let your mind collapse",
                chinese: "别让心态崩了",
                meaning: "Don't let your mental state break down"
            }
        ]
    },
    "king return": {
        chinese: "王者归来",
        pinyin: "wáng zhě guī lái",
        meaning: "King is back (The king has returned)",
        examples: [
            {
                chinglish: "The king is back to the game",
                chinese: "王者归来游戏圈",
                meaning: "The champion has returned to gaming"
            },
            {
                chinglish: "After five years, the king is back",
                chinese: "五年之后，王者归来",
                meaning: "After five years, the master has returned"
            }
        ]
    },
    "fighting spirit": {
        chinese: "拼劲",
        pinyin: "pīn jìn",
        meaning: "Fighting spirit (Determination)",
        examples: [
            {
                chinglish: "Your fighting spirit moves me",
                chinese: "你的拼劲打动了我",
                meaning: "Your determination is inspiring"
            },
            {
                chinglish: "Show your fighting spirit",
                chinese: "展现你的拼劲",
                meaning: "Show your determination"
            }
        ]
    },
    "pick put": {
        chinese: "拿得起放得下",
        pinyin: "ná de qǐ fàng de xià",
        meaning: "Pick up, put down (Take it or leave it)",
        examples: [
            {
                chinglish: "You need to learn to pick up and put down",
                chinese: "你需要学会拿得起放得下",
                meaning: "You need to learn when to hold on and when to let go"
            },
            {
                chinglish: "He can't pick up and put down",
                chinese: "他拿不起放不下",
                meaning: "He can't let things go"
            }
        ]
    },
    // 游戏用语（新批次）
    "invincible": {
        chinese: "无敌",
        pinyin: "wú dí",
        meaning: "Invincible (Unstoppable)",
        examples: [
            {
                chinglish: "I got invincible buff",
                chinese: "我获得了无敌buff",
                meaning: "I got invincibility power-up"
            },
            {
                chinglish: "He's invincible in this game",
                chinese: "他在这个游戏里无敌了",
                meaning: "He's unstoppable in this game"
            }
        ]
    },
    "high end": {
        chinese: "高端局",
        pinyin: "gāo duān jú",
        meaning: "High-end match (Pro-level match)",
        examples: [
            {
                chinglish: "This is high end match",
                chinese: "这是高端局",
                meaning: "This is a professional-level match"
            },
            {
                chinglish: "I can't play high end match",
                chinese: "我打不了高端局",
                meaning: "I'm not good enough for pro-level matches"
            }
        ]
    },
    "card pause": {
        chinese: "卡顿",
        pinyin: "kǎ dùn",
        meaning: "Card pause (Lag)",
        examples: [
            {
                chinglish: "My game is card pause",
                chinese: "我的游戏卡顿",
                meaning: "My game is lagging"
            },
            {
                chinglish: "Too much card pause today",
                chinese: "今天太卡顿了",
                meaning: "There's too much lag today"
            }
        ]
    },
    "small monster": {
        chinese: "小怪",
        pinyin: "xiǎo guài",
        meaning: "Small monster (Minions)",
        examples: [
            {
                chinglish: "Farm small monsters first",
                chinese: "先刷小怪",
                meaning: "Clear the minions first"
            },
            {
                chinglish: "Too many small monsters here",
                chinese: "这里小怪太多了",
                meaning: "There are too many minions here"
            }
        ]
    },
    "wild area": {
        chinese: "野区",
        pinyin: "yě qū",
        meaning: "Wild area (Jungle)",
        examples: [
            {
                chinglish: "I'm going wild area",
                chinese: "我去野区",
                meaning: "I'm going to the jungle"
            },
            {
                chinglish: "Enemy in our wild area",
                chinese: "敌人在我们野区",
                meaning: "Enemy is in our jungle"
            }
        ]
    },
    // 最后一批词条
    "six six six": {
        chinese: "六六六",
        pinyin: "liù liù liù",
        meaning: "Awesome / Skilled",
        examples: [
            {
                chinglish: "666! Your play was amazing!",
                chinese: "666！你玩得太厉害了！",
                meaning: "Awesome! You played so well!"
            },
            {
                chinglish: "This move is 666",
                chinese: "这个操作666",
                meaning: "This move is incredible"
            }
        ]
    },
    "give call": {
        chinese: "打call",
        pinyin: "dǎ call",
        meaning: "Support / Cheer for",
        examples: [
            {
                chinglish: "I give call to you",
                chinese: "我给你打call",
                meaning: "I support you / I'm cheering for you"
            },
            {
                chinglish: "Fans are giving call",
                chinese: "粉丝们在打call",
                meaning: "Fans are showing their support"
            }
        ]
    },
    "eat melon": {
        chinese: "吃瓜",
        pinyin: "chī guā",
        meaning: "Watching the drama (Being a spectator)",
        examples: [
            {
                chinglish: "I'm just eating melon here",
                chinese: "我就是来吃瓜的",
                meaning: "I'm just here to watch the drama"
            },
            {
                chinglish: "Eating melon people have no rights to speak",
                chinese: "吃瓜群众没有发言权",
                meaning: "Spectators shouldn't comment"
            }
        ]
    },
    "play skin": {
        chinese: "皮一下",
        pinyin: "pí yī xià",
        meaning: "Messing around (Being playful)",
        examples: [
            {
                chinglish: "Just play skin, don't be serious",
                chinese: "就皮一下，别当真",
                meaning: "Just kidding around, don't take it seriously"
            },
            {
                chinglish: "He likes to play skin",
                chinese: "他喜欢皮一下",
                meaning: "He likes to joke around"
            }
        ]
    },
    "bring goods": {
        chinese: "带货",
        pinyin: "dài huò",
        meaning: "Product promotion (Influencer marketing)",
        examples: [
            {
                chinglish: "This streamer is bringing goods again",
                chinese: "这个主播又在带货了",
                meaning: "This streamer is promoting products again"
            },
            {
                chinglish: "She's good at bringing goods",
                chinese: "她很会带货",
                meaning: "She's good at product promotion"
            }
        ]
    },
    "bdjw": {
        chinese: "不懂就问",
        pinyin: "bù dǒng jiù wèn",
        meaning: "Just ask if you don't understand",
        examples: [
            {
                chinglish: "BDJW, how does this app work?",
                chinese: "不懂就问，这个应用怎么用？",
                meaning: "Just wondering, how does this app work?"
            },
            {
                chinglish: "BDJW, what's the meaning of this emoji?",
                chinese: "不懂就问，这个表情什么意思？",
                meaning: "Let me ask, what's the meaning of this emoji?"
            }
        ]
    },
    "u1s1": {
        chinese: "有一说一",
        pinyin: "yǒu yī shuō yī",
        meaning: "Honestly speaking / To be honest",
        examples: [
            {
                chinglish: "U1S1, this movie is really good!",
                chinese: "有一说一，这电影真的很好看！",
                meaning: "Honestly, this movie is really good!"
            },
            {
                chinglish: "U1S1, I don't like this design.",
                chinese: "有一说一，我不太喜欢这个设计。",
                meaning: "To be honest, I don't like this design."
            }
        ]
    },
    "srds": {
        chinese: "虽然但是",
        pinyin: "suīrán dànshì",
        meaning: "Nevertheless / However / Despite that",
        examples: [
            {
                chinglish: "SRDS, I still think we should try.",
                chinese: "虽然但是，我觉得我们还是应该试试。",
                meaning: "Nevertheless, I think we should still give it a try."
            },
            {
                chinglish: "The price is good, SRDS the quality is not.",
                chinese: "价格很好，虽然但是质量不行。",
                meaning: "The price is good, however the quality is not."
            }
        ]
    }
};
