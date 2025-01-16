// 搜索功能实现
document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('search-input');
    const searchButton = document.getElementById('search-button');
    const searchResults = document.getElementById('search-results');
    const searchSuggestions = document.getElementById('search-suggestions');
    let selectedPhrase = null;
    let searchTimeout;

    // 将所有词条整合到一个数组中
    const combinedPhrases = [
        ...allPhrases,
        ...Object.entries(dictionary).map(([key, value]) => ({
            chinglish: key,
            english: value.meaning,
            pinyin: value.pinyin,
            chinese: value.chinese,
            examples: value.examples || []
        }))
    ];

    // 将拼音转换为无声调的形式
    function normalizeString(str) {
        if (!str) return '';
        return str.toLowerCase()
            .normalize('NFD')
            .replace(/[\u0300-\u036f]/g, '')  // 移除声调
            .replace(/\s+/g, '');  // 移除空格
    }

    // 搜索词条的函数
    function searchPhrases(query) {
        if (!query) return [];
        
        const normalizedQuery = normalizeString(query);
        
        return combinedPhrases.filter(phrase => {
            // 准备所有可能的搜索字段
            const searchFields = [
                normalizeString(phrase.chinglish),      // 中式英语
                normalizeString(phrase.chinese),        // 中文
                normalizeString(phrase.pinyin),         // 拼音（无声调）
                normalizeString(phrase.english),        // 地道英语/含义
                phrase.pinyin.replace(/\s+/g, ''),      // 拼音（有声调，无空格）
                normalizeString(phrase.pinyin.replace(/\s+/g, '')),  // 拼音（无声调，无空格）
                phrase.chinglish.toLowerCase()          // 原始英文（处理缩写词如xswl）
            ];

            // 如果有例句，也加入搜索范围
            if (phrase.examples) {
                phrase.examples.forEach(example => {
                    searchFields.push(
                        normalizeString(example.chinglish),
                        normalizeString(example.chinese),
                        normalizeString(example.meaning)
                    );
                });
            }

            // 检查是否有任何字段包含搜索词
            return searchFields.some(field => field.includes(normalizedQuery));
        });
    }

    // 显示搜索建议
    function displaySuggestions(results) {
        if (!results.length) {
            searchSuggestions.classList.remove('active');
            return;
        }

        searchSuggestions.innerHTML = results.map(phrase => `
            <div class="suggestion-item" data-chinglish="${phrase.chinglish}">
                ${phrase.chinglish}
            </div>
        `).join('');

        searchSuggestions.classList.add('active');
    }

    // 显示选中词条的详细信息
    function displaySelectedPhrase(phrase) {
        if (!phrase) {
            searchResults.innerHTML = '';
            return;
        }

        const resultDiv = document.createElement('div');
        resultDiv.className = 'search-result';
        
        let examplesHtml = '';
        if (phrase.examples && phrase.examples.length > 0) {
            examplesHtml = '<div class="examples">' +
                phrase.examples.map(example => `
                    <div class="example">
                        <p class="chinglish">${example.chinglish}</p>
                        <p class="chinese">${example.chinese}</p>
                        <p class="meaning">${example.meaning}</p>
                    </div>
                `).join('') +
                '</div>';
        }

        resultDiv.innerHTML = `
            <h3 class="chinglish">${phrase.chinglish}</h3>
            <p class="english">${phrase.english}</p>
            <p class="pinyin">${phrase.pinyin}</p>
            <p class="chinese">${phrase.chinese}</p>
            ${examplesHtml}
        `;

        searchResults.innerHTML = '';
        searchResults.appendChild(resultDiv);
    }

    // 输入事件处理
    searchInput.addEventListener('input', () => {
        clearTimeout(searchTimeout);
        searchTimeout = setTimeout(() => {
            const query = searchInput.value.trim();
            if (!query) {
                searchSuggestions.classList.remove('active');
                searchResults.innerHTML = '';
                return;
            }
            const results = searchPhrases(query);
            displaySuggestions(results);
        }, 300);
    });

    // 点击建议项事件
    searchSuggestions.addEventListener('click', (e) => {
        const suggestionItem = e.target.closest('.suggestion-item');
        if (!suggestionItem) return;

        const chinglish = suggestionItem.dataset.chinglish;
        selectedPhrase = combinedPhrases.find(phrase => phrase.chinglish === chinglish);
        
        searchInput.value = selectedPhrase.chinglish;
        searchSuggestions.classList.remove('active');
        displaySelectedPhrase(selectedPhrase);
    });

    // 点击其他地方关闭建议列表
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.search-container')) {
            searchSuggestions.classList.remove('active');
        }
    });

    // 搜索按钮点击事件
    searchButton.addEventListener('click', () => {
        const query = searchInput.value.trim();
        if (!query) return;

        if (selectedPhrase) {
            displaySelectedPhrase(selectedPhrase);
        } else {
            const results = searchPhrases(query);
            if (results.length > 0) {
                selectedPhrase = results[0];
                displaySelectedPhrase(selectedPhrase);
            }
        }
        searchSuggestions.classList.remove('active');
    });
});
