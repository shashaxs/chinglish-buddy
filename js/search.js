// 搜索功能增强
document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('search-input');
    const searchButton = document.getElementById('search-button');
    const searchResults = document.getElementById('search-results');
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
        if (!query) {
            searchResults.innerHTML = '';
            return [];
        }
        
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

    // 显示搜索结果
    function displaySearchResults(results) {
        searchResults.innerHTML = '';
        if (results.length === 0) {
            searchResults.innerHTML = '<p>未找到相关词条 / No results found</p>';
            return;
        }

        results.forEach(result => {
            const resultDiv = document.createElement('div');
            resultDiv.className = 'search-result';
            
            let examplesHtml = '';
            if (result.examples && result.examples.length > 0) {
                examplesHtml = '<div class="examples">' +
                    result.examples.map(example => `
                        <div class="example">
                            <p class="chinglish">${example.chinglish}</p>
                            <p class="chinese">${example.chinese}</p>
                            <p class="meaning">${example.meaning}</p>
                        </div>
                    `).join('') +
                    '</div>';
            }

            resultDiv.innerHTML = `
                <h3 class="chinglish">${result.chinglish || ''}</h3>
                <p class="english">${result.english || result.meaning || ''}</p>
                <p class="pinyin">${result.pinyin || ''}</p>
                <p class="chinese">${result.chinese || ''}</p>
                ${examplesHtml}
            `;
            searchResults.appendChild(resultDiv);
        });
    }

    // 执行搜索
    function performSearch() {
        const query = searchInput.value.trim();
        
        if (!query) {
            searchResults.innerHTML = '';
            return;
        }

        const results = searchPhrases(query);
        displaySearchResults(results);
    }

    // 输入事件监听
    searchInput.addEventListener('input', () => {
        clearTimeout(searchTimeout);
        searchTimeout = setTimeout(performSearch, 300);
    });

    // 搜索按钮点击事件
    searchButton.addEventListener('click', performSearch);

    // 回车键搜索
    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            performSearch();
        }
    });

    // 初始化时清空搜索结果
    searchResults.innerHTML = '';
});
