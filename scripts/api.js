// api.js - Appels API Spotify

export async function fetchUserPlaylists(token) {
    const response = await fetch('https://api.spotify.com/v1/me/playlists', {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
    const data = await response.json();
    return data.items;
}
