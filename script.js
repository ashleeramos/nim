var game = 0;
var cpuWins = 0;
var playerWins = 0;
var count = 0;
var trainer = false;
var turn = 0;

function main() {
  trainer = gameType();
  newGame();
  let again = stats();
  if (again == 1) {
    newGame();
  }
  else alert("thanks for playing nim!")
}

function gameType() {
  trainer = confirm("welcome to nim! you have the option to play nim trainer or nim simple. click ok for trainer or cancel for simple.");
  if (trainer == false) alert("simple");
  return trainer;
}

function newGame() {
  turn = 0;
  game++;
  count = 0;
  if (game % 2 != 0) {
    turn = 1;
  }
  while (count < 21) {
    if (turn % 2 != 0) {
      if (trainer == true) {
        count = cpuTrainer();
      }
      else {
        count = cpuTurn();
      }
    }
    else {
      count = playerTurn();
    }
    if (count < 21) {
      turn++;
    }
    else {
      endGame();
    }
  }
}

function cpuTurn() {
  alert("count is now " + count);
  let cpuCount = Math.floor(Math.random() * 3) + 1;
  if (count + cpuCount > 21) {
    cpuCount = 1;
  }
  else if (count + cpuCount == 21 && cpuCount > 1) {
    cpuCount--;
  }
  let nextCount = count + cpuCount;
  return nextCount;
}

function playerTurn() {
  let nextCount = 0;
  if (turn == 0) {
    nextCount = prompt("your turn. what do you count to?");
  }
  else {
    nextCount = prompt("cpu counts to " + count + ". what do you count to?");
  }
  if (nextCount - count > 4) {
    alert("you may only count up to 3. say where you end.")
    playerTurn();
  }
  else {
    nextCount = parseInt(nextCount);
  }
  return nextCount;
}

function endGame() {
  let winner = null;
  if (turn % 2 == 0) {
    cpuWins++;
    winner = "cpu";
  }
  else {
    alert("cpu counts to 21.");
    playerWins++;
    winner = "player";
  }
  alert(winner + " won");
}

function stats() {
  alert("player has won " + playerWins + "\ncomputer has won " + cpuWins);
  if (playerWins == cpuWins) alert("it's a tie!");
  /* We had to put the subtraction in parentheses. MDAS doesn't work inside hybrid string expressions it seems. */
  else if (playerWins > cpuWins) alert("player is ahead by " + (playerWins - cpuWins));
  else if (cpuWins > playerWins) alert("computer is ahead by " + (cpuWins - playerWins));
  let again = confirm("play again?");
  gameType();
  return again;
}

function cpuTrainer() {
  alert("trainer");
  let cpuCount = 0;
  let fours = 4;
  if (count % 4 == 0) {
    cpuCount = Math.floor(Math.random() * 3) + 1;
  }
  else {
    // for (let fours = 0; fours < count; fours += 4)
    while (fours < count) {
      fours += 4;
    }
    cpuCount = fours - count;
  }
  let nextCount = count + cpuCount;
  return nextCount;
}
