let score = JSON.parse(localStorage.getItem("score")) || {
  wins: 0,
  losses: 0,
  ties: 0,
};

/*if (!score) {
  score = {
    wins: 0,
    losses: 0,
    ties: 0,
  };
}*/

function pickComputerMove() {
  const randomNumber = Math.random();

  let computerMove = "";

  if (randomNumber >= 0 && randomNumber < 1 / 3) {
    computerMove = "rock";
  } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
    computerMove = "paper";
  } else if (randomNumber >= 2 / 3 && randomNumber <= 1) {
    computerMove = "Scissors";
  }
  return computerMove;
}

function playGame(playerMove) {
  const computerMove = pickComputerMove();

  let result = "";

  if (playerMove === "scissors") {
    if (computerMove === "rock") {
      result = "you lose.";
    } else if (computerMove === "paper") {
      result = " you win.";
    } else if (computerMove === "Scissors") {
      result = "tie.";
    }
  } else if (playerMove === "paper") {
    if (computerMove === "rock") {
      result = "you win.";
    } else if (computerMove === "paper") {
      result = " tie.";
    } else if (computerMove === "Scissors") {
      result = "you lose.";
    }
  } else if (playerMove === "rock") {
    if (computerMove === "rock") {
      result = "tie.";
    } else if (computerMove === "paper") {
      result = "you lose.";
    } else if (computerMove === "Scissors") {
      result = "you win.";
    }
  }

  if (result === "you win.") {
    score.wins++;
  } else if (result === "you lose.") {
    score.losses++;
  } else {
    score.ties++;
  }

  localStorage.setItem("score", JSON.stringify(score));

  updateScoreElement();

  document.querySelector("#js-result").innerHTML = result;
  document.querySelector(
    "#js-moves"
  ).innerHTML = `You <img class="moves" src= "images/Rock Paper Scissors_files/${playerMove}-emoji.png"> <img class="moves" src= "images/Rock Paper Scissors_files/${computerMove}-emoji.png"> Computer`;
}

function updateScoreElement() {
  document.querySelector(
    "#js-score"
  ).innerHTML = `wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
}
