var main = document.querySelector(".main");
var startButton = document.querySelector(".startButton");
var questions = document.querySelector(".questions");
var ask = document.querySelector(".ask");
var endContainer = document.querySelector(".endContainer");
var highScore = document.querySelector(".highScore");
var seconds = document.querySelector("#seconds");

questions.style.display='none';
endContainer.style.display='none';
highScore.style.display='none';
startButton.addEventListener("click", function()    {
    // console.log("hello");
    questions.style.display='block';
    main.style.display='none';
    countdown();
})
var quizTime = 30;
function countdown()    {
    var interval = setInterval(function()   {
        quizTime--
        // console.log(quizTime);
        seconds.textContent=quizTime;
    if (quizTime == 0)  {
        clearInterval(interval);
    }
    }, 1000);
}