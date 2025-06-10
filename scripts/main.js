// main.js - Initialisation

import { getAuthUrl, getTokenFromUrl } from './auth.js';
import { navigate } from './router.js';
import { renderHomeView } from './views/homeView.js';
import { renderSearchView } from './views/searchView.js';
import { renderLibraryView } from './views/libraryView.js';

let token;

window.addEventListener('DOMContentLoaded', () => {
    const hashParams = getTokenFromUrl();
    token = hashParams.access_token;
    window.history.pushState({}, document.title, '/'); // clean URL

    updateAuthStatus();

    document.getElementById('login-btn').addEventListener('click', () => {
        window.location.href = getAuthUrl();
    });

    document.getElementById('link-home').addEventListener('click', () => navigate(() => renderHomeView(token)));
    document.getElementById('link-search').addEventListener('click', () => navigate(() => renderSearchView(token)));
    document.getElementById('link-library').addEventListener('click', () => navigate(() => renderLibraryView(token)));

    navigate(() => renderHomeView(token));
});

function updateAuthStatus() {
    const status = document.getElementById('auth-status');
    if (token) {
        status.textContent = 'Connecté à Spotify';
    } else {
        status.textContent = 'Mode démo';
    }
}
