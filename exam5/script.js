let items  = document.querySelectorAll('.cd-tabs-navigation li a')

items.forEach(item => {
    item.addEventListener('click' , (e) => {
        e.preventDefault()

        document.querySelector('.cd-tabs-navigation li a.selected').classList.remove('selected')
        item.classList.add('selected')

        let data = item.getAttribute('data-content')

        document.querySelector('.cd-tabs-content li.selected').classList.remove('selected')
        document.querySelector(`.cd-tabs-content li[data-content="${data}"]`).classList.add('selected')
    })
})
