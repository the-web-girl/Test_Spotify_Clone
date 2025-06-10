// player.js - Mini player preview

export function renderPlayer(track) {
    const player = document.getElementById('player');
    player.innerHTML = `
        <strong>${track.name}</strong> - ${track.artist} <br />
        <audio controls src="${track.preview_url}"></audio>
    `;
}
