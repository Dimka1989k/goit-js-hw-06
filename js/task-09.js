const El = {
  button: document.querySelector("button.change-color"),
  body: document.body,
  colorSpan: document.querySelector("span.color"),
};
El.button.addEventListener("click", handleClickBtn);

function handleClickBtn() {
  const colorBody = getRandomHexColor();
  El.body.style.backgroundColor = colorBody;
  El.colorSpan.textContent = colorBody;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
