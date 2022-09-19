var main = document.querySelector(".main");
var startButton = document.querySelector(".startButton");
var questions = document.querySelector(".questions");
var ask = document.querySelector(".ask");
var endContainer = document.querySelector(".endContainer");
var highScore = document.querySelector(".highScore");
var seconds = document.querySelector("#seconds");

questions.style.display = 'none';
endContainer.style.display = 'none';
highScore.style.display = 'none';
startButton.addEventListener("click", function () {
    // console.log("hello");
    questions.style.display = 'block';
    main.style.display = 'none';
    countdown();
})
var quizTime = 30;
function countdown() {
    var interval = setInterval(function () {
        quizTime--
        // console.log(quizTime);
        seconds.textContent = quizTime;
        if (quizTime == 0) {
            clearInterval(interval);
            endContainer.style.display = 'block';
        }
    }, 1000);
}

var quiz = [
    {
        order: 1,
        question: "Commonly used data types DO NOT include:",
        answer: "3. alert",
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
            "4. all of the above",]
    },
    {
        order: 5,
        question: "Arrays in JavaScript can be used to store _____.",
        answer: "4. parenthesis",
        choices: [
            "1. numbers and strings",
            "2. other arrays",
            "3. booleans",
            "4. all of the above",]
    },
];
