const btn = document.querySelector('button');
const audio = document.querySelector('audio');
let flag = true;

btn.addEventListener('click', () => {
    audio.src = './tracks/Metro Boomin - Trance (Feat. Travis Scott & Young Thug).mp3';
    audio.play();

    if (flag) {
        audio.play();
        flag = false;
        btn.textContent = 'STOP';
    } else {
        audio.pause();
        flag = true;
        btn.textContent = 'PLAY';
    }
});
