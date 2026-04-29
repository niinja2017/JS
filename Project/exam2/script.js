let h1 = document.querySelector('.main h1')

console.log(h1)
document.addEventListener('mousemove', (e) => {
    let x = e.clientX;
    let y = e.clientY;

    let offsetX = x - window.innerWidth / 2;
    let offsetY = y - window.innerHeight / 2;

    h1.style.textShadow = `
        ${offsetX * 0.7}px ${offsetY * 0.7}px red,
        ${-offsetX * 0.3}px ${offsetY * 0.3}px green,
        ${offsetX * 0.4}px ${-offsetY * 0.4}px pink,
        ${-offsetX}px ${-offsetY}px blue`
    ;
})
