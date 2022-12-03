let counterValue = 0

const displayCounter = document.querySelector('#value')
const buttonSub = document.querySelector('button[data-action="decrement"]')
const buttonAdd = document.querySelector('button[data-action="increment"]')

buttonSub.addEventListener('click', () => {
	counterValue--
	displayCounter.textContent = counterValue
})

buttonAdd.addEventListener('click', () => {
	counterValue++
	displayCounter.textContent = counterValue
})
