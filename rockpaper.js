//use import statements at the top

//   <!-- A user selects rock, paper, or scissors
//   Computer randomly chooses
//   hint: have your choices in an array and randomly choose 
//   Display the user and computers choice on the screen
//   Display the winner -->

// user_hand (3 button chosen)
// comp_hand (random choice array)
//     if u.rock && c.scissors
//       winner = rock
//     elsif
//     elsif
//     elsif
//     else

// display the winner/tie
// want to play again?         
// if yes/no? exit

// function userChoice(choice, { rock, paper, scissors } = {} ) {
//     //   console.log(likes)
//     //   console.log(followers)
//     //   console.log(following)
//     // }
var userInput = prompt("Choose rock, paper or scissors.")
var compOption = ["rock", "paper", "scissor"]

// alert(userInput)

const compAnswer = compOption[Math.floor(Math.random() * compOption.length)];

function myFunction() {
  alert(compAnswer);  // referencing global foo
}

myFunction(compAnswer)

// if (hour < 18) {
//     greeting = "Good day";
//   } else {
//     greeting = "Good evening";
//   }

var text;

function winner() {
    if (userInput === compAnswer) {
        text = "You tied!"}
    else {
      text = "You lose";
}
alert(text);
}

winner(userInput,compAnswer)



// if rock vs scissors 
//   winner = rock
// if userInput.rock vs computerInput.paper
//   winner = computer/paper
// if rock vs rock
//   tie game 
// if paper vs scissors
//     winner = scissors
// if paper vs rock
//     winner = paper
// if paper vs paper
//     tie game
// if scissors vs rock
//     winner = rock
// if scissors vs paper
//     winner = scissors
// if scissors vs scissors
//     tie game






// if userInput = rock and computerInput = scissors
//     winner = User

//     var text;


// switch(userInput) {
//   case "Rock":
//     text = "Excellent choice! Martini is good for your soul.";
//     break;
//   case "Paper":
//     text = "Daiquiri is my favorite too!";
//     break;
//   case "Scissors":
//     text = "Really? Are you sure the Cosmopolitan is your favorite?";
//     break;
//   default:
//     text = "I have never heard of that one..";
//     break;
// 