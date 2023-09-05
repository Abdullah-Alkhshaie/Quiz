let data = [
  {
    id: 1,
    question: "Which of these fish is actuallu a fish?",
    answers: [
      { answer: "sworsfish", isCorrect: true },
      { answer: "jellyfish", isCorrect: false },
      { answer: "starfish", isCorrect: false },
      { answer: "crayfish", isCorrect: false },
    ],
  },
  {
    id: 2,
    question: "A group of which animals is refered to as a wake?",
    answers: [
      { answer: "bats", isCorrect: false },
      { answer: "vultures", isCorrect: true },
      { answer: "ants", isCorrect: false },
    ],
  },

  {
    id: 3,
    question: "A flutter is a group of:",
    answers: [
      { answer: "bees", isCorrect: true },
      { answer: "penguins", isCorrect: false },
      { answer: "butterflies", isCorrect: true },
      { answer: "camels", isCorrect: false },
    ],
  },
];

let gameScreen = document.querySelector(".game");
let resultScreen = document.querySelector(".result");
let question = document.querySelector(".question");
let answersContainer = document.querySelector(".answers");
let submit = document.querySelector(".submit");
let play = document.querySelector(".play");

let qIndex = 0;
let correctCount = 0;
let wrongCount = 0;
let totla = 0;
let selectedAnswer;

const playAgain = () => {
   qIndex = 0;
 correctCount = 0;
 wrongCount = 0;
 totla = 0;
 selectedAnswer;
showQuestion(qIndex)

}

play.addEventListener('click', () => { resultScreen.style.display = 'none'
 gameScreen.style.display = 'block'
playAgain()
})

const showResult = () => {
  resultScreen.style.display = 'block'
  gameScreen.style.display = 'none'

  document.querySelector('.correct').textContent = `Correct answers : ${correctCount}`
  document.querySelector('.wrong').textContent = `Wrong answers : ${wrongCount}`
  document.querySelector('.score').textContent = `Score : ${(correctCount- wrongCount) * 10}`
}

const showQuestion = (qNumber) => {
  if(qIndex === data.length) {
    showResult()
  }
  selectedAnswer = null;
  question.textContent = data[qNumber].question;
  answersContainer.innerHTML = data[qNumber].answers.map(
      (item, index) =>
        `
    <div class="answer">
    <input name="answer" type="radio" id="${index}" value="${item.isCorrect}" />
    <label for="${index}">${item.answer}</label>
  </div>
  `
    )
    .join("");

  selectAnswer();
};

const selectAnswer = () => {
  answersContainer.querySelectorAll("input").forEach((el) => {
    el.addEventListener("click", (e) => {
      selectedAnswer = e.target.value;
      // console.log(e.target.value);
    });
  });
};

const submitAnswer = () => {
  submit.addEventListener("click", () => {
    if(selectedAnswer !== null) {
selectedAnswer === "true" ? correctCount++ : wrongCount++;
    qIndex++;
    showQuestion(qIndex);
    } else alert('Select an answer')
    
  });
};

showQuestion(qIndex);
submitAnswer();
