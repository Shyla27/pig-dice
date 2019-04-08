//business-logic
//constructor for player
function Player(rolledNumbers, tempScore, totalScore) {
  this.rolledNumbers = rolledNumbers
  this.tempScore = tempScore;
  this.totalScore = totalScore;
}
Player.prototype.addTempScore = function() {
  var totalTempScore = 0;
  for (var i = 0; i < this.rolledNumbers.length; i++) {
    totalTempScore += this.rolledNumbers[i];
  }
  this.tempScore = totalTempScore;
  return this.tempScore;
}
Player.prototype.addTotalScore = function() {
  this.totalScore += this.tempScore;
  return this.totalScore;
}

function rollDice() {
  return Math.floor((Math.random() * 6) + 1);
}
//function for changing player
function changePlayer() {
  $("#rollBtn1").toggle();
  $("#holdBtn1").toggle();
  $("#rollBtn2").toggle();
  $("#holdBtn2").toggle();
}
var rolledNumbers1 = [];
var rolledNumbers2 = [];
var player1 = new Player(0, 0, 0);
var player2 = new Player(0, 0, 0);

//front-end logic
$(document).ready(function() {
  $("#startButton").click(function() {
    location.reload();
  });

  $("#rollBtn1").click(function(event) {
    event.preventDefault();
    var rolledNumber = rollDice();
    $("#diceNumber").text(rolledNumber);
    if (rolledNumber != 1) {
      rolledNumbers1.push(rolledNumber);
      player1.rolledNumbers = rolledNumbers1;
      player1.addTempScore();
      $("#roundResult1").text(player1.tempScore);
    } else {
      player1.rolledNumbers = 0;
      rolledNumbers1 = [0];
      player1.addTempScore();
      $("#roundResult1").text(player1.add);
      $("#totalResult1").text(player1.totalScore);
      alert("You rolled 1. It is player 2's turn'");
      changePlayer();
    }


  });

  $("#holdBtn1").click(function(event) {
    event.preventDefault();
    $("#totalResult1").text(player1.addTotalScore());
    if (player1.totalScore >= 100) {
      alert("Player 1 has won the game.\n Your Score is " + player1.totalScore);
      location.reload();
    }
    $("#roundResult1").text(0);
    rolledNumbers1 = [0];
    changePlayer();
  });

  $("#rollBtn2").click(function(event) {
    event.preventDefault();

    var rolledNumber = rollDice();
    $("#diceNumber").text(rolledNumber);
    if (rolledNumber != 1) {
      rolledNumbers2.push(rolledNumber);
      player2.rolledNumbers = rolledNumbers2;
      $("#roundResult2").text(player2.addTempScore());
    } else {
      player2.rolledNumbers = 0;
      $("#roundResult2").text(player2.addTempScore());
      $("#totalResult2").text(player2.addTotalScore());
      alert("You rolled 1.It is player 1 's turn'");
      changePlayer();
      rolledNumbers2 = [0];
    }
  });

  $("#holdBtn2").click(function(event) {
    $("#totalResult2").text(player2.addTotalScore());
    $("#roundResult2").text(0);
    if (player2.totalScore >= 100) {
      alert("Player2 has won the game.\n Your score is " + player2.totalScore);
      location.reload();
    }
    rolledNumbers2 = [0];
    changePlayer();
  });
});
