const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsEl = document.querySelector("ul#ingredients");

const markup = (ingredient) => `<li class="item">${ingredient}</li>`;
const listMarkup = (ingredientsItem) =>
  ingredientsItem.map((item) => markup(item)).join("");

ingredientsEl.insertAdjacentHTML("afterbegin", listMarkup(ingredients));

console.log(ingredientsEl);
