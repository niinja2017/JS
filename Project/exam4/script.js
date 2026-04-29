const list = [
    './../../image/peakpx.jpg',
    './../../image/peakpx1.jpg',
    './../../image/peakpx2.jpg',
    './../../image/peakpx3.jpg'
];

let image = document.querySelector('.main img');
let next = document.querySelector('.next');
let prev = document.querySelector('.prev');

let index = 0;
let timer;

function render() {
    image.src = list[index];
}
function start() {
    timer = setInterval(() => {
        index = (index + 1) % list.length;
        render();
    }, 1000);
}


render();
start();


image.addEventListener('mouseenter', () => clearInterval(timer));
image.addEventListener('mouseleave', () => start());


next.addEventListener('click', () => {
    clearInterval(timer);
    index = (index + 1) % list.length;
    render();
});


prev.addEventListener('click', () => {
    clearInterval(timer);
    index = (index - 1 + list.length) % list.length;
    render();
});
