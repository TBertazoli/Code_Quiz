//Questions Array
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
    // {
    //     question: "Given the code below: </br></br> var myCar = \"Hyundai\"; </br> function cars () { </br > &nbsp&nbsp var myCar = \"Toyota\"; </br > &nbsp&nbsp console.log(myCar);</br>}</br>What will show in the console?",
    //     answers: {
    //         a: "A: myCar",
    //         b: "B: Hyundai",
    //         c: "C: Toyota",
    //         d: "D: cars"
    //     },
    //     correctAnswer: "C"
    // },
    // {
    //     question: "Which of the following type of variable is visible everywhere in your JavaSCript code?",
    //     answers: {
    //         a: "A: Local variable",
    //         b: "B: Global variable",
    //         c: "C: Both of the above",
    //         d: "D: None of the above"
    //     },
    //     correctAnswer: "B"
    // },
    // {
    //     question: "Which of the following statements is an example of css style in Java Script?",
    //     answers: {
    //         a: "A: document.getElementById('demo').innerHTML = cars;",
    //         b: "B: document.addElement.text = 'hello';",
    //         c: "C: document.getElementById ('myText'). className = 'anyclass';",
    //         d: "D: document.getElementById(myText).className = 'anyclass';"
    //     },
    //     correctAnswer: "C"
    // },
    // {
    //     question: "Which of the following function of String object returns the calling string value converted to lower case?",
    //     answers: {
    //         a: "A: toLowerCase()",
    //         b: "B: substring()",
    //         c: "C: toupperCase()",
    //         d: "D: toString()"
    //     },
    //     correctAnswer: "A"
    // },
    // {
    //     question: "Which of the following is an example of an array?",
    //     answers: {
    //         a: "A: var seasonOfTheYear = {Winter,Spring,Summer,Fall};",
    //         b: "B: var seasonoftheyear = (Winter, Spring, Summer, Fall);",
    //         c: "C: var seasonOfTheYear = [Winter, Spring, Summer, Fall];",
    //         d: "D: var seasonOfTheYear = ['Winter', 'Spring', 'Summer', 'Fall'];"
    //     },
    //     correctAnswer: "D"
    // },
    // {
    //     question: "Which of the folowing is used to assign a value to a variable?",
    //     answers: {
    //         a: "A: +",
    //         b: "B: ===",
    //         c: "C: ()",
    //         d: "D: ="
    //     },
    //     correctAnswer: "D"
    // },
    // {
    //     question: "How does a for loop start?",
    //     answers: {
    //         a: "A: for(i=0)",
    //         b: "B: for(i=0; i<=8)",
    //         c: "C: for(i=0; i<=8; i++)",
    //         d: "D: for(i<=8; i++)"
    //     },
    //     correctAnswer: "C"
    // },
    {
        question: "What is the correct syntax for referring to an external script called 'quiz.js'?",
        answers: {
            a: 'A: &ltscript src="quiz.js"&gt',
            b: "B: &ltscript href='quiz.js'&gt",
            c: "C: &ltscript name='quiz.js'&gt",
            d: "D: &ltscript='quiz.js'&gt"
        },
        correctAnswer: "A"
    },
    {
        question: "What will the following code Return: Boolean(8>10)?",
        answers: {
            a: "A: undefined",
            b: "B: true",
            c: "C: yes",
            d: "D: false"
        },
        correctAnswer: "D"
    },
];

//global variables
var currentQuestionNumber = 0;
var currentScore = 0;
var timeLeft = myQuestions.length * 6; // 6 seconds per question
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
    countdown();
    populateQuestion();
}

//function countdown
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

// function populateQuestion
function populateQuestion() {
    var quiz = myQuestions[currentQuestionNumber]; //global variable
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
    var quiz = myQuestions[currentQuestionNumber]; //pode virar global variable
    var isCorrectAnswer = quiz.correctAnswer === answer;
    var answerElement = document.getElementById("answer_" + answer);
    if (isCorrectAnswer) {
        answerElement.classList.add("correct_answer");
        currentScore++;
    } else {
        answerElement.classList.add("wrong_answer");
        timeLeft = timeLeft - 2;
    }

    enableDisableButton(true);
    setTimeout(() => {
        enableDisableButton(false);
        answerElement.classList.remove("correct_answer");
        answerElement.classList.remove("wrong_answer");
        if (currentQuestionNumber + 1 < myQuestions.length) {
            currentQuestionNumber++;
            populateQuestion();
        } else {
            prompUserInitials();
        }
    }, 1000);
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
    var finalScoreOutput = document.getElementById("final_score_output");
    finalScoreOutput.innerHTML = "Your Final Score is: " + currentScore;
}

//fuction submitSCore
function submitScore() {
    var userInitials = document.getElementById('initials').value;
    localStorage.setItem(userInitials, currentScore);
    promptFinalScore();
}

//function promptFinalScore
function promptFinalScore() {
    var userInfo = document.getElementById("user_info");
    userInfo.classList.add("hide");
    var finalScore = document.getElementById("final_score");
    finalScore.classList.remove("hide");

    var keys = Object.keys(localStorage);
    var scoreList = document.getElementById("score_list");
    var highScore = [];
    keys.forEach(key => {
        highScore.push({ "initials": key, "score": localStorage.getItem(key) })

    })
    highScore.sort(function (a, b) {
        return b.score - a.score;
    });
    highScore.forEach(item => {
        var li = document.createElement("li");
        li.innerHTML = item.initials + " - " + item.score;
        scoreList.appendChild(li);
    });
}

function goBack() {
    var finalScore = document.getElementById("final_score");
    finalScore.classList.add("hide");
    var startQuizWrapper = document.getElementById("start_quiz_wrapper");
    startQuizWrapper.classList.remove("hide");
}

function clearHighScores() {
    localStorage.clear();
    goBack();
}






