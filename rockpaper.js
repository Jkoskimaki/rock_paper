//use import statements at the top

//   <!-- A user selects rock, paper, or scissors
//   Computer randomly chooses
//   hint: have your choices in an array and randomly choose 
//   Display the user and computers choice on the screen
//   Display the winner -->


// display the winner/tie
// want to play again?         
// if yes/no? exit

// function userChoice(choice, { rock, paper, scissors } = {} ) {
//     //   console.log(likes)
//     //   console.log(followers)
//     //   console.log(following)
//     // }

var userInput = prompt("Choose rock, paper or scissors.")
var compOption = ["rock", "paper", "scissors"]
const compAnswer = compOption[Math.floor(Math.random() * compOption.length)];


function userPlay() {
    text = "You chose "
    alert(text + userInput);
  }

  function compPlay() {
    text = "The computer chose "
    alert(text + compAnswer);
  }

  compPlay(compAnswer)

  var text;

  function winner() {
      if (userInput === compAnswer) {
          text = "You tied!"}
      else if (userInput == "rock" && compAnswer == "scissors") {
          text = "You win!"
      }   
      else if (userInput == "rock" && compAnswer == "paper") {
          text = "You lose ... paper covers rock!"   
      }
      else if (userInput == "paper" && compAnswer == "scissors") {
        text = "You lose ... scissors cuts paper!";
      }
      else if (userInput == "paper" && compAnswer == "rock") {
        text = "You win!"
      }
      else if (userInput == "scissors" && compAnswer == "rock") {
          text = "You lose. The rock busts the scissors"
      }
      else if (userInput == "scissors" && compAnswer == "paper") {
          text = "You win! Scissors cut paper!"
      }
    alert(text);
  }

winner(userInput,compAnswer)

var userInput2 = prompt("Would you like to play again? (yes/no)")

function replay() {

  do {
      userPlay()
      compPlay(compAnswer)
      winner(userInput, compAnswer)
  }  
  while (userInput2 == "yes");
  // window.userInput2
}

replay(userInput, compAnswer)

// do {
//   code block to be executed
// }
// while (condition);