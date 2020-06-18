// A user selects rock, paper, or scissors
// Computer randomly chooses
// hint: have your choices in an array and randomly choose 
// Display the user and computers choice on the screen
// Display the winner

// Var User choice
// Computer choice
// process
// display screen
// couldn't get the game to consistently put out the right winnerLoser. Not sure why.
const playerDisplay = document.getElementById("playerDisplay")
const computerDisplay = document.getElementById("computerDisplay")
const winnerDisplay = document.getElementById("winnerDisplay")

playerInput = (userInput) =>{
  userInput = userInput.toLowerCase();
  if (userInput === 'rock', playerDisplay.innerHTML = "You Chose Rock!" || userInput==='paper', playerDisplay.innerHTML = "You chose Paper!" || userInput ==='scissors', playerDisplay.innerHTML = "You chose Scissors!" ) {
    return userInput;
  } else {
    console.log('Try Again');
  }
};

function computerInput() {
  switch(Math.floor(Math.random()*3)) {
    case 0:
    return 'rock';
    break;

    case 1:
    return 'scissor';
    break;

    case 2:
    return 'paper';
    break;
    computerDisplay.innerHTML = "Computer Chooses: "
  };
}

function winnerLoser(playerInput, computerInput) {
  if (playerInput === computerInput) {
    return "It\'s a Tie!"
  } else if (playerInput === 'rock') {
    if (computerInput === 'paper') {
      return "Computer Wins";
    } else { 
     return 'You Win';
    }
  } else if (playerInput === 'paper') {
    if (computerInput === 'scissor') {
      return "Computer Wins";
    } else {
      return "You Win" ;
    }
  } else if (playerInput === 'scissor') {
    if (computerInput === 'rock') {
      return "Computer Wins";
    } else {
      return 'You Win';
    }
  }
};

function playGame() {
  var playerChoice=playerInput(document.getElementById('input1').value);
  // computerInput()
  // var playerInput = playerInput();
  // var computerInput = computerInput()

  console.log(`You chose ${playerChoice}`)
  console.log(`Computer chose ${computerInput(document.write)}`)
  console.log(`Drumroll... ${winnerLoser(playerChoice, computerInput())}`)
}

// console.log(`You chose ${playerChoice}`)
// console.log(`Computer chose ${computerInput}`)
// console.log(`Drumroll... ${winnerLoser(playerChoice, computerInput())}`)

// after looking at the debugger, both the playerInput and the computerInput are being returned as 'undefined' in like 39 of the winnerLoser function. Need to figure out how to get it to pull from the above inputs.