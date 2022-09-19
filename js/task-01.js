const categoriesItems = document.querySelectorAll("li.item");

console.log(`Number of categories: ${categoriesItems.length}`);

const categoriesItemsAll = document.querySelectorAll("ul#categories>li");
categoriesItemsAll.forEach((elementAll) => {
  console.log(`Category: ${elementAll.firstElementChild.textContent}`);
  console.log(`Elements: ${elementAll.lastElementChild.children.length}`);
});
