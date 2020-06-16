//use import statements at the top

//   <!-- A user selects rock, paper, or scissors
//   Computer randomly chooses
//   hint: have your choices in an array and randomly choose 
//   Display the user and computers choice on the screen
//   Display the winner -->


// display the winner/tie
// want to play again?         
// if yes/no? exit



//var userChoice = document.getElementById('user-choice');
var compChoice = document.getElementById('comp-choice');

document.getElementById('paper').addEventListener("click", function() {
  userChoice = "paper";
  return userChoice;
})

function userPlay() {
  userChoice = prompt("Choose rock, paper or scissors.")
  text = "You chose "
  return text + userChoice;
}


function compPlay() {
    compSelect = ["rock", "paper", "scissors"]
    compChoice = compSelect[Math.floor(Math.random() * compSelect.length)];
    text = "The computer chose "
    alert(text + compChoice);
  }


  var text;

  function winner() {
      if (userChoice === compChoice) {
          text = "You tied!"}
      else if (userChoice == "rock" && compChoice == "scissors") {
          text = "You win!"
      }   
      else if (userChoice == "rock" && compChoice == "paper") {
          text = "You lose ... paper covers rock!"   
      }
      else if (userChoice == "paper" && compChoice == "scissors") {
        text = "You lose ... scissors cuts paper!";
      }
      else if (userChoice == "paper" && compChoice == "rock") {
        text = "You win!"
      }
      else if (userChoice == "scissors" && compChoice == "rock") {
          text = "You lose. The rock busts the scissors"
      }
      else if (userChoice == "scissors" && compChoice == "paper") {
          text = "You win! Scissors cut paper!"
      }
    alert(text);
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
  // window.userInput2
}


userPlay()
compPlay()
winner()
replay()

// document.getElementById("paper").addEventListener("click", function() {
//   myFunction(p1, p2);
// });