let valueEl = Number(document.querySelector("#value").textContent);

let counterValue = document.querySelector("#value");

const decrementBtn = document.querySelector("#counter").firstElementChild;
const incrementBtn = document.querySelector("#counter").lastElementChild;

incrementBtn.addEventListener("click", (event) => {
  // console.log("Вешаю слушателя события на целевую кнопку");
  valueEl += 1;

  counterValue.innerText = valueEl;
});

decrementBtn.addEventListener("click", (event) => {
  // console.log("Снимаю слушателя события с целевой кнопки");
  valueEl -= 1;

  counterValue.innerText = valueEl;
  // console.log("counterValue", counterValue);
});
