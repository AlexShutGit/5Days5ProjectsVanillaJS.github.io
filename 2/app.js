const item = document.querySelector('.item')
const placeholders = document.querySelectorAll('.placeholder')

item.addEventListener('dragstart', dragstart)
item.addEventListener('dragend', dragend)

placeholders.forEach((placeholder) => {
    placeholder.addEventListener('dragover', dragover)
    placeholder.addEventListener('dragenter', dragenter)
    placeholder.addEventListener('drop', dragdrop)
})

function dragstart(event) {
    event.target.classList.add('hold')
    setTimeout(() => event.target.classList.add('hide'), 0);

}

function dragend(event) {
    event.target.className = 'item'
}

function dragover(event) {
    event.preventDefault()
}

function dragenter(event) {
    placeholders.forEach((placeholder) => {
        placeholder.classList.add('hovered')
    })
}

function dragdrop(event) {
    event.target.classList.remove('hovered')
    event.target.append(item)
    placeholders.forEach((placeholder) => {
        placeholder.classList.remove('hovered')
    })
}