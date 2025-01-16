// 主要功能实现
document.addEventListener('DOMContentLoaded', () => {
    // 获取DOM元素
    const searchInput = document.getElementById('search-input');
    const searchButton = document.getElementById('search-button');
    const searchResults = document.getElementById('search-results');
    const favoritesButton = document.getElementById('show-favorites');
    const favoritesModal = document.getElementById('favorites-modal');
    const closeModalButton = document.getElementById('close-modal');
    const submitPhraseLink = document.getElementById('submit-phrase');
    const resultContainer = document.getElementById('result-container');

    // 注册VoiceRSS API密钥
    const VOICE_RSS_KEY = '8c2f3c4781404133b570c58e2368eb72';  // 这是一个示例密钥，需要替换为您自己的

    // 创建音频播放器
    async function createAudioPlayer(text, lang = 'zh-cn') {
        try {
            const response = await fetch('/tts', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    text: text,
                    lang: lang
                })
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const audioBlob = await response.blob();
            const audio = new Audio(URL.createObjectURL(audioBlob));
            return audio;
        } catch (error) {
            console.error('Error creating audio:', error);
            throw error;
        }
    }

    // 音频播放函数
    async function playAudio(text) {
        const playButton = document.querySelector('.play-button');
        if (playButton) {
            playButton.innerHTML = '🔄 Loading...';
            playButton.disabled = true;
        }

        try {
            const audio = await createAudioPlayer(text);
            
            audio.oncanplay = function() {
                if (playButton) {
                    playButton.innerHTML = '🔊 Listen';
                    playButton.disabled = false;
                }
                audio.play();
            };

            audio.onended = function() {
                if (playButton) {
                    playButton.innerHTML = '🔊 Listen';
                    playButton.disabled = false;
                }
            };

            audio.onerror = function() {
                console.error('Audio playback failed');
                if (playButton) {
                    playButton.innerHTML = '🔊 Listen';
                    playButton.disabled = false;
                }
                alert('Sorry, the pronunciation is not available at the moment. Please try again later.');
            };
        } catch (error) {
            console.error('Error playing audio:', error);
            if (playButton) {
                playButton.innerHTML = '🔊 Listen';
                playButton.disabled = false;
            }
            alert('Sorry, the pronunciation is not available at the moment. Please try again later.');
        }
    }

    // 搜索功能
    function performSearch() {
        const query = searchInput.value.toLowerCase().trim();
        const resultCard = searchResults.querySelector('.result-card');
        resultCard.classList.remove('hidden');
        
        // 遍历词典中的所有条目
        let found = false;
        for (let key in dictionary) {
            const item = dictionary[key];
            // 检查所有可能的匹配项
            if (key.toLowerCase().includes(query) ||
                item.chinese.toLowerCase().includes(query) ||
                item.pinyin.toLowerCase().includes(query) ||
                item.meaning.toLowerCase().includes(query)) {
                displaySearchResult(item, key);
                found = true;
                break;
            }
        }

        if (!found) {
            showNoResults();
        }
    }

    // 显示搜索结果
    function displaySearchResult(result, query) {
        const resultCard = searchResults.querySelector('.result-card');
        resultCard.innerHTML = `
            <div class="result-header">
                <h2>${query}</h2>
                <button class="favorite-button" onclick="toggleFavorite('${query}')">
                    ❤️ Add to Favorites
                </button>
            </div>
            <div class="result-content">
                <div class="chinese-text">
                    <h3>中文</h3>
                    <p>${result.chinese}</p>
                </div>
                <div class="pinyin">
                    <h3>拼音</h3>
                    <p>${result.pinyin}</p>
                </div>
                <div class="meaning">
                    <h3>English Meaning</h3>
                    <p>${result.meaning}</p>
                </div>
                <div class="examples">
                    <h3>Examples</h3>
                    ${result.examples.map(example => `
                        <div class="example">
                            <p><strong>English:</strong> ${example.chinglish}</p>
                            <p><strong>中文:</strong> ${example.chinese}</p>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
    }

    // 显示无结果提示
    function showNoResults() {
        const resultCard = searchResults.querySelector('.result-card');
        resultCard.innerHTML = `
            <div class="no-results">
                <h2>No results found</h2>
                <p>Try another Chinglish expression or check your spelling.</p>
                <div class="suggestions">
                    <h3>Popular expressions you can try:</h3>
                    <ul>
                        ${Object.keys(dictionary).slice(0, 5).map(key => `
                            <li><a href="#" onclick="document.getElementById('search-input').value='${key}'; performSearch(); return false;">${key}</a></li>
                        `).join('')}
                    </ul>
                </div>
            </div>
        `;
    }

    // 事件监听器
    searchButton.addEventListener('click', performSearch);
    searchInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            performSearch();
        }
    });

    // 收藏夹功能
    favoritesButton.addEventListener('click', () => {
        favoritesModal.classList.remove('hidden');
        displayFavorites();
    });

    closeModalButton.addEventListener('click', () => {
        favoritesModal.classList.add('hidden');
    });

    // 提交新词条
    submitPhraseLink.addEventListener('click', (e) => {
        e.preventDefault();
        alert('This feature is coming soon! Stay tuned!');
    });

    // 将 performSearch 函数暴露给全局作用域
    window.performSearch = performSearch;
});
