// Timer ------------------------------------------------------------

var currentTimer = 0;
var interval = 0;
var lastUpdateTime = new Date().getTime();

var mins = document.querySelector('span.minutes');
var secs = document.querySelector('span.seconds');
var cents = document.querySelector('span.centiseconds');

function pad(n) {
    return ('00' + n).substr(-2);
}

function updateTimer() {
    var now = new Date().getTime();
    var dt = now - lastUpdateTime;

    currentTimer += dt;

    var time = new Date(currentTimer);

    var mins = document.querySelector('span.minutes');
    var secs = document.querySelector('span.seconds');
    var cents = document.querySelector('span.centiseconds');

    mins.innerHTML = pad(time.getMinutes());
    secs.innerHTML = pad(time.getSeconds());
    cents.innerHTML = pad(Math.floor(time.getMilliseconds() / 10));

    lastUpdateTime = now;
}

function startTimer() {
    if (!interval) {
        lastUpdateTime = new Date().getTime();
        interval = setInterval(updateTimer, 1);
    }
}

function stopTimer() {
    clearInterval(interval);
    interval = 0;
}

function resetTimer() {
    stopTimer();

    currentTimer = 0;

    var mins = document.querySelector('span.minutes');
    var secs = document.querySelector('span.seconds');
    var cents = document.querySelector('span.centiseconds');

    mins.innerHTML = secs.innerHTML = cents.innerHTML = pad(0);
}

// Timer end --------------------------------------------------------