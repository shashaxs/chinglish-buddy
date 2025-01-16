// 收藏功能实现
document.addEventListener('DOMContentLoaded', () => {
    const favoritesList = document.getElementById('favorites-list');
    const exportButton = document.getElementById('export-favorites');

    // 从localStorage获取收藏列表
    function getFavorites() {
        return JSON.parse(localStorage.getItem('favorites') || '[]');
    }

    // 保存收藏列表到localStorage
    function saveFavorites(favorites) {
        localStorage.setItem('favorites', JSON.stringify(favorites));
    }

    // 显示收藏列表
    function displayFavorites() {
        const favorites = getFavorites();
        favoritesList.innerHTML = '';

        if (favorites.length === 0) {
            favoritesList.innerHTML = `
                <div class="no-favorites">
                    <p>No favorites yet. Start adding some!</p>
                </div>
            `;
            return;
        }

        favorites.forEach(phrase => {
            const entry = dictionary[phrase];
            if (entry) {
                const div = document.createElement('div');
                div.className = 'favorite-item';
                div.innerHTML = `
                    <div class="favorite-content">
                        <h3>${phrase}</h3>
                        <p>${entry.chinese}</p>
                        <p><small>${entry.meaning}</small></p>
                    </div>
                    <button class="remove-favorite" onclick="removeFavorite('${phrase}')">
                        ❌
                    </button>
                `;
                favoritesList.appendChild(div);
            }
        });
    }

    // 添加到收藏
    window.toggleFavorite = function(phrase) {
        let favorites = getFavorites();
        const index = favorites.indexOf(phrase);
        const button = document.querySelector('.favorite-button');

        if (index === -1) {
            // 添加到收藏
            favorites.push(phrase);
            button.innerHTML = '❤️ Remove from Favorites';
        } else {
            // 从收藏中移除
            favorites.splice(index, 1);
            button.innerHTML = '🤍 Add to Favorites';
        }

        saveFavorites(favorites);
        displayFavorites();
    };

    // 从收藏中移除
    window.removeFavorite = function(phrase) {
        let favorites = getFavorites();
        favorites = favorites.filter(item => item !== phrase);
        saveFavorites(favorites);
        displayFavorites();
    };

    // 导出收藏列表
    exportButton.addEventListener('click', () => {
        const favorites = getFavorites();
        let exportText = "My Chinglish Favorites\n\n";

        favorites.forEach(phrase => {
            const entry = dictionary[phrase];
            if (entry) {
                exportText += `${phrase}\n`;
                exportText += `Chinese: ${entry.chinese}\n`;
                exportText += `Pinyin: ${entry.pinyin}\n`;
                exportText += `Meaning: ${entry.meaning}\n\n`;
            }
        });

        // 创建下载链接
        const blob = new Blob([exportText], { type: 'text/plain' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'my-chinglish-favorites.txt';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    });
});
