const ERROR_COLOR = "rgb(255, 111, 111)";
const VALID_COLOR = "grey";
const MIN_PASS_LENGTH = 8;

const profileInfoForm = document.querySelector("#profile-info-form");
const nameForm = profileInfoForm.querySelector("#name-input");
const emailForm = profileInfoForm.querySelector("#email-input");
const passForm = profileInfoForm.querySelector("#password-input");
const confirmPassForm = profileInfoForm.querySelector("#confirm-password-input");

const nameInput = nameForm.querySelector("#name");
const emailInput = emailForm.querySelector("#email");
const passInput = passForm.querySelector("#password");
const confirmPassInput = confirmPassForm.querySelector("#confirm-password");

profileInfoForm.addEventListener("submit", function (e) {
  e.preventDefault();

  validateNameField(nameInput, nameForm);
  validateEmailField(emailInput, emailForm);
  validatePasswordField(passInput, passForm);
  validateConfirmPassword(passInput, confirmPassInput, confirmPassForm);
});

function validateNameField(input, form) {
  const MESSAGE = "Name is required";
  const isEmpty = input.value.trim().length === 0;
  updateInputStyles(form, input, isEmpty, isEmpty ? MESSAGE : "");
}

function validateEmailField(input, form) {
  const value = input.value.trim();
  if (!value) {
    updateInputStyles(form, input, true, "Email is required");
  } else if (!validateEmail(value)) {
    updateInputStyles(form, input, true, "Invalid email");
  } else {
    updateInputStyles(form, input, false);
  }
}

function validatePasswordField(input, form) {
  const value = input.value;
  if (!value.trim()) {
    updateInputStyles(form, input, true, "Password is required");
  } else if (value.length < MIN_PASS_LENGTH) {
    updateInputStyles(form, input, true, "Password must contain at least 8 characters");
  } else {
    updateInputStyles(form, input, false);
  }
}

function validateConfirmPassword(passInput, confirmInput, form) {
  if (!confirmInput.value.trim()) {
    updateInputStyles(form, confirmInput, true, "Password is required");
  } else if (passInput.value !== confirmInput.value) {
    updateInputStyles(form, confirmInput, true, "Password must be the same");
  } else {
    updateInputStyles(form, confirmInput, false);
  }
}

function updateInputStyles(form, input, isError, errorMessage) {
  input.style.border = isError ? "2px solid red" : "2px solid black";
  input.style.setProperty("--c", isError ? ERROR_COLOR : VALID_COLOR);

  const errorElement = form.querySelector(".error-message");
  if (errorElement) {
    errorElement.style.display = isError ? "block" : "none";
    if (errorMessage) errorElement.innerText = errorMessage;
  }
}

function validateEmail(email) {
  const re = /\S+@\S+\.\S+/;
  return re.test(email);
}
