const ERROR_COLOR = "rgb(255, 111, 111)";
const VALID_COLOR = "grey";
const MIN_PASS_LENGTH = 8;

const validationRules = {
  name: {
    validate: val => val.length > 0,
    errorMsg: "Name is required"
  },
  email: {
    validate: val => val.length > 0 && validateEmail(val),
    errorMsg: "Invalid email"
  },
  password: {
    validate: val => val.length >= MIN_PASS_LENGTH,
    errorMsg: "Password must be at least 8 characters"
  },
  "confirm-password": {
    validate: val => val === passInput.value,
    errorMsg: "Passwords do not match"
  }
};

const profileInfoForm = document.querySelector("#profile-info");
const passForm = profileInfoForm.querySelector("#password-form");
const passInput = passForm.querySelector("#password");

const fields = ["name", "email", "password", "confirm-password"];

profileInfoForm.addEventListener("submit", function (e) {
  e.preventDefault();
  fields.forEach((field) => {
    validateField(field);
  });
});

function validateField(fieldName) {
  const form = profileInfoForm.querySelector(`#${fieldName}-form`);
  const input = form.querySelector(`#${fieldName}`);
  const value = input.value.trim();

  const rule = validationRules[fieldName];
  const isInvalid = !rule.validate(value);

  setFormStyles(form, input, isInvalid, isInvalid ? rule.errorMsg : "");
}

function setFormStyles(form, input, isInvalid, invalidMsg) {
  changeInputStyles(input, isInvalid);
  changeErrorMsgStyles(form, isInvalid, invalidMsg);
}

function changeInputStyles(input, isInvalid) {
  input.style.border = isInvalid ? "2px solid red" : "2px solid black";
  input.style.setProperty("--c", isInvalid ? ERROR_COLOR : VALID_COLOR);
}

function changeErrorMsgStyles(form, isInvalid, invalidMsg) {
  const errorMsg = form.querySelector(".error-message");
  errorMsg.style.display = isInvalid ? "block" : "none";
  errorMsg.innerText = isInvalid ? invalidMsg : "";
}


function validateEmail(email) {
  return /\S+@\S+\.\S+/.test(email);
}

function validatePassword(pass) {
  return pass.length >= MIN_PASS_LENGTH;
}

function comparePasswords(pass1, pass2) {
  return pass1 === pass2;
}
