const El = {
  boxes: document.querySelector("div#boxes"),
  input: document.querySelector('input[type="number"]'),
  createButtonClick: document.querySelector("button[data-create]"),
  destroyButtonClick: document.querySelector("button[data-destroy]"),
};

const getListMarkup = (index) => `<div class="item"
 style="width: ${30 + 10 * index}px; height: ${
  30 + 10 * index
}px; background-color: ${getRandomHexColor()}"></div>`;

const getItemListMarkup = (amount) =>
  Array(amount)
    .fill("")
    .map((_, i) => getListMarkup(i))
    .join("");

El.createButtonClick.addEventListener("click", handleClickCreateBtn);
El.destroyButtonClick.addEventListener("click", handleClickDestroyBtn);

function handleClickCreateBtn() {
  clearBoxes();
  createBoxes(Number(El.input.value));
}

function handleClickDestroyBtn() {
  clearBoxes();
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function createBoxes(amount) {
  El.boxes.insertAdjacentHTML("afterbegin", getItemListMarkup(amount));
}

function clearBoxes() {
  while (El.boxes.childNodes.length > 0) {
    El.boxes.firstChild.remove();
  }
}
