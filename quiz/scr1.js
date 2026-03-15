let start = document.getElementById('start')
let result = document.getElementById('result')
let main = document.getElementById('main')

let cur = 0
let cnt = 0
let quests = [
    {
        quest: '2+2',
        correct: 4,
        answers: [1,2,4,6],
    },
    {
        quest: '5+7',
        correct: 12,
        answers: [6,7,12,13,17],
    },
    {
        quest: '2+0',
        correct: 2,
        answers: [2,3,4,6],
    },
];

function startProg() {
    start.classList.add('close')
    main.classList.remove('close')
    result.classList.add('close')
    generate()
}

start.addEventListener('click', startProg)

function generate() {
    let quest = quests[cur].quest
    main.innerHTML = `<h2 class="title">${quest}</h2>`

    let answers = quests[cur].answers
    let block = ''
    for (let i of answers) {
        block += `<button class="btn" onclick="check('${i}')">${i}</button>`
    }
    main.innerHTML += `<nav>${block}</nav>`
}

function stop() {
    start.classList.remove('close')
    main.classList.add('close')
    result.classList.remove('close')
    result.innerHTML = `Решено ${cnt} из ${quests.length}`
    generate()
}

function check(ans) {
    let correct =  quests[cur].correct
    if (correct == ans) cnt++
    cur++
    if (cur < quests.length) {
        generate()
    } else {
        stop()
    }
    
}