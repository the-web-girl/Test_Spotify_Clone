// homeView.js - Vue Accueil

export function renderHomeView(token) {
    const app = document.getElementById('app');
    app.innerHTML = '<h1>Accueil</h1>';

    const playlists = token ? [] : [
        { name: 'Playlist Chill', artist: 'Divers', preview_url: 'https://p.scdn.co/mp3-preview/sample.mp3' },
        { name: 'Hits 2024', artist: 'Divers', preview_url: 'https://p.scdn.co/mp3-preview/sample.mp3' },
        { name: 'Focus Coding', artist: 'Divers', preview_url: 'https://p.scdn.co/mp3-preview/sample.mp3' }
    ];

    playlists.forEach(playlist => {
        const div = document.createElement('div');
        div.innerHTML = `
            <h3>${playlist.name}</h3>
            <button>Play Preview</button>
        `;
        div.querySelector('button').addEventListener('click', () => {
            import('../player.js').then(module => {
                module.renderPlayer(playlist);
            });
        });
        app.appendChild(div);
    });
}
