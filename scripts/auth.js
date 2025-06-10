// auth.js - Gestion OAuth Spotify

const client_id = 'd2924f24fbbf40d5ab32f6988294d930'; // À remplacer
const redirect_uri = 'http://localhost:5500/';
const scopes = 'user-read-private user-read-email playlist-read-private';

export function getAuthUrl() {
    const params = new URLSearchParams({
        client_id,
        response_type: 'token',
        redirect_uri,
        scope: scopes
    });
    return `https://accounts.spotify.com/authorize?${params.toString()}`;
}

export function getTokenFromUrl() {
    return window.location.hash
        .substring(1)
        .split('&')
        .reduce((acc, item) => {
            const [key, value] = item.split('=');
            acc[key] = decodeURIComponent(value);
            return acc;
        }, {});
}
