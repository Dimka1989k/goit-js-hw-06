const categoriesEl = document.querySelector("ul#categories");
const categoryAnimal = categoriesEl?.querySelectorAll("li.item");
console.log(`Number of categories: ${categoryAnimal.length}`);
categoryAnimal.forEach((items) => {
  const category = items.querySelector("h2").textContent;
  const countAnimal = items.querySelectorAll(":scope > ul > li").length;
  console.log(`Category: ${category}\nElements: ${countAnimal}`);
});
