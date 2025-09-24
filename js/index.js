function pickComputerMove() {
  const randomNumber = Math.random();
  let computerMove = '';

  if( randomNumber >= 0 && randomNumber < 1/3) {
    computerMove = 'rock';
  }
  else if(randomNumber >= 1/3 && randomNumber < 2/3) {
    computerMove = 'paper';
  }
  else if (randomNumber >= 2/3 && randomNumber < 1) {
    computerMove = 'scissor';
  }
  return computerMove;
}

function playGame(playerMove) {
  const computerMove = pickComputerMove();
  let resultRPS = '';

  if(playerMove === 'paper') {
    if(computerMove === 'rock') {
        resultRPS = 'Win';
      }
    else if(computerMove === 'paper') {
        resultRPS = 'Tie';
      } 
    else if(computerMove === 'scissor') {
        resultRPS = 'Lose';
      }
    alert(`You picked ${playerMove}, computer picked ${computerMove}. ${resultRPS}`);
  } 
  else if(playerMove === 'rock') {
    if(computerMove === 'rock') {
          resultRPS = 'Tie';
        } 
    else if(computerMove === 'paper') {
          resultRPS = 'Lose';
        } 
    else if(computerMove === 'scissor') {
          resultRPS = 'Win';
        }
    alert(`You picked ${playerMove}, computer picked ${computerMove}. ${resultRPS}`);
  }
  else if(playerMove === 'scissor') {
    if(computerMove === 'rock') {
        resultRPS = 'Lose';
      } 
    else if(computerMove === 'paper') {
        resultRPS = 'Win';
      }
    else if(computerMove === 'scissor') {
        resultRPS = 'Tie';
      }
    alert(`You picked ${playerMove}, computer picked ${computerMove}. ${resultRPS}`);
  }
}