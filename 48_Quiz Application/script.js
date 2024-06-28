let questionTop = document.querySelector("#question");
let button = document.querySelector("#submit-btn");
let optionsContainer = document.querySelector("#options-container");
let scoreDisplay = document.querySelector("#score");

const Question = [
  {
    question: "What is the capital of France?",
    options: ["Berlin", "Paris", "Madrid", "Rome"],
    correctAnswerIndex: 1,
  },
  {
    question: "Which planet is known as the Red Planet?",
    options: ["Mars", "Earth", "Venus", "Jupiter"],
    correctAnswerIndex: 0,
  },
  {
    question: "What is the largest mammal?",
    options: ["Elephant", "Giraffe", "Blue Whale", "Kangaroo"],
    correctAnswerIndex: 2,
  },
  {
    question: "What is the main ingredient in guacamole?",
    options: ["Tomato", "Onion", "Pineapple", "Avocado"],
    correctAnswerIndex: 3,
  },
  {
    question: "Which programming language is often used for web development?",
    options: ["Java", "Python", "HTML", "JavaScript"],
    correctAnswerIndex: 3,
  },

  {
    question: "Who's the GOAT of football",
    options: ["Ronaldo", "Neymar", "Messi", "Maradona"],
    correctAnswerIndex: 2,
  },
];

let currentQuestionIndex;
let score = 0;
// let userChoice = [];

function inIt() {
  currentQuestionIndex = Math.floor(Math.random() * Question.length);
  displayQuestion();
}

function displayQuestion() {
  let currQuestionIdx = Question[currentQuestionIndex];
  questionTop.innerText = `Quiz : ${currQuestionIdx.question}`;
  optionsContainer.innerHTML = currQuestionIdx.options
    .map(
      (option, index) =>
        `<button id="option-${index}"  class="option" onclick = "selectOption(${index})">${option}</button>`
    )
    .join("");
}

function selectOption(selectedIndex) {
  let selectOption = document.getElementById(`option-${selectedIndex}`);
  let currQuestionIdx = Question[currentQuestionIndex];
  let isCorrect = selectedIndex == currQuestionIdx.correctAnswerIndex;

  if (isCorrect) {
    console.log("Yay! you choose the right Answer");
    selectOption.style.backgroundColor = "#27ae60";
    // result.innerText = `Yay! you choose the right Answer`;
  } else {
    console.log(`wrong Answer: the right answer is`);
    selectOption.style.backgroundColor = "red";
    // result.innerText = `wrong Answer: the right answer is ${currVal}`
  }

  let feedbackDiv = document.querySelector("#feedback");
  feedbackDiv.innerHTML = isCorrect
    ? "Yay! You chose the right answer"
    : `Wrong Answer: The right answer is ${
        currQuestionIdx.options[currQuestionIdx.correctAnswerIndex]
      }`;

  if (isCorrect) {
    score++;
  }
  scoreDisplay.innerText = `Score: ${score}`;
}

function nextQuestion() {
  currentQuestionIndex = Math.floor(Math.random() * Question.length);
  displayQuestion();
}

inIt();

button.addEventListener("click", nextQuestion);
