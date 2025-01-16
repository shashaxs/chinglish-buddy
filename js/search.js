// 搜索功能实现
document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('search-input');
    const searchButton = document.getElementById('search-button');
    const searchResults = document.getElementById('search-results');
    const searchSuggestions = document.getElementById('search-suggestions');
    let selectedPhrase = null;
    let searchTimeout;

    // 将拼音转换为无声调的形式
    function normalizeString(str) {
        return str.toLowerCase()
            .normalize('NFD')
            .replace(/[\u0300-\u036f]/g, '')
            .replace(/\s+/g, '');
    }

    // 搜索词条的函数
    function searchPhrases(query) {
        if (!query) return [];
        
        const normalizedQuery = normalizeString(query);
        
        return allPhrases.filter(phrase => {
            const normalizedChinglish = normalizeString(phrase.chinglish);
            const normalizedChinese = normalizeString(phrase.chinese);
            const normalizedPinyin = normalizeString(phrase.pinyin);
            const normalizedEnglish = normalizeString(phrase.english);
            
            return normalizedChinglish.includes(normalizedQuery) ||
                   normalizedChinese.includes(normalizedQuery) ||
                   normalizedPinyin.includes(normalizedQuery) ||
                   normalizedEnglish.includes(normalizedQuery);
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
                <span class="suggestion-chinglish">${phrase.chinglish}</span>
                <span class="suggestion-chinese">${phrase.chinese}</span>
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
        selectedPhrase = allPhrases.find(phrase => phrase.chinglish === chinglish);
        
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
