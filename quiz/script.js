let card = [
    {
    img: "https://shar-online24.ru/image/cache/catalog/falgirovannue/shargadkijjaminondejv81sm-700x700.jpg",
    title: "описание0",
    price: '10000',
    },
    {
    img: "https://static.insales-cdn.com/images/products/1/7218/329129010/1._%D0%BC%D0%B8%D0%BD%D1%8C%D0%BE%D0%BD_618%D1%85850_%D0%BC%D0%BC.jpg",
    title: "описание1",
    price: "5000",
    },
    {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQD5YDNF3XixUdDQSgH9SFW0oINcZMLeZ_yy_t72NH3pA&s",
    title: "описани2",
    price: "2000",
    },
    {
    img: "https://tlum.ru/uploads/0e598cdb5f0475250f883a9f4643b834c28558ded7916db5685908075d0133ff.jpeg",
    title: "описани2",
    price: "2000",
    },
];

let body = document.getElementById('body')
for (let el of card) {
    body.innerHTML += `<div class="card">
    <img src="${el.img}"/>
    <h2>${el.title}</h2>
    <p>${el.price}</p>
    </div>`
}