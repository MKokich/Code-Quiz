// Global variables
var generateBtn = document.querySelector("#generate");
var timerEl = document.getElementById("set-time");
var questionsEl = document.getElementById("questions");
var choicesEl = document.getElementById("choices");
var questions1El = document.getElementById("questions1");
var questions2El = document.getElementById("questions2");
var wrapper = document.getElementById("wrapper");
var currentQuestion = 0;
var interval;
// GIVEN I am taking a code quiz

// WHEN I click the start button

generateBtn.addEventListener("click",function(){
setTime();
askQuestion();
})

  

// THEN a timer starts and I am presented with a question
// Timer that counts down from 30
function setTime() {
    console.log("set time")
    var timeLeft = 60;
    interval = setInterval(function(){
        timeLeft--;
        timerEl.textContent = "Time Left: " + timeLeft
        if (timeLeft < 1){
            clearInterval(interval);
            alert("Sorry, your time is up!")

        }
    }, 1000)
}
    

    function askQuestion(){
      var answers = document.getElementById("answers")
        questionsEl.textContent = myQuestions[currentQuestion].question
        wrapper.append(questionsEl)
        
        myQuestions[currentQuestion].choices.forEach(function(choices){
            console.log(choices)
            var answerButton = document.createElement("button")
        answerButton.textContent = choices
        answerButton.addEventListener("click",function(event){
          console.log(event.target)
            if (myQuestions[currentQuestion].answer === event.target.textContent){
              alert ("Correct!")
            }
            else {
            alert ("Wrong!")
            }
            currentQuestion++
            answers.innerHTML = ""
            if (currentQuestion === myQuestions.length){
              gameOver()
            }
            else {
              askQuestion()
            }
            
        })
        answers.append(answerButton)
        })
    }

    function gameOver (){
      alert ("Game Over!");
      clearInterval(interval)
    }
    


    

// WHEN I answer a question

const myQuestions = [
    {
      question: "In which section do you link your CSS document to your HTML?",
      choices: ["Doesn't Matter", "Head", "Body"],
        answer: "Head",

        
      
      },
      
  
    {
      question: "Which document styles your page?",
      choices: ["HTML", "CSS", "Javascript"],
        answer: "CSS",
      
      
    },

    {
      question: "Which brackets do you use for an array?",
      choices: ["()", "{}", "[]"],
        answer: "[]",
        
      },
    
    
  ];
  
  
  

// THEN I am presented with another question

// WHEN I answer a question incorrectly

// THEN time is subtracted from the clock

// WHEN all questions are answered or the timer reaches 0

// THEN the game is over

// WHEN the game is over

// THEN I can save my initials and my score