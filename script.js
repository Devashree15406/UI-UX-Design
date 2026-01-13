const quizData = [
  {
    question: "What does HTML stand for?",
    options: [
      "Hyper Text Markup Language",
      "High Text Machine Language",
      "Hyperlinks and Text Markup",
      "Home Tool Markup Language"
    ],
    correct: 0
  },
  {
    question: "Which language is used for styling web pages?",
    options: ["HTML", "CSS", "Java", "Python"],
    correct: 1
  },
  {
    question: "Which language makes web pages interactive?",
    options: ["HTML", "CSS", "JavaScript", "PHP"],
    correct: 2
  },
  {
    question: "Which HTML tag is used to create a hyperlink?",
    options: ["<link>", "<a>", "<href>", "<url>"],
    correct: 1
  },
  {
    question: "Which CSS property is used to change text color?",
    options: ["font-color", "text-style", "color", "background"],
    correct: 2
  },
  {
    question: "Which symbol is used for single-line comments in JavaScript?",
    options: ["<!-- -->", "//", "/* */", "#"],
    correct: 1
  },
  {
    question: "Which HTML element is used to display an image?",
    options: ["<image>", "<img>", "<picture>", "<src>"],
    correct: 1
  },
  {
    question: "Which CSS layout is best for rows and columns?",
    options: ["Float", "Position", "Flexbox", "Inline"],
    correct: 2
  },
  {
    question: "Which keyword is used to declare a variable in JavaScript?",
    options: ["var", "let", "const", "All of the above"],
    correct: 3
  },
  {
    question: "Which file extension is used for JavaScript files?",
    options: [".java", ".js", ".json", ".script"],
    correct: 1
  }
];

let currentQuestion = 0;
let score = 0;
let answered = false;

const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const scoreEl = document.getElementById("score");
const nextBtn = document.getElementById("nextBtn");
const progressBar = document.getElementById("progress-bar");

function loadQuestion() {
  answered = false;
  optionsEl.innerHTML = "";
  scoreEl.textContent = "";

  const q = quizData[currentQuestion];
  questionEl.textContent = q.question;

  progressBar.style.width =
    (currentQuestion / quizData.length) * 100 + "%";

  q.options.forEach((option, index) => {
    const div = document.createElement("div");
    div.className = "option";
    div.textContent = option;
    div.onclick = () => selectOption(div, index);
    optionsEl.appendChild(div);
  });
}

function selectOption(selectedOption, index) {
  if (answered) return;
  answered = true;

  const correctIndex = quizData[currentQuestion].correct;
  const allOptions = document.querySelectorAll(".option");

  if (index === correctIndex) {
    selectedOption.classList.add("correct");
    score++;
  } else {
    selectedOption.classList.add("wrong");
    allOptions[correctIndex].classList.add("correct");
  }
}

nextBtn.addEventListener("click", () => {
  if (currentQuestion < quizData.length - 1) {
    currentQuestion++;
    loadQuestion();
  } else {
    questionEl.textContent = "🎉 Quiz Completed!";
    optionsEl.innerHTML = "";
    progressBar.style.width = "100%";
    scoreEl.textContent = `Your Score: ${score} / ${quizData.length}`;
    nextBtn.style.display = "none";
  }
});

loadQuestion();
