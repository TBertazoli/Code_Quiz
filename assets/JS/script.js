//array questions
var myQuestions = [
    {
        question: "How Java Script can be used to change the HTML content?",
        answers: {
            a: 'A: document.getElementById("demo").innsertHTML = "Hello"',
            b: 'B: document.getElementById("demo").innerHTML = "Hello World"',
            c: 'C: document.getElementById("demo").style.fontSize = "35px"',
            d: 'D: document.getElementById("demo").addHTML = "Hello"'
        },
        correctAnswer: 'B'
    },

    {
        question: "Given the code below: </br></br> var myCar = \"Hyundai\"; </br> function cars () { </br > &nbsp&nbsp var myCar = \"Toyota\"; </br > &nbsp&nbsp console.log(myCar);</br>}</br>What will show in the console?",
        answers: {
            a: 'A: myCar',
            b: 'B: Hyundai',
            c: 'C: Toyota',
            d: 'D: cars'
        },
        correctAnswer: 'C'
    },

    {
        question: "Which of the following type of variable is visible everywhere in your JavaSCript code?",
        answers: {
            a: "A: Local variable",
            b: "B: Global variable",
            c: "C: Both of the above",
            d: "D: None of the above"
        },
        correctAnswer: 'B'
    },

    // {
    //     question:" Which of the following type of variable is visible everywhere in your JavaScript code?"
    //     answers: {
    //         a:
    //         b:
    //         c:
    //         d:
    //     },
    //     correctAnswer:
    // },

    // {
    //     question:
    //     answers: {
    //         a:
    //         b:
    //         c:
    //         d:
    //     },
    //     correctAnswer:
    // },

    // {
    //     question:
    //     answers: {
    //         a:
    //         b:
    //         c:
    //         d:
    //     },
    //     correctAnswer:
    // },

    // {
    //     question:
    //     answers: {
    //         a:
    //         b:
    //         c:
    //         d:
    //     },
    //     correctAnswer:
    // },

    // {
    //     question:
    //     answers: {
    //         a:
    //         b:
    //         c:
    //         d:
    //     },
    //     correctAnswer:
    // },

];

var currentQuestionNumber = 0;
var currentScore = 0;
var timeLeft = myQuestions.length * 15; // 15 seconds per question
var timerEl = document.getElementById('timer');


// click event listener and call startQuiz function
document.getElementById("start_quiz").addEventListener("click", startQuiz);

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


// function  startQuiz
function startQuiz() {
    var startQuizWrapper = document.getElementById("start_quiz_wrapper");
    startQuizWrapper.classList.add("hide");
    var questionsWrapper = document.getElementById("questions_wrapper");
    questionsWrapper.classList.remove("hide");
    countdown();
    populateQuestion();
}

// function populateQuestions
function populateQuestion() {
    var quiz = myQuestions[currentQuestionNumber];
    console.log(quiz.question);
    var questionElement = document.getElementById("question");
    questionElement.innerHTML = quiz.question;
    var answerA = document.getElementById("answer_a");
    answerA.innerHTML = quiz.answers.a;
    var answerB = document.getElementById("answer_b");
    answerB.innerHTML = quiz.answers.b;
    var answerC = document.getElementById("answer_c");
    answerC.innerHTML = quiz.answers.c;
    var answerD = document.getElementById("answer_d");
    answerD.innerHTML = quiz.answers.d;
}

// function answerClicked
function answerClicked(answer) {
    var quiz = myQuestions[currentQuestionNumber];
    if (quiz.correctAnswer === answer) {
        document.getElementById("answer_output").innerHTML = "Correct";
        currentScore++;
    } else {
        document.getElementById("answer_output").innerHTML = "Wrong";
        timeLeft = timeLeft - 10;
    }

    if (currentQuestionNumber + 1 === myQuestions.length) {
        prompUserInitials();
    } else {
        currentQuestionNumber++;
        // change css to give user feedback
        // set 1 second timer and then call function below
        populateQuestion();
    }
}

//funtion prompUserInitials
function prompUserInitials() {
    var questionsWrapper = document.getElementById("questions_wrapper");
    questionsWrapper.classList.add("hide");
    var userInfo = document.getElementById("user_info");
    userInfo.classList.remove("hide");
}

//function promptFinalScore
function promptFinalScore() {
    var questionsWrapper = document.getElementById("questions_wrapper");
    questionsWrapper.classList.add("hide");
    var userInfo = document.getElementById("user_info");
    userInfo.classList.add("hide");
    var finalScore = document.getElementById("final_score");
    finalScore.classList.remove("hide");
}





