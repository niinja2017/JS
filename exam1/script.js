let input = document.querySelector('.input');
let btn = document.querySelector('.btn');
let result = document.querySelector('.result');
let text = document.querySelector('.text')
let timer = null;

btn.addEventListener('click', () => {
    if (timer) {
        clearInterval(timer);
    }
    text.textContent = 'تایمر در حال اجرا'
    text.style.color = 'orange'
    let inputValue = Number(input.value);

    if (isNaN(inputValue)) {
        result.textContent = 'لطفا عدد وارد کنید';
        return
    }

    result.textContent = inputValue


    timer = setInterval(() => {
        if (result.textContent <= 0) {
            clearInterval(timer);
            text.textContent = 'تایمر با موفقیت به پایان رسید'
            text.style.color = 'green'
            return;
        }
        result.textContent -= 1;
    }, 1000);
});
