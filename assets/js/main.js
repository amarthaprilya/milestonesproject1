const navMenu = document.getElementById('nav-menu'),
navToggle = document.getElementById('nav-toggle'),
navClose = document.getElementById('nav-close')

// Show Menu
navToggle.addEventListener('click', () =>{
    navMenu.classList.add('show-menu')
})

// Hide Menu
navClose.addEventListener('click', () =>{
    navMenu.classList.remove('show-menu')
})

// Search
const search = document.getElementById('search'),
searchBtn = document.getElementById('search-btn'),
searchClosen = document.getElementById('search-close')

// Show (Search)
searchBtn.addEventListener('click', () =>{
    search.classList.add('show-search')
})

// Hide (Search)
searchClosen.addEventListener('click', () =>{
    search.classList.remove('show-search')
})

// Additional Feature - Travel Quiz Game

const questions = [
    {
        question: "What is the tallest mountain in Indonesia?",
        correctAnswer: "Carstensz",
        options: ["Rinjani", "Slamet", "Carstensz", "Semeru"]
    },
    {
        question: "What is the highest volcano in Indonesia?",
        correctAnswer: "Kerinci",
        options: ["Sindoro", "Kerinci", "Sumbing", "Semeru"]
    },
    {
        question: "How many active volcanoes are there in Indonesia?",
        correctAnswer: "around 130",
        options: ["15", "around 50", "around 130", "500"]
    }
];

let currentQuestionIndex = 0;
let score = 0;

function loadQuestion() {
    const quizContent = document.getElementById('quiz-content');
    const feedback = document.getElementById('feedback');
    const nextBtn = document.getElementById('next-btn');

    feedback.style.display = 'none';
    nextBtn.style.display = 'none';

    const currentQuestion = questions[currentQuestionIndex];

    quizContent.innerHTML = `
        <div class="question">
            <h2>${currentQuestion.question}</h2>
        </div>
        <div class="options">
            ${currentQuestion.options.map(option => `
                <button class="option-btn" onclick="selectAnswer('${option}')">${option}</button>
            `).join('')}
        </div>
    `;
}

function selectAnswer(selectedOption) {
    const currentQuestion = questions[currentQuestionIndex];
    const feedback = document.getElementById('feedback');
    const nextBtn = document.getElementById('next-btn');

    if (selectedOption === currentQuestion.correctAnswer) {
        score++;
        feedback.textContent = 'Correct!';
        feedback.className = 'feedback correct';
    } else {
        feedback.textContent = `Wrong!`;
        feedback.className = 'feedback wrong';
    }

    feedback.style.display = 'block';
    nextBtn.style.display = 'block';
}

document.getElementById('next-btn').addEventListener('click', () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        loadQuestion();
    } else {
        showResult();
    }
});

function showResult() {
    const quizContent = document.getElementById('quiz-content');
    const feedback = document.getElementById('feedback');
    const nextBtn = document.getElementById('next-btn');
    const result = document.getElementById('result');

    quizContent.style.display = 'none';
    feedback.style.display = 'none';
    nextBtn.style.display = 'none';
    result.style.display = 'block';
    result.innerHTML = `
        <h2>Your Result is here</h2>
        <p>You've answered ${score} of ${questions.length} questions.</p>
    `;
}

loadQuestion();

// end of quiz sec

// start of reister form
  const signUpButton=document.getElementById('signUpButton');
  const signInButton=document.getElementById('signInButton');
  const signInForm=document.getElementById('signIn');
  const signUpForm=document.getElementById('signup');
  
  signUpButton.addEventListener('click',function(){
      signInForm.style.display="none";
      signUpForm.style.display="block";
  })
  signInButton.addEventListener('click', function(){
      signInForm.style.display="block";
      signUpForm.style.display="none";
  })
// end of register form
