var readlineSync = require("readline-sync");
var chalk = require("chalk");
let userId;
score = 0
function welcome() {
  userId = readlineSync.question("Please enter your name? ")
  console.log("Welcome " + userId + "!!")
  console.log(userId + " Let's see how well you know me")
  console.log("..................")

}
//array of objects

var questions = [{
  question: "How many colors are there in a rainbow? : ",
  answer: "7"
}, {
  question: "Which animal is known as the ‘Ship of the Desert? : ",
  answer: "Camel"
},
{
  question: "What type of bird lays the largest eggs? : ",
  answer: "Ostrich"
},
{
  question: "Which festival is known as the ‘Festival of flowers’? : ",
  answer: "Onam"
},
{
  question: "How many bones does an adult human have? : ",
  answer: "206"
}

];


function quiz(question, answer) {
  var userAnswer = readlineSync.question(question);
  if (userAnswer.toLowerCase() === answer.toLowerCase()) {
    console.log("You were right")
    score++;
  }
  else {
    console.log("sorry! You are wrong!!")

  }

  console.log("..................")
}

function game() {
  for (var i = 0; i < questions.length; i++) {
    var currentQuestion = questions[i];
    quiz(currentQuestion.question, currentQuestion.answer)
  }
}
function scores() {
  if (score >= 3) {
    console.log(chalk.green("You scored: ", score));
    console.log(userId + " qualified quiz" )
  } else {
    console.log(chalk.red("You scored: ", score));
    console.log(userId+" not qualified quiz")
  }
}
welcome();

game();

scores()