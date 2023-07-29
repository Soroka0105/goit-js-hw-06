const form = document.querySelector(".login-form");

form.addEventListener("submit", formSubmit);

function formSubmit(evt) {
  evt.preventDefault();
  const formElements = evt.currentTarget.elements;
  const data = {
    email: formElements.email.value,
    password: formElements.password.value,
  };
  const alertMessage = "Please fill out all columns";
  if (data.email.length === 0 || data.password.length === 0) {
    console.log(alert(alertMessage));
  } else {
    console.log(data);
    form.reset();
  }
}
