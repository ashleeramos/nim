var game = 0;
var cpuWins = 0;
var playerWins = 0;

function main() {
  newGame();
  let again = stats();
  if (again == true) main();
  else alert("thanks for playing nim!");
}

function newGame() {
  game++;
  let count = 0;
  let turn = 0;
  if (game % 2 != 0){
    turn = 1;
  }
}