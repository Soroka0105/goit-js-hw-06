//1. Порахує і виведе в консоль кількість категорій в ul#categories, тобто елементів li.item.

const list = document.querySelectorAll(".item");
console.log(`Number of categories: ${list.length}`);

list.forEach(function (list) {
  console.log(`Category: ${list.firstElementChild.textContent}`);
  console.log(`Elements: ${list.lastElementChild.children.length}`);
});
