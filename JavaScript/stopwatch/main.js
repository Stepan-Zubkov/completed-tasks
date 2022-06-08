const start = document.querySelector('button#start');
const stop = document.querySelector('button#stop');
const reset = document.querySelector('button#reset');
const split = document.querySelector('button#split');
const stopwatch = document.querySelector('div#stopwatch');
const splits = document.querySelector('div#splits');

var ms = 0;
var timer;

function formatTime(ms) {
    var minutes = 0;
    var seconds = 0;
    if (ms >= 60000) {
        minutes += parseInt(ms/60000);
        ms -= minutes*60000;
    }
    if (ms >= 1000) {
        seconds += parseInt(ms/1000);
        ms -= seconds*1000;
    }
    return `${minutes}.${seconds}.${ms}`

}

start.onclick = () => {
    timer = setInterval(() => {
        ms += 10;
        stopwatch.innerText = formatTime(ms);
    }, 10);
    start.style.display = 'none';
    stop.style.display = 'inline-block';
    reset.style.display = 'inline-block';
    split.style.display = 'inline-block';
}

stop.onclick = () => {
    clearInterval(timer);
    stop.style.display = 'none';
    start.style.display = 'inline-block';
}

reset.onclick = () => {
    clearInterval(timer);

    ms = 0;
    reset.style.display = 'none';
    stop.style.display = 'none';
    split.style.display = 'none';
    start.style.display = 'inline-block';

    stopwatch.innerText = '0.00.000'
    splits.innerText = '';
}


split.onclick = () => {
    var splited_time = document.createElement('div');

    var time_count = splits.children.length+1;
    var text = document.createTextNode(`${time_count} ${stopwatch.innerText}`);
    splited_time.appendChild(text);
    splits.appendChild(splited_time);
    splits.appendChild(document.createElement('br'));
}
