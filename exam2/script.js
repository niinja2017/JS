const boxes = document.querySelectorAll('.box');

boxes.forEach(box => {
    box.addEventListener('mouseenter', () => {
        box.classList.add('hovered');
        document.body.classList.add('dark')
    });

    box.addEventListener('mouseleave', () => {
        box.classList.remove('hovered');
        document.body.classList.remove('dark')
    });
});
