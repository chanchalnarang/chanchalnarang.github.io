const game = ["rock", "paper", "scissor"];
var player1,
  player1Value,
  player2,
  player2Value,
  finalplayer1Score = 0,
  finalplayer2Score = 0,
  finalResultScore;
function score1() {
  if (player1Value === "rock" && player2Value === "paper") {
    finalplayer2Score = finalplayer2Score + 1;
  } else if (player1Value === "rock" && player2Value === "scissor") {
    finalplayer1Score = finalplayer1Score + 1;
  } else if (player1Value === "rock" && player2Value === "rock") {
    finalplayer1Score = finalplayer1Score;
    finalplayer2Score = finalplayer2Score;
  } else if (player1Value === "paper" && player2Value === "rock") {
    finalplayer1Score = finalplayer1Score + 1;
  } else if (player1Value === "paper" && player2Value === "scissor") {
    finalplayer2Score = finalplayer2Score + 1;
  } else if (player1Value === "paper" && player2Value === "paper") {
    finalplayer1Score = finalplayer1Score;
    finalplayer2Score = finalplayer2Score;
  } else if (player1Value === "scissor" && player2Value === "rock") {
    finalplayer2Score = finalplayer2Score + 1;
  } else if (player1Value === "scissor" && player2Value === "paper") {
    finalplayer1Score = finalplayer1Score + 1;
  } else if (player1Value === "scissor" && player2Value === "scissor") {
    finalplayer1Score = finalplayer1Score;
    finalplayer2Score = finalplayer2Score;
  }
}

function finalResult(player1Score, player2Score) {
  if (player1Score > player2Score) {
    return "Player1 wins";
  } else if (player1Score < player2Score) {
    return "player2 wins";
  } else {
    return "draw";
  }
}
function reset() {
  document.getElementsByClassName("player1Value")[0].innerHTML = "";
  document.getElementsByClassName("player2Value")[0].innerHTML = "";
  document.getElementsByClassName("finalresult")[0].innerHTML =
    "Game is about to begin";
}
function play() {
  player1 = Math.floor(Math.random() * 3);
  player1Value = game[player1];
  player2 = Math.floor(Math.random() * 3);
  player2Value = game[player2];

  score1();

  finalResultScore = finalResult(finalplayer1Score, finalplayer2Score);
  document.getElementsByClassName("player1Value")[0].innerHTML = player1Value;
  document.getElementsByClassName("player2Value")[0].innerHTML = player2Value;
  document.getElementsByClassName(
    "finalresult"
  )[0].innerHTML = finalResultScore;
  document.getElementsByClassName(
    "player1Score"
  )[0].innerHTML = finalplayer1Score;
  document.getElementsByClassName(
    "player2Score"
  )[0].innerHTML = finalplayer2Score;
}
