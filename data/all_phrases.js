// 所有中式英语词条数据
const allPhrases = [
    // 网络用语和缩写
    {
        chinglish: "xswl",
        english: "LOL (Laugh Out Loud)",
        pinyin: "xiào sǐ wǒ le",
        chinese: "笑死我了",
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
    {
        chinglish: "yyds",
        english: "GOAT (Greatest Of All Time)",
        pinyin: "yōng yuǎn de shén",
        chinese: "永远的神",
        examples: [
            {
                chinglish: "This player is YYDS!",
                chinese: "这个选手是永远的神！",
                meaning: "This player is the greatest of all time!"
            },
            {
                chinglish: "The classic movie is YYDS!",
                chinese: "这部经典电影是永远的神！",
                meaning: "This classic movie is timeless!"
            }
        ]
    },
    {
        chinglish: "3Q",
        english: "Thank you",
        pinyin: "sān Q",
        chinese: "谢谢",
        examples: [
            {
                chinglish: "3Q for your help!",
                chinese: "谢谢你的帮助！",
                meaning: "Thank you for your help!"
            },
            {
                chinglish: "3Q very much!",
                chinese: "非常感谢！",
                meaning: "Thank you very much!"
            }
        ]
    },
    {
        chinglish: "siha",
        english: "See you / Bye",
        pinyin: "sī hā",
        chinese: "撕哈/斯哈",
        examples: [
            {
                chinglish: "Siha, see you tomorrow!",
                chinese: "撕哈，明天见！",
                meaning: "Bye, see you tomorrow!"
            },
            {
                chinglish: "Time to go, siha!",
                chinese: "该走了，撕哈！",
                meaning: "Time to go, bye!"
            }
        ]
    },
    {
        chinglish: "nsdd",
        english: "You're right",
        pinyin: "nǐ shuō de duì",
        chinese: "你说得对",
        examples: [
            {
                chinglish: "NSDD, I agree with you.",
                chinese: "你说得对，我同意你的观点。",
                meaning: "You're right, I agree with you."
            },
            {
                chinglish: "NSDD, we should do it this way.",
                chinese: "你说得对，我们应该这样做。",
                meaning: "You're right, we should do it this way."
            }
        ]
    },
    {
        chinglish: "awsl",
        english: "OMG I'm dead (from cuteness)",
        pinyin: "a wǒ sǐ le",
        chinese: "啊我死了",
        examples: [
            {
                chinglish: "This puppy is so cute, AWSL!",
                chinese: "这只小狗太可爱了，啊我死了！",
                meaning: "This puppy is so cute, I can't handle it!"
            },
            {
                chinglish: "Looking at these baby photos, AWSL!",
                chinese: "看着这些婴儿照片，啊我死了！",
                meaning: "These baby photos are so cute, I'm dying!"
            }
        ]
    },
    // 常用中式英语
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
        chinglish: "People mountain people sea",
        english: "A huge crowd of people",
        pinyin: "Rén shān rén hǎi",
        chinese: "人山人海",
        examples: [
            {
                chinglish: "The concert was people mountain people sea!",
                chinese: "演唱会真是人山人海！",
                meaning: "The concert was extremely crowded!"
            },
            {
                chinglish: "During the festival, the street was people mountain people sea.",
                chinese: "节日期间，街上人山人海。",
                meaning: "During the festival, the street was packed with people."
            }
        ]
    },
    {
        chinglish: "No horse no tiger",
        english: "Not very impressive",
        pinyin: "Mǎ mǎ hǔ hǔ",
        chinese: "马马虎虎",
        examples: [
            {
                chinglish: "His performance was no horse no tiger.",
                chinese: "他的表现马马虎虎。",
                meaning: "His performance was just so-so."
            },
            {
                chinglish: "The food here is no horse no tiger.",
                chinese: "这里的食物马马虎虎。",
                meaning: "The food here is mediocre."
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
            },
            {
                chinglish: "Just wait, I'll give you color see see!",
                chinese: "等着，我要给你点颜色看看！",
                meaning: "Just wait, I'll show you what I'm capable of!"
            }
        ]
    },
    {
        chinglish: "Add oil",
        english: "Keep going! / You can do it!",
        pinyin: "Jiā yóu",
        chinese: "加油",
        examples: [
            {
                chinglish: "Add oil for your exam!",
                chinese: "考试加油！",
                meaning: "Good luck with your exam!"
            },
            {
                chinglish: "Don't give up, add oil!",
                chinese: "别放弃，加油！",
                meaning: "Don't give up, you can do it!"
            }
        ]
    }
    // 继续添加其他词条...
];
