const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const foodList = document.querySelector('#ingredients')
const liList = []

ingredients.forEach(ingredient => {
	const item = document.createElement('li')
	item.classList.add('item')
	item.textContent = ingredient
	liList.push(item)
})

foodList.append(...liList );
