var header = document.querySelector(".header");
var main = document.querySelector(".main");
var startButton = document.querySelector(".startButton");
var container = document.querySelector(".container");
var question = document.querySelector(".question");
var ask = document.querySelector(".ask");
var endContainer = document.querySelector(".endContainer");
var highScore = document.querySelector(".highScore");
var seconds = document.querySelector("#seconds");
var timerContainer = document.querySelector(".timer");
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
// var timeRemain = document.getElementById("timer");
var submitButton = document.querySelector(".submitButton");
var goBack = document.querySelector(".goBack");
var runningScore = 0;
var feedback = document.getElementById("feedback");
var footerText = document.getElementById("footerText");
var listHighScores = document.getElementById("listHighScores");
var viewHighScore = document.querySelector("#viewHighScore");
var clear = document.querySelector(".clear");

// retrive saved scores from local storage, or set to emptyi array.
var savedHighScoresArray = JSON.parse(localStorage.getItem("savedScores")) || [];
console.log('saved high scores are', savedHighScoresArray);

// Start with all hidden, except begin quiz main class DONE
container.style.display = 'none';
endContainer.style.display = 'none';
highScore.style.display = 'none';

var quizTime = seconds.textContent;
//console.log(quizTime);
// quizTime must match HTML text for seconds. 

var currentQuestionData; // this is a holder for question data

// array of questions.  function nextQuestion to loop through these. DONE
var quiz = [];
var interval;
var quizTime = 50;

function countdown() {
    // console.log("countdown");
    quizTime = 50;
    var interval = setInterval(function () {
        // console.log(quizTime);
        quizTime--;
        seconds.textContent = quizTime;
        if (quizTime <= 0) {
            clearInterval(interval);
            allDone();
            timerContainer.style.display = 'block';
            timerContainer.textContent = "Time is up!";
        }
    }, 1000);
    console.log('created interval', interval);
}

function init() {
    console.log('init');
    timerContainer.style.display = 'block';
    feedback.textContent = "";
    quiz = [
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
        }]
}

function nextQuestion() {
    // if array is empty then All done! and hide question.  DONE
    if (currentQuestionData = quiz.shift()) {
        console.log("currentQuestionData", currentQuestionData);
        question.textContent = currentQuestionData.question;
        answer1.textContent = currentQuestionData.choices[0];
        answer2.textContent = currentQuestionData.choices[1];
        answer3.textContent = currentQuestionData.choices[2];
        answer4.textContent = currentQuestionData.choices[3];
    } else {
        allDone();
    }
}

function checkAnswer(answer) {
    console.log("checkAnswer", this.textContent);
    console.log("currentQuestionData.answer", currentQuestionData.answer);

    footerText.style.display = "block";
    feedback.style.display = "block";

    if (this.textContent === currentQuestionData.answer) {
        runningScore = runningScore + 10;
        feedback.textContent = "Correct!";
        console.log(runningScore);
        // set feedback
    } else {
        quizTime -= 5;
        feedback.textContent = "Wrong!";
        // fail reduce timer! DONE
        // set feedback
    }
    nextQuestion();
}

//function show ending with all done and then high score. Use JSON to stringify and then parse data. If text for initials is empty, display message--see M4A21/22.  Go back button to refill question array. 
function allDone() {
    console.log("interval ", interval);
    // clearInterval(interval);
    main.style.display = 'none';
    container.style.display = 'none';
    endContainer.style.display = 'block';
    highScore.style.display = 'none';
    timerContainer.style.display = 'none';
    initials.value = "";
    userScore.textContent = runningScore;

}
// Last Screen:  display High Scores, Go Back, Clear Data
function endScore(event) {
    event.preventDefault();
    main.style.display = 'none';
    container.style.display = 'none';
    endContainer.style.display = 'none';
    highScore.style.display = 'block';
    seconds.style.display = 'hidden';
    timerContainer.style.display = 'none';

    
    
    savedHighScoresArray = JSON.parse(localStorage.getItem("savedScores")) || [];
    for ( i = 0; i < savedHighScoresArray.length; i++)  {
        var newDivRow = document.createElement("div");
        newDivRow.innerHTML = savedHighScoresArray[i].name + ": " + savedHighScoresArray[i].score;
        listHighScores.append(newDivRow);
    }
}

startButton.addEventListener("click", function () {
    init();
    countdown();
    // console.log("hello");
    container.style.display = 'block';
    main.style.display = 'none';
    nextQuestion();
})

answer1.addEventListener("click", checkAnswer);
answer2.addEventListener("click", checkAnswer);
answer3.addEventListener("click", checkAnswer);
answer4.addEventListener("click", checkAnswer);

submitButton.addEventListener("click", function (event) {
    if (!initials.value) {
        window.alert("Please enter your initials!");
        return;
    }

    var userObj = {
        name: initials.value,
        score: runningScore,
    }

    savedHighScoresArray.push(userObj);
    localStorage.setItem("savedScores", JSON.stringify(savedHighScoresArray));
    endScore(event);

});

goBack.addEventListener("click", function () {
    console.log("goBack click");
    main.style.display = "block";
    highScore.style.display = "none";
});

viewHighScore.addEventListener("click", function ()   {
    endScore(event);
})

clear.addEventListener("click", function () {
    window.localStorage.clear("savedScores");
    listHighScores.style.display = "none";
})
