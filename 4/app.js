const board = document.querySelector('#board')
const colors = ['#1e1c5a', '#8c1c76', '#1f73d2', '#eed8ed', '#f8efed']
const SQUARE_NUMBERS = 300
const clearButton = document.querySelector('#clearButton')
const paintButton = document.querySelector('#paintButton')

clearButton.addEventListener('click', clearBoard)
paintButton.addEventListener('click', paintBoard)

for (let i = 0; i < SQUARE_NUMBERS; i++) {
    const square = document.createElement('div')
    square.addEventListener('mouseover', () => { setColor(square) })

    board.append(square)
    square.classList.add('square')
}

function setColor(element) {
    const color = getRandomColor()
    element.style.backgroundColor = color
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}

function getRandomColor() {
    const index = Math.floor(Math.random() * colors.length)
    return colors[index]
}

function clearBoard() {
    const squares = board.querySelectorAll('.square')
    squares.forEach(square => {
        square.style.backgroundColor = '#1d1d1d'
        square.style.boxShadow = '0 0 2px #000'
    })
}

function paintBoard() {
    const squares = board.querySelectorAll('.square')
    squares.forEach(square => {
        const color = getRandomColor()
        square.style.backgroundColor = color
        square.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
    })
}