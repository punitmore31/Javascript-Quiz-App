const quizDB = [
    {
    question: "Q1:Which type of JavaScript language is",
    a: "Object-Oriented",
    b: "Object-Based",
    c: "Assembly-language",
    d: "High-level",
    ans: "ans2"
    },

    {  
        question: "Q2:Which one of the following also known as Conditional Expression:",
        a: "Alternative to if-else",
        b: "Switch statement",
        c: "If-then-else statement",
        d: "immediate if",
        ans: "ans4"

    },

    {
        question: "Q3:In JavaScript, what is a block of statement?",
        a: "Conditional block",
        b: "block that combines a number of statements into a single compound statement",
        c: "both conditional block and a single statement",
        d: "block that contains a single statement",
        ans: "ans2"
    },

    {
        question: "Q4:When interpreter encounters an empty statements, what it will do:",
        a: "Shows a warning",
        b: "Prompts to complete the statement",
        c: "Throws an error",
        d: "Ignores the statements",
        ans: "ans4"

    },

    {
        question: "Q5:Which of the following variables takes precedence over the others if the names are the same?",
        a: "Global variable",
        b: "The local element",
        c: "The two of the above",
        d: "None of the above",
        ans: "ans2"

    },   
];
 
const question = document.querySelector('.question');
const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const option4 = document.querySelector('#option4');
const submit = document.querySelector('#submit');

const answers = document.querySelectorAll('.answer');

const showScore = document.querySelector('#showScore');


let questionCount = 0;
let score = 0;
const loadQuestion = () => {
    const questionList = quizDB[questionCount];
    question.innerText = questionList.question;
    option1.innerText = questionList.a;
    option2.innerText = questionList.b;
    option3.innerText = questionList.c;
    option4.innerText = questionList.d;

};
loadQuestion(); 

const getCheckedAnswer = ()=>{
    let answer;
    answers.forEach((curAnsElem)=>{

        if (curAnsElem.checked) {
            answer = curAnsElem.id;
            
        }

    });
    return answer;

};

const deselectAll = ()=>{
    answers.forEach((curAnsElem) => curAnsElem.checked = false);
}

submit.addEventListener('click', () => {
    const checkAnswer = getCheckedAnswer();
    console.log(checkAnswer);

    if (checkAnswer === quizDB[questionCount].ans) {
        score++
    };

    deselectAll();

    questionCount++ 

    if (questionCount < quizDB.length ) {
        loadQuestion();
    }
    else{
        showScore.innerHTML =`<h3> Your Score : ${score}/${quizDB.length} ✌️ </h3>
        <button class = 'btn' onclick = "location.reload()">Play again</button>`; 

        
    showScore.classList.remove('scoreArea')
    
    }
});
