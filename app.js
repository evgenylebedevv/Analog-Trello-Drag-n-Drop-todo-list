const item = document.querySelector('.item')
const placeholders = document.querySelectorAll('.placeholder')

item.addEventListener('dragstart', dragstart)
item.addEventListener('dragend', dragend)

for (const placeholder of placeholders){
   placeholder.addEventListener('dragover', dragover)
   placeholder.addEventListener('dragenter', dragenter)
   placeholder.addEventListener('dragleave', dragleave)
   placeholder.addEventListener('drop', dragdrop)

}

function dragenter(event) {
   event.target.classList.add('hovered')
}

function dragover(event) {
   event.preventDefault('item')
}

function dragleave(event) {
   event.target.classList.remove('hovered')
   
}
function dragdrop(event) {
   event.target.append(item)
   event.target.classList.remove('hovered')
}

function dragstart(event) {
 event.target.classList.add('hold')
 setTimeout(() =>  event.target.classList.add('hide'), 0)
}

function dragend(event) {
 event.target.classList.remove('hold', 'hide')

}
