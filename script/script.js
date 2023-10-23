const answers = [
  "Yes",
  "No",
  "Maybe",
  "Certainly not!",
  "I don't care",
  "Ask me later",
  "I don't know",
  "Follow your Heart",
];

const form = document.querySelector("form");
const answerField = document.getElementById("answer-text");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const questionInput = document.getElementById("question-input");

  const random = Math.floor(Math.random() * answers.length) + 1;

  const answer = answers[random];
  answerField.classList.add("bounce-in-top");
  answerField.textContent = answer;
  questionInput.value = "";

  setTimeout(() => {
    answerField.classList.remove("bounce-in-top");
  }, 1000);
});
