"use strict";

let question1 = new Question("What country has the most natural lakes?", ["Brazil", "USA", "Russia", "Canada"], "Canada");
let question2 = new Question("What is the oldest city in the world?", ["Damascus", "Jerusalem", "Cairo", "Athens"], "Damascus");
let question3 = new Question("What is the smallest country on Earth?", ["Liechtenstein", "Monaco", "Vatican City", "San Marino"], 
                            "Vatican City");
let question4 = new Question("What is the highest waterfall in Europe?", ["Krimml, Austria", "Rhine, Germany", "Langfoss, Norway", 
                            "Dettifoss, Iceland"], "Rhine, Germany");
let question5 = new Question("What is the tallest mountain in North America?", ["Denali, Alaska", "Fairweather, British Columbia", 
                            "Rushmore, South Dakota", "King Peak, Yukon"], "Denali, Alaska");
let question6 = new Question("What is the fastest flowing river in the world?", ["Yangtze", "Amazon", "Volga", "Mississippi"], "Amazon");
let question7 = new Question("What U.S. state is home to Yellowstone National Park?", ["Utah", "Colorado", "Wyoming", "Texas"], "Wyoming");
let question8 = new Question("What is the oldest active volcano on Earth?", ["Etna", "Yasur", "Olympus", "Fuji"], "Etna");
let question9 = new Question("What continent contains the most fresh water?", ["Antarctica", "North America", "Africa", "Asia"], "Antarctica");
let question10 = new Question("What is the executive capital of South Africa?", ["Johannesburg", "Cape Town", "Bloemfontein", "Pretoria"], 
                            "Pretoria");
let question11 = new Question("What is the coldest sea on Earth?", ["Persian Gulf", "White", "Baltic", "Caspian"], "White");
let question12 = new Question("How many countries are there in Africa?", ["39", "46", "54", "61"], "54");
let question13 = new Question("Lake Titicaca sits on the border between what two nations?", ["Brazil and Paraguay", "Bolivia and Peru", 
                              "Ecuador and Columbia", "Argentina and Chile"], "Bolivia and Peru");
let question14 = new Question("What ocean is home to 75% of the Earth's volcanoes?", ["Atlantic", "Arctic", "Indian", "Pacific"], "Pacific");
let question15 = new Question("What strait separates Africa and Europe?", ["Magellan", "Bering", "Gibraltar", "Yucatan"], "Gibraltar");
let question16 = new Question("What is the largest island in the Caribbean Sea?", ["Barbados", "Cuba", "Bahamas", "Puerto Rico"], "Cuba");
let question17 = new Question("What is the largest lake in Africa?", ["Victoria", "Tanganyika", "Edward", "Albert"], "Victoria");
let question18 = new Question("Which city located on the west coast of Italy", ["Pescara", "Napoli", "Bari", "Venezia"], "Napoli");
let question19 = new Question("Which country has the most volcanoes?", ["Japan", "Chile", "USA", "Indonesia"], "Indonesia");
let question20 = new Question("Canada is made up of how many provinces?", ["8", "9", "10", "11"], "10");
let arrayQuestions = [question1, question2, question3, question4, question5, question6, question7, question8, 
                      question9, question10, question11, question12, question13, question14, question15, question16, 
                      question17, question18, question19, question20];
let initialArrayQuestionsLength = arrayQuestions.length;
let currentScore = 0;
let randomNumber;

function Question(question, answers, correctAnswer) {
  this.question = question;
  this.answers = answers;
  this.correctAnswer = correctAnswer;
}
  
Question.prototype.displayQA = function() {
  document.querySelector(".question__heading").innerHTML = this.question;
  for (let i=0; i < this.answers.length; i++) {
    document.querySelector(".button-container-" + (i + 1) + "__button").innerHTML = this.answers[i];
  }            
}

function clickButton1() {
  if (document.querySelector(".button-container-1__button").innerHTML == arrayQuestions[randomNumber].correctAnswer) {
    currentScore++;
    document.querySelector(".button-container-1__button").classList.add("correct");
  } else {
    document.querySelector(".button-container-1__button").classList.add("incorrect");
  }
  buttonsDisable();
  document.querySelector(".score__current-score").innerHTML = currentScore;
  arrayQuestions.splice(randomNumber, 1);
  document.querySelector(".score__final-score").innerHTML = finalScore();
  setTimeout(newQuestion, 1500);
}
  
function clickButton2() {
  if (document.querySelector(".button-container-2__button").innerHTML == arrayQuestions[randomNumber].correctAnswer) {
    currentScore++;
    document.querySelector(".button-container-2__button").classList.add("correct");
  } else {
    document.querySelector(".button-container-2__button").classList.add("incorrect");
  }
  buttonsDisable();
  document.querySelector(".score__current-score").innerHTML = currentScore;
  arrayQuestions.splice(randomNumber, 1);
  document.querySelector(".score__final-score").innerHTML = finalScore();
  setTimeout(newQuestion, 1500);
}

