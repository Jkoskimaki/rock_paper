//use import statements at the top

//   <!-- A user selects rock, paper, or scissors
//   Computer randomly chooses
//   hint: have your choices in an array and randomly choose 
//   Display the user and computers choice on the screen
//   Display the winner -->


// display the winner/tie
// want to play again?         
// if yes/no? exit


var userChoice = document.getElementById('user-choice');
var compChoice = document.getElementById('comp-choice');
var rock = document.getElementById("rock");
var paper = document.getElementById("paper");
var scissors = document.getElementById("scissors");

let userScore = 0;
let compScore = 0;

function compPlay() {
    compSelect = ["rock", "paper", "scissors"]
    compChoice = compSelect[Math.floor(Math.random() * compSelect.length)];
    // text = "The computer chose "
    // alert(text + compChoice);
    console.log(compChoice)
    return compChoice
  }

function userPlay() {
  paper.addEventListener("click", function() {
    userChoice == "paper";
    console.log("paper")
    //winner(compChoice + userChoice);
  })

  rock.addEventListener("click", function() {
    userChoice == "rock";
    console.log("rock")
    //winner();
  })

  scissors.addEventListener("click", function() {
    userChoice == "scissors";
    console.log("scissors")
    //winner();
  })
  return userChoice;
}

userChoice = userPlay()

// userChoice = userPlay()

// var response = 0;

// function doSomething() {
//     // some code
//     return 10;
// }
// response = doSomething();

// function userPlay() {
//   //userChoice = prompt("Choose rock, paper or scissors.")
//   text = "You chose "
//   return text + userChoice;
// }



  var text;

  function winner() {
      if (userChoice === compChoice) {
          text = "You tied!"}
      else if (userChoice == "rock" && compChoice == "scissors") {
        userScore += 1;
        text = "You win!   " + userScore + ":" + compScore;
      }   
      else if (userChoice == "rock" && compChoice == "paper") {
        compScore += 1; 
        text = "You lose ... paper covers rock!   " + userScore + ":" + compScore;
      }
      else if (userChoice == "paper" && compChoice == "scissors") {
        compScore += 1;
        text = "You lose ... scissors cuts paper!   " + userScore + ":" + compScore;
      }
      else if (userChoice == "paper" && compChoice == "rock") {
        userScore += 1;
        text = "You win!   " + userScore + ":" + compScore;
      }
      else if (userChoice == "scissors" && compChoice == "rock") {
        compScore += 1;
        text = "You lose. The rock busts the scissors   " + userScore + ":" + compScore;
      }
      else if (userChoice == "scissors" && compChoice == "paper") {
        userScore += 1;
        text = "You win! Scissors cut paper!   " + userScore + ":" + compScore;
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

compPlay()
userPlay()
winner()
