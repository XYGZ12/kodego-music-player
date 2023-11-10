const express = require('express');
const app = express();
const path = require('path');

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'html/index.html'));
});

const songData = {
    artist: 'TS',
    name: 'ATW',
    lyrics: `
    temp lyrics
    `
};

app.get('/api/lyrics/:artist/:song', (req, res) => {
    const requestedArtist = req.params.artist;
    const requestedSong = req.params.song;

    if (requestedArtist === songData.artist && requestedSong === songData.name) {
        res.json({ artist: songData.artist, song: songData.name, lyrics: songData.lyrics });
    } else {
        res.status(404).json({ error: 'Lyrics not found' });
    }
});

// Other Albums

const albums = [
    {
        id: 1,
        title: 'Album 1',
        artist: 'Artist 1',
        releaseYear: 2022,
        imageUrl: 'https://kodego-music-player.onrender.com/images/album-images/1989-ts-album1.jpg', // Adjust the path as needed
        website: 'https://open.spotify.com/album/5fy0X0JmZRZnVa2UEicIOl' // Add the external website link
    },
    {
        id: 2,
        title: 'Album 2',
        artist: 'Artist 2',
        releaseYear: 2021,
        imageUrl: 'https://kodego-music-player.onrender.com/images/album-images/folklore-ts-album2.jpg', // Adjust the path as needed
        website: 'https://www.example.com/album2' // Add the external website link
    },
    {
        id: 3,
        title: 'Album 3',
        artist: 'Artist 3',
        releaseYear: 2020,
        imageUrl: 'https://kodego-music-player.onrender.com/images/album-images/fearless-ts-version-album3.jpg', // Adjust the path as needed
        website: 'https://www.example.com/album3' // Add the external website link
    },
];

app.use('/album-images', express.static('album-images')); // Serve static images from the 'album-images' folder

app.get('/api/albums', (req, res) => {
    res.json(albums);
});

app.get('/api/albums/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const album = albums.find((a) => a.id === id);

    if (album) {
        res.json(album);
    } else {
        res.status(404).send('Album not found.');
    }
});

app.get('/api/related-artists', (req, res) => {
    const relatedArtists = [
        {
            name: 'Related Artist 1',
            imageUrl: 'https://kodego-music-player.onrender.com/images/related-artists/r-artist1-ariana-grande.jpg', // Adjust the path as needed
            website: 'https://www.example.com/related-artist1' // Add the external website link
        },
        {
            name: 'Related Artist 2',
            imageUrl: 'https://kodego-music-player.onrender.com/images/related-artists/r-artist2-ed-sheeran.jpg', // Adjust the path as needed
            website: 'https://www.example.com/related-artist2' // Add the external website link
        },
        {
            name: 'Related Artist 3',
            imageUrl: 'https://kodego-music-player.onrender.com/images/related-artists/r-artist3-katy-perry.jpg', // Adjust the path as needed
            website: 'https://www.example.com/related-artist3' // Add the external website link
        },
    ];

    res.json(relatedArtists);
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
