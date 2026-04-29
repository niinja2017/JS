let video = document.querySelector('.videoPlayer')
let start = document.querySelector('.start')
let forward = document.querySelector('.forward')
let backward = document.querySelector('.backward')
let fullscreen = document.querySelector('.fullscreen')
let time = document.querySelector('.time')

function formatTime(timeInSeconds) {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = Math.floor(timeInSeconds % 60);

    const formattedMinutes = String(minutes).padStart(2, '0');
    const formattedSeconds = String(seconds).padStart(2, '0');
    return `${formattedMinutes}:${formattedSeconds}`;
}

video.addEventListener('timeupdate', () => {
    time.textContent = `${formatTime(video.currentTime)} / ${formatTime(video.duration)}`;
});

console.log(video)


start.addEventListener('click', () => {
    if (video.paused == true) {
        video.play()
        start.textContent = 'pause'
    } else {
        video.pause()
        start.textContent = 'play'
    }

})

fullscreen.addEventListener('click', () => {
    if (!document.fullscreenElement) {
        video.requestFullscreen()
    } else {
        document.exitFullscreen();
    }
})


forward.addEventListener('click', () => {
    video.currentTime += 5
})

backward.addEventListener('click', () => {
    video.currentTime -= 5
})

document.addEventListener('keydown', (e) => {
    if (e.key == 'ArrowRight') {
        video.currentTime += 5
    }
})
document.addEventListener('keydown', (e) => {
    if (e.key == 'ArrowLeft') {
        video.currentTime -= 5
    }
})
