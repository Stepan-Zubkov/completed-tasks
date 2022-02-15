var button = document.querySelector('button.catchme')

button.onmouseover = function() {
    this.style.top = `${Math.floor(Math.random() * (window.innerHeight - this.offsetHeight))}px`;
    this.style.right = `${Math.floor(Math.random() * (window.innerWidth - this.offsetWidth))}px`;
    this.innerText = [
        'Looser!', 'You`re stupid!',
        'Silly!', 'You`ll never catch me!'
    ][Math.floor(Math.random() * 4)]
}