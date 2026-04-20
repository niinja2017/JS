function startTimer(durationInSeconds) {
    let timer = durationInSeconds;
    let minutes, seconds;
    const timerDisplay = document.getElementById('timerDisplay');

    const intervalId = setInterval(function () {
        minutes = parseInt(timer / 60);
        seconds = parseInt(timer % 60);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        timerDisplay.textContent = minutes + ":" + seconds;
        --timer
        if (timer < 0) {
            clearInterval(intervalId);
            timerDisplay.textContent = "زمان تمام شد!";
        }
    }, 1000);
}

startTimer(210);
