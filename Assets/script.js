var main = document.querySelector(".main");
var startButton = document.querySelector(".startButton");
var container = document.querySelector(".container");
var question = document.querySelector(".question");
var ask = document.querySelector(".ask");
var endContainer = document.querySelector(".endContainer");
var highScore = document.querySelector(".highScore");
var seconds = document.querySelector("#seconds");
var answer1 = document.querySelector(".answer1");
var answer2 = document.querySelector(".answer2");
var answer3 = document.querySelector(".answer3");
var answer4 = document.querySelector(".answer4");
var button1 = document.querySelector(".button1");
var button2 = document.querySelector(".button2");
var button3 = document.querySelector(".button3");
var button4 = document.querySelector(".button4");
var userScore = document.querySelector("#userScore");
var initials = document.querySelector("#initials");
var timeRemain = document.querySelector("#timeRemain");
var submitButton = document.querySelector(".submitButton");
var correctAnswer = 0;


// Start with all hidden, except begin quiz main class DONE
container.style.display = 'none';
endContainer.style.display = 'none';
highScore.style.display = 'none';

var quizTime = 45;
// quizTime must match HTML text for seconds. 

var currentQuestionData; // this is a holder for question data


// array of questions.  function nextQuestion to loop through these. DONE
var quiz = [
    {
        order: 1,
        question: "Commonly used data types DO NOT include:",
        answer: "3. alerts",
        choices: [
            "1. strings",
            "2. booleans",
            "3. alerts",
            "4. numbers",]
    },

    {
        order: 2,
        question: "The condition in an if/else statement is enclosed with:",
        answer: "2. curly brackets",
        choices: [
            "1. quotes",
            "2. curly brackets",
            "3. parenthesis",
            "4. square brackets",]
    },
    {
        order: 3,
        question: "A very useful tool used during development and debugging for printing content to the debugger is:",
        answer: "4. console.log",
        choices: [
            "1. JavaScript",
            "2. terminal/bash",
            "3. for loops",
            "4. console.log",]
    },
    {
        order: 4,
        question: "String values must be enclosed within _____ when being assigned to variables.",
        answer: "4. parenthesis",
        choices: [
            "1. commas",
            "2. curly brackets",
            "3. quotes",
            "4. parenthesis",]
    },
    {
        order: 5,
        question: "Arrays in JavaScript can be used to store _____.",
        answer: "4. all of the above",
        choices: [
            "1. numbers and strings",
            "2. other arrays",
            "3. booleans",
            "4. all of the above",]
    },

];

function countdown() {
    var interval = setInterval(function () {
        quizTime--
        // console.log(quizTime);
        seconds.textContent = quizTime;
        if (quizTime == 0) {
            clearInterval(interval);
            allDone();
        }
    }, 1000);
}

function nextQuestion() {
    // if array is empty then All done! and hide question.  DONE
    if (currentQuestionData = quiz.shift())  {
    console.log("currentQuestionData", currentQuestionData);
    question.textContent = currentQuestionData.question;
    answer1.textContent = currentQuestionData.choices[0];
    answer2.textContent = currentQuestionData.choices[1];
    answer3.textContent = currentQuestionData.choices[2];
    answer4.textContent = currentQuestionData.choices[3];
    } else  {
        allDone();
    }
}

function checkAnswer()  {
    console.log("checkAnswer", this.textContent);
    console.log("currentQuestionData.answer", currentQuestionData.answer);
    if(this.textContent === currentQuestionData.answer) {
        correctAnswer = correctAnswer + 10; 
        console.log(correctAnswer);
        // set feedback
    } else {
        quizTime -=5; 
        // fail reduce timer! DONE
        // set feedback
    }
    nextQuestion();
}

//function show ending with all done and then high score. Use JSON to stringify and then parse data. If text for initials is empty, display message--see M4A21/22.  Go back button to refill question array. 
function allDone()  {
    // console.log("allDone");
    main.style.display = 'none';
    container.style.display = 'none';
    endContainer.style.display = 'block';
    highScore.style.display = 'none';
    seconds.style.display = 'none';
    timeRemain.style.display = 'none';

    userScore.textContent = correctAnswer;

}

function highScore()    {

}

startButton.addEventListener("click", function () {
    // console.log("hello");
    container.style.display = 'block';
    main.style.display = 'none';
    countdown();
    nextQuestion();
})

answer1.addEventListener("click", checkAnswer);
answer2.addEventListener("click", checkAnswer);
answer3.addEventListener("click", checkAnswer);
answer4.addEventListener("click", checkAnswer);

submitButton.addEventListener("click", function(event)  {
    if (!initials.value)    {
        window.alert("Please enter your initials!");
        return;
    } else {
        allDone(event);
    }
});

