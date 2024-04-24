var seconds = 0;
var minutes = 0;
var hours = 0;
var interval;

function startTimer() {
    interval = setInterval(() => {
        seconds++;
        if (seconds === 60) {
            seconds = 0;
            minutes++;
            if (minutes === 60) {
                minutes = 0;
                hours++;
            }
        }

        document.querySelectorAll('h1')[0].innerHTML = formatNumber(seconds);
        document.querySelectorAll('h1')[1].innerHTML = formatNumber(minutes);
        document.querySelectorAll('h1')[2].innerHTML = formatNumber(hours);
    }, 1000);
}

function formatNumber(num) {
    return num < 10 ? "0" + num : num;
}

function stopTimer() {
    clearInterval(interval);
}