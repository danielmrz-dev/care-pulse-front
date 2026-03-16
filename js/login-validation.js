const validEmail = "email@email.com";
const validPassword = "123456";

const loginButton = document.querySelector("[data-id='login-button']");
const emailField = document.querySelector("[data-id='email-field']");
const passwordField = document.querySelector("[data-id='password-field']");
const dialog = document.querySelector("[data-id='dialog']");
const closeDialogBtn = document.querySelector("[data-id='close-dialog']");

loginButton.setAttribute("disabled", true);
dialog.showModal();

const validateAndUpdateButton = () => {
  const isEmailValid = emailField.value === validEmail;
  const isPasswordValid = passwordField.value === validPassword;

  if (isEmailValid && isPasswordValid) {
    loginButton.removeAttribute("disabled");
  } else {
    loginButton.setAttribute("disabled", true);
  }
};

emailField.addEventListener("keyup", validateAndUpdateButton);
passwordField.addEventListener("keyup", validateAndUpdateButton);
loginButton.addEventListener("click", () => {
  window.location.href = "pages/inicio/inicio.html";
});
closeDialogBtn.addEventListener('click', () => {
  dialog.close()
});
