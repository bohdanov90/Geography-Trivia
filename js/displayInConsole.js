"use strict";  // в полной версии код плохо работал, потому что addEventListener блоки были внутри функции displayQA


  function Question(question, answers, correctAnswer) {
    this.question = question;
    this.answers = answers;
    this.correctAnswer = correctAnswer;
  }
  
  Question.prototype.displayQA = function() {
    console.log(this.question);
    for (let i=0; i < this.answers.length; i++) {
      console.log(i + ") " + this.answers[i])
    }
    
    let askingUser = prompt("Please choose the right number in console");
    if (askingUser == this.correctAnswer) {
      console.log("You are correct!");
      score++;
      if (score == 5) {
        console.log("You are the winner!");
        console.log("Thank you for playing with us!");
      } else {
        console.log("Your score: " + score);
        arrayQuestions.splice(randomNumber, 1);
        anotherQuestion();
      }
    } else if (askingUser == "exit") {
      console.log("Thank you for playing with us!");
    } else {
      console.log("Nope!");
      console.log("Your score: " + score);
      arrayQuestions.splice(randomNumber, 1);
      anotherQuestion();
    }
  }

  function anotherQuestion() {
    if (arrayQuestions.length == 0) {
      console.log("Thank you for playing with us!");
      console.log("Your final score: " + score);
    } else {
      randomNumber = Math.floor(Math.random() * arrayQuestions.length);
      arrayQuestions[randomNumber].displayQA();
    }
  }


  let randomNumber;
  let question1 = new Question("What country has the most natural lakes?", ["Brazil", "USA", "Russia", "Canada"], 3);
  let question2 = new Question("What is the oldest city in the world?", ["Damascus", "Jerusalem", "Cairo", "Athens"], 0);
  let question3 = new Question("What is the smallest country on Earth?", ["Liechtenstein", "Monaco", "Vatican City", "San Marino"], 2);
  let question4 = new Question("What is the highest waterfall in Europe?", ["Krimml, Austria", "Rhine, Germany", "Langfoss, Norway", "Dettifoss, Iceland"], 1)
  let question5 = new Question("What is the tallest mountain in North America?", ["Denali, Alaska", "Fairweather, British Columbia", "Rushmore, South Dakota", "King Peak, Yukon"], 0)
  let question6 = new Question("What is the fastest flowing river in the world?", ["Yangtze", "Amazon", "Volga", "Mississippi"], 1);
  let question7 = new Question("What U.S. state is home to Yellowstone National Park?", ["Utah", "Colorado", "Wyoming", "Texas"], 2);
  let question8 = new Question("What is the oldest active volcano on Earth?", ["Etna", "Yasur", "Olympus", "Fuji"], 0);
  let question9 = new Question("What continent contains the most fresh water?", ["Antarctica", "North America", "Africa", "Asia"], 0);
  let question10 = new Question("What is the executive capital of South Africa?", ["Johannesburg", "Cape Town", "Bloemfontein", "Pretoria"], 3);
  let question11 = new Question("What is the coldest sea on Earth?", ["Persian Gulf", "White", "Baltic", "Caspian"], 1);
  let question12 = new Question("How many countries are there in Africa?", ["39", "46", "54", "61"], 2);
  let question13 = new Question("Lake Titicaca sits on the border between what two nations?", ["Brazil and Paraguay", "Bolivia and Peru", "Ecuador and Columbia", "Argentina and Chile"], 1);
  let question14 = new Question("What ocean is home to 75% of the Earth's volcanoes?", ["Atlantic", "Arctic", "Indian", "Pacific"], 3);
  let question15 = new Question("What strait separates Africa and Europe?", ["Magellan", "Bering", "Gibraltar", "Yucatan"], 2);
  let arrayQuestions = [question1, question2, question3, question4, question5, question6, question7, question8, question9, question10, question11, question12, question13, question14, question15];
  let score = 0;
  console.log("There are " + arrayQuestions.length + " questions in this trivia.");
  console.log("If you want to leave this game before finishing please type: 'exit'");
  anotherQuestion();
  
