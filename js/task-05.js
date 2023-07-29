const refs = {
  input: document.querySelector("#name-input"),
  output: document.querySelector("#name-output"),
};

refs.input.addEventListener("input", onInputChange);

function onInputChange(evt) {
  refs.output.textContent = evt.currentTarget.value;
  if (refs.input.value.length === 0) {
    refs.output.textContent = "Anonymous";
  }
}
