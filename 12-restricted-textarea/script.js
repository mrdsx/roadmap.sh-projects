const textarea = document.querySelector(".message-area");
const textareaInput = textarea.querySelector("#message");
const counter = textarea.querySelector("#counter");

const MAX_LENGTH = 250;

textareaInput.addEventListener('input', function(e) {
  const inputLen = e.target.value.length;

  counter.innerHTML = `${inputLen} / ${MAX_LENGTH}`;

  if (inputLen >= MAX_LENGTH) {
    textarea.style.setProperty("--c", "red");
  } else {
    textarea.style.setProperty("--c", "black");
  }
});