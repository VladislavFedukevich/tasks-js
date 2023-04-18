const nextSong = document.querySelector(".next");
const prevSong = document.querySelector(".prev");
const playStop = document.querySelector(".play");
const audio = document.querySelector("audio");
const name = document.querySelector('.name-song');
const author = document.querySelector('.author');
const image = document.querySelector('.image');

const playlist = [{
        image: './assets/img1.jpg',
        author: 'Metro Boomin',
        name: 'first',
        path: './tracks/Metro Boomin - Trance (Feat. Travis Scott & Young Thug).mp3',
    },
    {
        image: './assets/img2.jpg',
        author: 'The Creator',
        name: 'second',
        path: './tracks/Tyler, The Creator - DOGTOOTH.mp3'
    },
    {
        image: './assets/img3.jpg',
        author: 'Скриптонит',
        name: 'third',
        path: './tracks/Скриптонит - Трата времени.mp3'
    }
];

let currentIndexSong = 0;
let flag = true;

playStop.addEventListener("click", () => {
    audio.src = playlist[currentIndexSong].path;

    if (flag) {
        audio.play();
        flag = false;
        playStop.textContent = "STOP";
        name.innerHTML = playlist[currentIndexSong].name;
        author.innerHTML = playlist[currentIndexSong].author;
        image.style = `background-image: url(${playlist[currentIndexSong].image});
            width: 300px;
            height: 300px;
            background-size: contain;
        `;
    } else {
        audio.pause();
        flag = true;
        playStop.textContent = "PLAY";
        name.innerHTML = playlist[currentIndexSong].name;
        author.innerHTML = playlist[currentIndexSong].author;
        image.style = `background-image: url(${playlist[currentIndexSong].image});
            width: 300px;
            height: 300px;
            background-size: contain;
        `;
    }
});

nextSong.addEventListener("click", () => {
    if (currentIndexSong == playlist.length - 1) return;
    currentIndexSong++;
    audio.src = playlist[currentIndexSong].path;
    audio.play();
    flag = true;
    playStop.textContent = 'STOP';
    name.innerHTML = playlist[currentIndexSong].name;
    author.innerHTML = playlist[currentIndexSong].author;
    image.style = `background-image: url(${playlist[currentIndexSong].image});
        width: 300px;
        height: 300px;
        background-size: contain;
    `;
});

prevSong.addEventListener('click', () => {
    if (currentIndexSong == 0) return;
    currentIndexSong--;
    audio.src = playlist[currentIndexSong].path;
    audio.play();
    flag = true;
    playStop.textContent = 'STOP';
    name.innerHTML = playlist[currentIndexSong].name;
    author.innerHTML = playlist[currentIndexSong].author;
    image.style = `background-image: url(${playlist[currentIndexSong].image});
        width: 300px;
        height: 300px;
        background-size: contain;
    `;
});
