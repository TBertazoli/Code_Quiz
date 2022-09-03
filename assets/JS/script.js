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

    //     {
    //         question:
    //             answers: {
    //         a:
    //             b:
    //         c:
    //             d:
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


// click event listener and call startQuiz function
document.getElementById("start_quiz").addEventListener("click", startQuiz);

// function  startQuiz
function startQuiz() {
    var startQuizWrapper = document.getElementById("start_quiz_wrapper");
    startQuizWrapper.classList.add("hide");
    var questionsWrapper = document.getElementById("questions_wrapper");
    questionsWrapper.classList.remove("hide");
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
        currentScore++;
        console.log("correct answer");
    } else {
        console.log("wrong answer");
    }

    if (currentQuestionNumber + 1 === myQuestions.length) {
        prompUserInitials();
    } else {
        currentQuestionNumber++;
        populateQuestion();
    }
}







