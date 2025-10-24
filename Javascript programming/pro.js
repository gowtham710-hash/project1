const quizData = [
  {
    question: "What is the capital of India?",
    options: {
      a: "Mumbai",
      b: "patna",
      c: "New Delhi",
      d: "Bengaluru"
    },
    correct: "c"
  },
  {
    question: "What does HTML stands for?",
    options: {
      a: "Hyper Training Marking Language",
      b: "HighText Machine Language",
      c: "HyperLink and Text Markup Language",
      d: "HyperText Markup Language"
    },
    correct: "d"
  },
  {
    question: "What does CSS stand for?",
    options: {
      a: "Central Style Sheets",
      b: "Cascading Style Sheets",
      c: "Coded Style System",
      d: "Creative Style Sheet"
    },
    correct: "b"
  }
];

let currentQuestion = 0;
let score = 0;
let selectedAnswer = null;

const questionEl = document.getElementById("question");
const answerButtons = document.querySelectorAll(".answer-btn");
const nextBtn = document.getElementById("next-btn");

function loadQuestion() {
  const current = quizData[currentQuestion];
  questionEl.textContent = current.question;
  answerButtons.forEach((btn) => {
    const key = btn.getAttribute("data-answer");
    btn.textContent = current.options[key];
    btn.style.backgroundColor = "#eee"; 
    btn.disabled = false;
  });
  selectedAnswer = null;
  nextBtn.style.display = "none";
}

function selectAnswer(button) {
  selectedAnswer = button.getAttribute("data-answer");
  const correct = quizData[currentQuestion].correct;

  answerButtons.forEach(btn => btn.disabled = true); 

  if (selectedAnswer === correct) {
    button.style.backgroundColor = "#a6f3a6"; 
    score++;
  } else {
    button.style.backgroundColor = "#f3a6a6"; 
    
    answerButtons.forEach(btn => {
      if (btn.getAttribute("data-answer") === correct) {
        btn.style.backgroundColor = "#a6f3a6";
      }
    });
  }

  nextBtn.style.display = "inline-block";
}

function nextQuestion() {
  currentQuestion++;
  if (currentQuestion < quizData.length) {
    loadQuestion();
  } else {
    showScore();
  }
}

function showScore() {
  document.getElementById("quiz").innerHTML = `
    <h2>You scored ${score} out of ${quizData.length}!</h2>
    <button onclick="location.reload()">Restart Quiz</button>
  `;
}


loadQuestion();