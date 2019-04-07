//Business Logic
var finalTally = [0,0];//array with two values(score for player 1 and score for player 2)
var total = 0;
var currentPlayer = 0;
var active = true;
document.querySelector('.player0').classList.add('active');


var rollDice = function() {

  if (active) {
      var randomNum = Math.floor(Math.random() * 6 + 1);

      document.getElementById('rolled' + currentPlayer).innerHTML = "you have rolled:" + randomNum;

      if (randomNum == 1) {
         $("#output" + currentPlayer).show();
          nextPlayer();
       }

      else if (randomNum !== 1) {
          $("#output" + currentPlayer).hide();
          total+=randomNum;
          document.getElementById('total' + currentPlayer).innerHTML = total;

   } else {
    nextPlayer();
      }
  }
}
  var holdDice = function()  {
  if (active) {

      finalTally[currentPlayer] += total;

      document.getElementById('result' + currentPlayer).innerHTML = finalTally[currentPlayer];


      if (finalTally[currentPlayer] >= 100) {
          document.getElementById("winner"+ currentPlayer).innerHTML = "You Won!!!!!";

          active = false;

      } else {

      nextPlayer();
      }
  }
}


var nextPlayer = function() {
    if (currentPlayer === 0) {
    currentPlayer = 1;

    }
    else {
      currentPlayer = 0;

    }

    total = 0;


    document.getElementById('total0').textContent = '0';
    document.getElementById('total1').textContent = '0';


    document.querySelector('.player0').classList.toggle('active');
    document.querySelector('.player1').classList.toggle('active');


}

// user interface

$("#roll").click(function() {
   rollDice();
});


$("#hold").click(function() {
   holdDice();
});

});
