// Fisher-Yates 洗牌算法
function shuffleArray(array) {
    console.log('开始洗牌，原始数组：', array);
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    console.log('洗牌后数组：', array);
    return array;
}

// 从数组中随机选择指定数量的元素
function getRandomPhrases(array, count) {
    console.log('获取随机词条，原始数组长度：', array.length);
    // 创建数组副本
    const arrayCopy = [...array];
    // 打乱数组
    shuffleArray(arrayCopy);
    // 返回前count个元素
    const result = arrayCopy.slice(0, count);
    console.log('选择的词条：', result);
    return result;
}

// 创建单个词条卡片的HTML
function createPhraseCard(phrase) {
    return `
        <div class="phrase-card">
            <h3>${phrase.chinglish}</h3>
            <p class="english">${phrase.english}</p>
            <p class="pinyin">${phrase.pinyin}</p>
            <p class="chinese">${phrase.chinese}</p>
        </div>
    `;
}

// 初始化热门词条显示
function initializePopularPhrases() {
    console.log('初始化热门词条');
    const phrasesGrid = document.querySelector('.phrases-grid');
    if (!phrasesGrid) {
        console.error('未找到 phrases-grid 元素');
        return;
    }

    // 检查 allPhrases 是否存在
    if (typeof allPhrases === 'undefined') {
        console.error('allPhrases 未定义，请检查 phrases.js 是否正确加载');
        return;
    }

    console.log('可用词条总数：', allPhrases.length);

    // 随机选择8个词条
    const selectedPhrases = getRandomPhrases(allPhrases, 8);
    
    // 生成HTML并插入页面
    const cardsHTML = selectedPhrases.map(createPhraseCard).join('');
    phrasesGrid.innerHTML = cardsHTML;
    
    console.log('词条渲染完成');
}

// 确保在所有脚本加载完成后再初始化
window.addEventListener('load', () => {
    console.log('页面完全加载完成，开始初始化');
    initializePopularPhrases();
});
