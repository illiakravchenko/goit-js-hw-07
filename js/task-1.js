const categoriesList = document.querySelector('#categories');
const categoriesItems = categoriesList.querySelectorAll('.item');

console.log(`Total categories: ${categoriesItems.length}`);

categoriesItems.forEach(category => {
  // const categoryName = category.querySelector('h2').textContent;
  const categoryName = category.firstElementChild.textContent;
  // const categoryItems = category.querySelectorAll('li');
  const categoryItems = category.lastElementChild.children.length;
  console.log(`Category: ${categoryName}`);
  console.log(`Number of items: ${categoryItems}`);
});
