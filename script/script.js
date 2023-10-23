const answers = [
  "Yes",
  "No",
  "Maybe",
  "Certainly not!",
  "I don't care",
  "Ask me later",
  "I don't know",
  "Follow your Heart",
  "I don't think so",
  "Sure!",
];

const form = document.querySelector("form");
const answerField = document.getElementById("answer-text");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const questionInput = document.getElementById("question-input");

  const random = Math.floor(Math.random() * answers.length);

  const answer = answers[random];
  answerField.classList.add("bounce-in-top");
  answerField.textContent = answer;
  questionInput.value = "";

  console.log(answer);
  console.log(random);

  setTimeout(() => {
    answerField.classList.remove("bounce-in-top");
  }, 1000);
});
