//array questions
var myQuestions = [
    {
        question: "How Java Script can be used to change the HTML content?",
        answers: {
            a: "A: document.getElementById('demo').innsertHTML = 'Hello';",
            b: "B: document.getElementById('demo').innerHTML = 'Hello World';",
            c: "C: document.getElementById('demo').style.fontSize = '35px';",
            d: "D: document.getElementById('demo').addHTML = 'Hello';"
        },
        correctAnswer: "B"
    },
    {
        question: "Given the code below: </br></br> var myCar = \"Hyundai\"; </br> function cars () { </br > &nbsp&nbsp var myCar = \"Toyota\"; </br > &nbsp&nbsp console.log(myCar);</br>}</br>What will show in the console?",
        answers: {
            a: "A: myCar",
            b: "B: Hyundai",
            c: "C: Toyota",
            d: "D: cars"
        },
        correctAnswer: "C"
    },
    {
        question: "Which of the following type of variable is visible everywhere in your JavaSCript code?",
        answers: {
            a: "A: Local variable",
            b: "B: Global variable",
            c: "C: Both of the above",
            d: "D: None of the above"
        },
        correctAnswer: "B"
    },
    {
        question: "Which of the following statements is an example of css style in Java Script?",
        answers: {
            a: "A: document.getElementById('demo').innerHTML = cars;",
            b: "B: document.addElement.text = 'hello';",
            c: "C: document.getElementById ('myText'). className = 'anyclass';",
            d: "D: document.getElementById(myText).className = 'anyclass';"
        },
        correctAnswer: "C"
    },
    {
        question: "Which of the following function of String object returns the calling string value converted to lower case?",
        answers: {
            a: "A: toLowerCase()",
            b: "B: substring()",
            c: "C: toupperCase()",
            d: "D: toString()"
        },
        correctAnswer: "A"
    },
    {
        question: "Which of the following is an example of an array?",
        answers: {
            a: "A: var seasonOfTheYear = {Winter,Spring,Summer,Fall};",
            b: "B: var seasonoftheyear = (Winter, Spring, Summer, Fall);",
            c: "C: var seasonOfTheYear = [Winter, Spring, Summer, Fall];",
            d: "D: var seasonOfTheYear = ['Winter', 'Spring', 'Summer', 'Fall'];"
        },
        correctAnswer: "D"
    },
    {
        question: "Which of the folowing is used to assign a value to a variable?",
        answers: {
            a: "A: +",
            b: "B: ===",
            c: "C: ()",
            d: "D: ="
        },
        correctAnswer: "D"
    },
    {
        question: "How does a for loop start?",
        answers: {
            a: "A: for(i=0)",
            b: "B: for(i=0; i<=8)",
            c: "C: for(i=0; i<=8; i++)",
            d: "D: for(i<=8; i++)"
        },
        correctAnswer: "C"
    },
    {
        question: "What is the correct syntax for referring to an external script called 'quiz.js'?",
        answers: {
            a: "A: <script src='quiz.js'>",
            b: "B: <script href='quiz.js'>",
            c: "C: <script name='quiz.js'>",
            d: "D: <script='quiz.js'>"
        },
        correctAnswer: "A"
    },
    {
        question: "What will the following code Return: Boolean(8>10)?",
        answers: {
            a: "A:Undefined",
            b: "B: true",
            c: "C: yes",
            d: "D: false"
        },
        correctAnswer: "D"
    },
];

var currentQuestionNumber = 0;
var currentScore = 0;
var timeLeft = myQuestions.length * 15; // 15 seconds per question
var timerEl = document.getElementById('timer');
var answerA = document.getElementById("answer_A");
var answerB = document.getElementById("answer_B");
var answerC = document.getElementById("answer_C");
var answerD = document.getElementById("answer_D");



// click event listener and call startQuiz function
document.getElementById("start_quiz").addEventListener("click", startQuiz);

// function  startQuiz
function startQuiz() {
    var startQuizWrapper = document.getElementById("start_quiz_wrapper");
    startQuizWrapper.classList.add("hide");
    var questionsWrapper = document.getElementById("questions_wrapper");
    questionsWrapper.classList.remove("hide");
    // countdown();
    populateQuestion();
}

function countdown() {
    timerEl.textContent = timeLeft + ' seconds remaining';
    timeLeft--;
    var timeInterval = setInterval(function () {
        timerEl.textContent = timeLeft + ' seconds remaining';
        if (timeLeft <= 0) {
            clearInterval(timeInterval);
            prompUserInitials();
        }
        timeLeft--;
    }, 1000);
}

// function populateQuestions
function populateQuestion() {
    var quiz = myQuestions[currentQuestionNumber];
    console.log(quiz.question);
    var questionElement = document.getElementById("question");
    questionElement.innerHTML = quiz.question;
    answerA.innerHTML = quiz.answers.a;
    answerB.innerHTML = quiz.answers.b;
    answerC.innerHTML = quiz.answers.c;
    answerD.innerHTML = quiz.answers.d;
}

// function answerClicked
function answerClicked(answer) {
    var quiz = myQuestions[currentQuestionNumber];
    var isCorrectAnswer = quiz.correctAnswer === answer;
    if (isCorrectAnswer) {
        document.getElementById("answer_" + answer).classList.add("correct_answer");
        currentScore++;
    } else {
        document.getElementById("answer_" + answer).classList.add("wrong_answer");
        timeLeft = timeLeft - 10;
    }
    enableDisableButton(true);




    // if (currentQuestionNumber + 1 === myQuestions.length) {
    //     prompUserInitials();
    // } else {
    //     currentQuestionNumber++;

    //     // change css to give user feedback
    //     // set 1 second timer and then call function below
    //     populateQuestion();
    // }
}

function enableDisableButton(isDisable) {
    answerA.disabled = isDisable;
    answerB.disabled = isDisable;
    answerC.disabled = isDisable;
    answerD.disabled = isDisable;
}

//funtion prompUserInitials
function prompUserInitials() {
    var questionsWrapper = document.getElementById("questions_wrapper");
    questionsWrapper.classList.add("hide");
    var userInfo = document.getElementById("user_info");
    userInfo.classList.remove("hide");
    var userInitials = document.getElementById('initials_button');
    var stringInitials = JSON.stringify(userInitials);
    localStorage.setItem("User Initials", stringInitials);
    console.log(localStorage);
    // promptFinalScore();
}

//function promptFinalScore
// function promptFinalScore() {
//     var questionsWrapper = document.getElementById("questions_wrapper");
//     questionsWrapper.classList.add("hide");
//     var userInfo = document.getElementById("user_info");
//     userInfo.classList.add("hide");
//     var finalScore = document.getElementById("final_score");
//     finalScore.classList.remove("hide");

// }





