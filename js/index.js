let score = JSON.parse(localStorage.getItem('savedScore')) || {
  wins: 0,
  loses: 0,
  ties:0
}; 

function playGame(playerMove) {
  const computerMove = pickComputerMove();
  let resultRPS = '';

  if(playerMove === 'paper') {
    if(computerMove === 'rock') {
        resultRPS = 'You win';
      }
    else if(computerMove === 'paper') {
        resultRPS = 'Tie';
      } 
    else if(computerMove === 'scissor') {
        resultRPS = 'You lose';
      }
  } 
  else if(playerMove === 'rock') {
    if(computerMove === 'rock') {
          resultRPS = 'Tie';
        } 
    else if(computerMove === 'paper') {
          resultRPS = 'You lose';
        } 
    else if(computerMove === 'scissor') {
          resultRPS = 'You win';
        }   
  }
  else if(playerMove === 'scissor') {
    if(computerMove === 'rock') {
        resultRPS = 'You lose';
      } 
    else if(computerMove === 'paper') {
        resultRPS = 'You win';
      }
    else if(computerMove === 'scissor') {
        resultRPS = 'Tie';
      }
  }

  if(resultRPS === 'You win') {
      score.wins += 1;
    }
    else if(resultRPS === 'You lose') {
      score.loses += 1;
    }
    else if(resultRPS === 'Tie') {
      score.ties += 1;
    }

    localStorage.setItem('savedScore',JSON.stringify(score));

  alert(`You picked ${playerMove}, computer picked ${computerMove}. ${resultRPS}
Wins:${score.wins}, Loses:${score.loses}, Ties:${score.ties} `);
}

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