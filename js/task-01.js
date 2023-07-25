//1. Порахує і виведе в консоль кількість категорій в ul#categories, тобто елементів li.item.
const list = [...categories.children];
console.log(list);

list.forEach((category) => {
  //2. Для кожного элемента li.item у списку ul#categories, знайде і виведе в консоль текст заголовку елемента (тегу <h2>) і кількість елементів в категорії (усіх <li>, вкладених в нього).
  console.log(category.firstElementChild.textContent);

  console.log(category.lastElementChild.children);
});
