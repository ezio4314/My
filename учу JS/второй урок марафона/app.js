const item = document.querySelector('.item')

item.addEventListener('dragstart', dragstart)
item.addEventListener('dragend', dragend)


function dragstart(event) {
	console.log('drag start')
	event.target.classList.add('hold')
}

function dragend(event) {
	console.log('drag end')
	event.target.classList.remove('hold')
}