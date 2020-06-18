//use import statements at the top

//   <!-- A user selects rock, paper, or scissors
//   Computer randomly chooses
//   hint: have your choices in an array and randomly choose 
//   Display the user and computers choice on the screen
//   Display the winner -->


// display the winner/tie
// want to play again?         
// if yes/no? exit


var userChoice = document.getElementById('user-choice');  //
var compChoice = document.getElementById('comp-choice');  //
var rock = document.getElementById("rock");
var paper = document.getElementById("paper");
var scissors = document.getElementById("scissors");
var text = document.getElementById("results");

let userScore = 0;
let compScore = 0;

function compPlay() {
    compSelect = ["rock", "paper", "scissors"]
    compChoice = compSelect[Math.floor(Math.random() * compSelect.length)];
    console.log(compChoice)
    return compChoice
  }


  paper.addEventListener("click", function() {
    userChoice = "paper";
    console.log("paper")
    compPlay()
    winner(compChoice, userChoice);
  })

  rock.addEventListener("click", function() {
    userChoice = "rock";
    console.log("rock")
    compPlay()
    winner(compChoice, userChoice);
  })

  scissors.addEventListener("click", function() {
    userChoice = "scissors";
    console.log("scissors")
    compPlay()
    winner(compChoice, userChoice);
  })


  function winner() {
      if (userChoice === compChoice) {
          text.innerHTML = "You tied! <br/>  Both of you played " + userChoice + " <br/>" + userScore + " : " + compScore;
        }
      else if (userChoice == "rock" && compChoice == "scissors") {
        userScore += 1;
        text.innerHTML = "You win!  <br/> You played " +userChoice + " and the computer played " + compChoice + " <br/>" + userScore + " : " + compScore;
      }   
      else if (userChoice == "rock" && compChoice == "paper") {
        compScore += 1; 
        text.innerHTML = "You lose... <br/> The computer chose paper, paper covers rock! <br/>" + userScore + " : " + compScore;
      }
      else if (userChoice == "paper" && compChoice == "scissors") {
        compScore += 1;
        text.innerHTML = "You lose... <br/> The computer chose scissors, scissors cuts paper!   <br/> " + userScore + " : " + compScore;
      }
      else if (userChoice == "paper" && compChoice == "rock") {
        userScore += 1;
        text.innerHTML = "You win! <br/> You played " +userChocie + " and the computer played " + compChoice + "<br/>" + userScore + " : " + compScore;
      }
      else if (userChoice == "scissors" && compChoice == "rock") {
        compScore += 1;
        text.innerHTML = "You lose... <br/> " +userChoice + " and the computer played " + compChoice + "<br/>" + userScore + " : " + compScore;
      }
      else if (userChoice == "scissors" && compChoice == "paper") {
        userScore += 1;
        text.innerHTML = "You win! <br/> You played " +userChocie + " and the computer played " + compChoice + "<br/>" + userScore + " : " + compScore;
      }
    return text;
  }


function replay() {
   var userInput2 = prompt("Would you like to play again? (yes/no)")

  do {
    userPlay()
    compPlay()
    winner()
    var userInput2 = prompt("Would you like to play again? (yes/no)")
  }  
  while (userInput2 == "yes");
}
