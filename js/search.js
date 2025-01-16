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
        if (!query) return [];
        
        const normalizedQuery = normalizeString(query);
        console.log('Searching for:', normalizedQuery); // 调试日志
        
        return allPhrases.filter(phrase => {
            // 准备所有可能的搜索字段
            const searchFields = {
                chinese: phrase.chinese,
                chinglish: phrase.chinglish.toLowerCase(),
                english: phrase.english.toLowerCase(),
                pinyin: phrase.pinyin.toLowerCase(),
                normalizedPinyin: normalizeString(phrase.pinyin),
                pinyinNoSpace: normalizeString(phrase.pinyin.replace(/\s+/g, ''))
            };
            
            console.log('Checking phrase:', phrase.chinese, searchFields.normalizedPinyin); // 调试日志
            
            // 检查所有字段
            return Object.values(searchFields).some(field => {
                const includes = field.includes(normalizedQuery);
                if (includes) {
                    console.log('Match found in:', field); // 调试日志
                }
                return includes;
            });
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
        console.log('Performing search for:', query); // 调试日志
        
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
