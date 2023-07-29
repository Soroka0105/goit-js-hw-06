const refs = {
  changeColorButton: document.querySelector(".change-color"),
  body: document.querySelector("body"),
  colortext: document.querySelector(".color"),
};

refs.changeColorButton.addEventListener("click", colorChangeFunction);

function colorChangeFunction() {
  let color = getRandomHexColor();
  refs.body.style.backgroundColor = color;
  refs.colortext.textContent = color;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
