//Business Logic
var finalTally = [0,0];//array with two values(score for player 1 and score for player 2)
var total = 0;
var currentPlayer = 0;
var active = true;//create a var and set it to true
  //add the class "active" to the div with class playerone
document.querySelector('.player0').classList.add('active');

//create a rolldice function
var rollDice = function() {

  if (active) {
      var randomNum = Math.floor(Math.random() * 6 + 1);
      //Display the random number
      document.getElementById('rolled' + currentPlayer).innerHTML = "you have rolled:" + randomNum;
      //display you rolled a one please pass the dice
      if (randomNum == 1) {
         $("#output" + currentPlayer).show();
          nextPlayer();
       }
      //Add values until player decides to hold or the turn ends
      else if (randomNum !== 1) {
          $("#output" + currentPlayer).hide();
          total+=randomNum;
          document.getElementById('total' + currentPlayer).innerHTML = total;

   } else {
    nextPlayer();
      }
  }
}

//create a function for holding
  var holdDice = function()  {
  if (active) {

      finalTally[currentPlayer] += total;

      document.getElementById('result' + currentPlayer).innerHTML = finalTally[currentPlayer];

      // Check if player won the game
      if (finalTally[currentPlayer] >= 100) {
          document.getElementById("winner"+ currentPlayer).innerHTML = "You Won!!!!!";

          active = false;

      } else {

      nextPlayer();
      }
  }
}

//Create a function to switch players
var nextPlayer = function() {
    if (currentPlayer === 0) {
    currentPlayer = 1;

    }
    else {
      currentPlayer = 0;

    }

    total = 0;

    //puts a zero on the current round
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
