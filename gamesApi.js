import { API_BASE } from "./config.js";

// Fetch and display games
async function loadGames() {
    try {
        const res = await fetch(API_BASE);
        const games = await res.json();

        renderGameCards(games);

    } catch (error) {
        console.error("GAME FETCH ERROR:", error);
    }
}

// Render cards into HTML
function renderGameCards(games) {
    const container = document.getElementById("gamesContainer");

    container.innerHTML = games.map(game => `
        <div class="game-card" onclick="openGame('${game.page}')">
            <div class="game-thumb">
                <img src="${game.thumbnail}" alt="${game.title}">
            </div>

            <h3 class="game-title">${game.title}</h3>

            <button class="play-btn">PLAY NOW</button>
        </div>
    `).join("");
}

// Open game page
window.openGame = function(url){
    window.location.href = url;
};

// Load games when file loads
loadGames();
