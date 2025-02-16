const categories = document.querySelector('#categories');
console.log('Number of Categories:', categories.childElementCount);

const elementsCategory = categories.querySelectorAll('.item');
elementsCategory.forEach(category => {
  console.log('Category:', category.querySelector('h2').textContent);
  console.log('Elements:', category.querySelector('ul').childElementCount);
});
