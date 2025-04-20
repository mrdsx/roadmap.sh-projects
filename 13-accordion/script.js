const answers = document.querySelectorAll(".answer");
answers.forEach(e => {
  e.style.display = "none";
});

function showAnswer(answerId) {
  let answer = document.getElementById(answerId);
  if (answer.style.display === "none") {
    answer.style.display = "block";
  } else {
    answer.style.display = "none";
  }
}