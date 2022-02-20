
document.addEventListener('keydown', move, false);

function move(event) {
    var speed = +(document.querySelector('input#speed').value);
    var walker = document.querySelector('img');
    var pos = [
        walker.getBoundingClientRect().top,
        walker.getBoundingClientRect().left
    ];
    if (event.code == 'ArrowUp' && 0 < pos[0] - speed) {
        walker.style.top = `${pos[0] - speed}px`;
    }
    if (event.code == 'ArrowDown' && pos[0] + speed < window.innerHeight - 100) {
        walker.style.top = `${pos[0] + speed}px`;
    }
    if (event.code == 'ArrowRight' && pos[1] + speed < window.innerWidth - 60) {
        walker.style.left = `${pos[1] + speed}px`;
        walker.src = './walker-right.png';
    }
    if (event.code == 'ArrowLeft' && 0 < pos[1] - speed) {
        walker.style.left = `${pos[1] - speed}px`;
        walker.src = './walker-left.png';
    }
}