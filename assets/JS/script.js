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


// click event listener
document.getElementById("start_quiz").addEventListener("click", startQuiz);

// function  
function startQuiz() {
    var startQuizWrapper = document.getElementById("start_quiz_wrapper");
    startQuizWrapper.classList.add("hide");
    var questionsWrapper = document.getElementById("questions_wrapper");
    questionsWrapper.classList.remove("hide");
    populateQuestion();
}








