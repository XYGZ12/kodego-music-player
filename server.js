const express = require('express');
const app = express();
const path = require('path');

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'html/index.html'));
});

const songData = {
    artist: 'Taylor Swift',
    name: 'All Too Well - Taylor\'s Version',
    lyrics: `
    [Verse 1]
I walked through the door with you, the air was cold
But something 'bout it felt like home somehow
And I left my scarf there at your sister's house
And you've still got it in your drawer, even now

[Verse 2]
Oh, your sweet disposition and my wide-eyed gaze
We're singing in the car, getting lost upstate
Autumn leaves falling down like pieces into place
And I can picture it after all these days

[Pre-Chorus]
And I know it's long gone and
That magic's not here no more
And I might be okay, but I'm not fine at all
Oh, oh, oh

[Chorus]
'Cause there we are again on that little town street
You almost ran the red 'cause you were lookin' over at me
Wind in my hair, I was there
I remember it all too well

[Verse 3]
Photo album on the counter, your cheeks were turning red
You used to be a little kid with glasses in a twin-sized bed
And your mother's telling stories 'bout you on the tee-ball team
You told me 'bout your past, thinking your future was me
And you were tossing me the car keys, "Fuck the patriarchy"
Key chain on the ground, we were always skipping town
And I was thinking on the drive down, any time now
He's gonna say it's love, you never called it what it was
'Til we were dead and gone and buried
Check the pulse and come back swearing it's the same
After three months in the grave
And then you wondered where it went to as I reached for you
But all I felt was shame and you held my lifeless frame

[Pre-Chorus]
And I know it's long gone and
There was nothing else I could do
And I forget about you long enough
To forget why I needed to

[Chorus]
'Cause there we are again in the middle of the night
We're dancing 'round the kitchen in the refrigerator light
Down the stairs, I was there
I remember it all too well
And there we are again when nobody had to know
You kept me like a secret, but I kept you like an oath
Sacred prayer and we'd swear
To remember it all too well, yeah

[Bridge]
Well, maybe we got lost in translation
Maybe I asked for too much
But maybe this thing was a masterpiece
'Til you tore it all up
Running scared, I was there
I remember it all too well
And you call me up again just to break me like a promise
So casually cruel in the name of being honest
I'm a crumpled up piece of paper lying here
'Cause I remember it all, all, all

[Verse 4]
They say all's well that ends well, but I'm in a new Hell
Every time you double-cross my mind
You said if we had been closer in age maybe it would have been fine
And that made me want to die
The idea you had of me, who was she?
A never-needy, ever-lovely jewel whose shine reflects on you
Not weeping in a party bathroom
Some actress asking me what happened, you
That's what happened, you
You who charmed my dad with self-effacing jokes
Sipping coffee like you're on a late-night show
But then he watched me watch the front door all night, willing you to come
And he said, "It's supposed to be fun turning twenty-one"

[Verse 5]
Time won't fly, it's like I'm paralyzed by it
I'd like to be my old self again, but I'm still trying to find it
After plaid shirt days and nights when you made me your own
Now you mail back my things and I walk home alone
But you keep my old scarf from that very first week
'Cause it reminds you of innocence and it smells like me
You can't get rid of it
'Cause you remember it all too well, yeah

[Chorus]
'Cause there we are again when I loved you so
Back before you lost the one real thing you've ever known
It was rare, I was there
I remember it all too well
Wind in my hair, you were there
You remember it all
Down the stairs, you were there
You remember it all
It was rare, I was there
I remember it all too well

[Verse 6]
And I was never good at telling jokes, but the punch line goes
"I'll get older, but your lovers stay my age"
From when your Brooklyn broke my skin and bones
I'm a soldier who's returning half her weight
And did the twin flame bruise paint you blue?
Just between us, did the love affair maim you, too?
'Cause in this city's barren cold
I still remember the first fall of snow
And how it glistened as it fell
I remember it all too well

[Outro]
Just between us, did the love affair maim you all too well?
Just between us, do you remember it all too well?
Just between us, I remember it (Just between us), all too well
Wind in my hair, I was there, I was there
Down the stairs, I was there, I was there
Sacred prayer, I was there, I was there
It was rare, you remember it all too well
Wind in my hair, I was there, I was there
Down the stairs, I was there, I was there
Sacred prayer, I was there, I was there
It was rare, you remember it
Wind in my hair, I was there, I was there
Down the stairs, I was there, I was there
Sacred prayer, I was there, I was there
It was rare, you remember it
Wind in my hair, I was there, I was there
Down the stairs, I was there, I was there
Sacred prayer, I was there, I was there
It was rare, you remember it all too well

[Spoken Outro]
I love you guys so much
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
        title: '1989',
        artist: 'Artist 1',
        releaseYear: 2022,
        imageUrl: 'https://kodego-music-player.onrender.com/images/album-images/1989-ts-album1.jpg', // Adjust the path as needed
        website: 'https://open.spotify.com/album/5fy0X0JmZRZnVa2UEicIOl' // Add the external website link
    },
    {
        id: 2,
        title: 'Folklore',
        artist: 'Artist 2',
        releaseYear: 2021,
        imageUrl: 'https://kodego-music-player.onrender.com/images/album-images/folklore-ts-album2.jpg', // Adjust the path as needed
        website: 'https://open.spotify.com/album/2fenSS68JI1h4Fo296JfGr' // Add the external website link
    },
    {
        id: 3,
        title: 'Fearless - Taylor\'s Version',
        artist: 'Artist 3',
        releaseYear: 2020,
        imageUrl: 'https://kodego-music-player.onrender.com/images/album-images/fearless-ts-version-album3.jpg', // Adjust the path as needed
        website: 'https://open.spotify.com/album/4hDok0OAJd57SGIT8xuWJH' // Add the external website link
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
