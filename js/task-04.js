let counterValue = 0;
const refs = {
  spanText: document.querySelector("#value"),
  buttonIncrement: document.querySelector('[data-action="increment"]'),
  buttonDecrement: document.querySelector('[data-action="decrement"]'),
};

const handleClickUp = (evt) => {
  counterValue += 1;
  refs.spanText.textContent = counterValue;
};
const handleClickDown = (evt) => {
  counterValue -= 1;
  refs.spanText.textContent = counterValue;
};

refs.buttonIncrement.addEventListener("click", handleClickUp);
refs.buttonDecrement.addEventListener("click", handleClickDown);