function clickButton3() {
  if (document.querySelector(".button-container-3__button").innerHTML == arrayQuestions[randomNumber].correctAnswer) {
    currentScore++;
    document.querySelector(".button-container-3__button").classList.add("correct");
  } else {
    document.querySelector(".button-container-3__button").classList.add("incorrect");
  }
  buttonsDisable();
  document.querySelector(".score__current-score").innerHTML = currentScore;
  arrayQuestions.splice(randomNumber, 1);
  document.querySelector(".score__final-score").innerHTML = finalScore();
  setTimeout(newQuestion, 1500);
}

function clickButton4() {
  if (document.querySelector(".button-container-4__button").innerHTML == arrayQuestions[randomNumber].correctAnswer) {
    currentScore++;
    document.querySelector(".button-container-4__button").classList.add("correct");
  } else {
    document.querySelector(".button-container-4__button").classList.add("incorrect");
  }
  buttonsDisable();
  document.querySelector(".score__current-score").innerHTML = currentScore;
  arrayQuestions.splice(randomNumber, 1);
  document.querySelector(".score__final-score").innerHTML = finalScore();
  setTimeout(newQuestion, 1500);
}

function removeCorrectAndIncorrectClasses() {
  document.querySelector(".button-container-1__button").classList.remove("correct");
  document.querySelector(".button-container-1__button").classList.remove("incorrect");
  document.querySelector(".button-container-2__button").classList.remove("correct");
  document.querySelector(".button-container-2__button").classList.remove("incorrect");
  document.querySelector(".button-container-3__button").classList.remove("correct");
  document.querySelector(".button-container-3__button").classList.remove("incorrect");
  document.querySelector(".button-container-4__button").classList.remove("correct");
  document.querySelector(".button-container-4__button").classList.remove("incorrect");
}

function newQuestion() {
  document.querySelector(".end-game-result").classList.remove("visible");
  document.querySelector(".start-over").classList.remove("visible");
  document.querySelector(".end-game-result").classList.add("hidden");
  document.querySelector(".start-over").classList.add("hidden");
  document.querySelector(".score__current-score").innerHTML = currentScore;
  document.querySelector(".score__final-score").innerHTML = finalScore();
  removeCorrectAndIncorrectClasses();
  buttonsEnable();
  if (arrayQuestions.length == 0) {
    buttonsDisable();
    document.querySelector(".end-game-result__current-score").innerHTML = currentScore;
    document.querySelector(".end-game-result__final-score").innerHTML = finalScore();
    if (currentScore >= initialArrayQuestionsLength * 0.9) {
      document.querySelector(".end-game-result__text").textContent = "You are the best!";
    } else if (currentScore >= initialArrayQuestionsLength * 0.7) {
      document.querySelector(".end-game-result__text").textContent = "You know a lot. Good job!";
    } else if (currentScore >= initialArrayQuestionsLength * 0.5) {
      document.querySelector(".end-game-result__text").textContent = "That is a good result!";
    } else {
      document.querySelector(".end-game-result__text").textContent = "Not bad. Better luck next time!";
    }
    document.querySelector(".end-game-result").classList.add("visible");
    document.querySelector(".start-over").classList.add("visible");
    document.querySelector(".end-game-result").classList.remove("hidden");
    document.querySelector(".start-over").classList.remove("hidden");
  } else {
    randomNumber = Math.floor(Math.random() * arrayQuestions.length);
    arrayQuestions[randomNumber].displayQA();
  }   
}

function finalScore() {
  return initialArrayQuestionsLength - arrayQuestions.length;
}

function buttonsDisable() {
  document.querySelector(".button-container-1__button").disabled = true;
  document.querySelector(".button-container-2__button").disabled = true;
  document.querySelector(".button-container-3__button").disabled = true;
  document.querySelector(".button-container-4__button").disabled = true;
}

function buttonsEnable() {
  document.querySelector(".button-container-1__button").disabled = false;
  document.querySelector(".button-container-2__button").disabled = false;
  document.querySelector(".button-container-3__button").disabled = false;
  document.querySelector(".button-container-4__button").disabled = false;
}

function newGame() {
  window.location.reload();
}

newQuestion();
document.querySelector(".button-container-1__button").addEventListener("click", clickButton1); 
document.querySelector(".button-container-2__button").addEventListener("click", clickButton2); 
document.querySelector(".button-container-3__button").addEventListener("click", clickButton3); 
document.querySelector(".button-container-4__button").addEventListener("click", clickButton4); 
document.querySelector(".start-over__button").addEventListener("click", newGame);