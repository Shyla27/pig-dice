//business-logic
function Player(rolledNumbers, Score, total) {
  var rolledNumbers = rolledNumbers
  var Score = score;
 var total = total;
}
Player.prototype.addScore = function() {
  var total = 0;
  for (var i = 0; i < this.rolledNumbers.length; i++) {
    total += this.rolledNumbers[i];
  }
  var Score = total;
  return this.Score;
}
Player.prototype.addScore = function() {
  this.total += this.score;
  return this.total;
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
      player1.addScore();
      $("#roundResult1").text(player1.tempScore);
    } else {
      player1.rolledNumbers = 0;
      rolledNumbers1 = [0];
      player1.addTempScore();
      $("#roundResult1").text(player1.add);
      $("#totalResult1").text(player1.total);
      alert("You rolled 1. please pass the dice");
      changePlayer();
    }


  });

  $("#holdBtn1").click(function(event) {
    event.preventDefault();
    $("#totalResult1").text(player1.addTotal());
    if (player1.totalScore >= 100) {
      alert("Player2 is the winner."+ "Your Score is " + player1.totalScore);
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
      $("#roundResult2").text(player2.addScore());
    } else {
      player2.rolledNumbers = 0;
      $("#roundResult2").text(player2.addScore());
      $("#totalResult2").text(player2.addTotal());
      alert("You rolled 1.please pass the dice ");
      changePlayer();
      rolledNumbers2 = [0];
    }
  });

  $("#holdBtn2").click(function(event) {
    $("#totalResult2").text(player2.addTotal());
    $("#roundResult2").text(0);
    if (player2.totalScore >= 100) {
      alert("Player2 is the winner." +"Your score is " + player2.total);
      location.reload();
    }
    rolledNumbers2 = [0];
    changePlayer();
  });
});
