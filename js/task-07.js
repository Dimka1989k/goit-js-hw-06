const changeInpute = document.querySelector("input#font-size-control");
const textInpute = document.querySelector("span#text");

changeInpute.addEventListener("change", (e) => {
  textInpute.style.fontSize = `${e.target.value}px`;
});
