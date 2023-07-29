const input = document.querySelector("#font-size-control");
const text = document.querySelector("#text");

// text.style.fontSize = "px";
input.addEventListener("input", textChange);

function textChange() {
  text.style.fontSize = `${input.value}px`;
}
