let btn_left = document.getElementById('btn_left')
let btn_right = document.getElementById('btn_right')
let carusel = document.getElementById('carusel')

let carusel_elem = 2
let width = 100 / carusel_elem
for (let i of carusel.children) {
    i.style.minWidth = `${width}%`
}

let cnt_item = carusel.children.length
let cur = 0
btn_right.addEventListener("click",Right)
function Right() {
    cur += 1
    cur %= cnt_item
    carusel.style.transform = `translateX(-${width*cur}%)`
}
btn_left.addEventListener("click",Left)
function Left() {
    cur -= 1
    carusel.style.transform = `translateX(-${width*cur}%)`
}