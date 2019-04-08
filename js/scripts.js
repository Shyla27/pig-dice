var score = 0;
var scorer = 0;
var score2 = 0;
var scorer2 = 0;
var totals = [];
var totals2 = [];
 $(document).ready(function() {
   $("#buttonRoll").click(function() {
     var dice = Math.floor(Math.random() * 6 + 1);
     score += dice;
     document.getElementById('scoreOne').innerHTML = dice;
     document.getElementById('noo').innerHTML = score;
     if (dice == 1) {
       $(".buttons").hide();
       $(".buttons2").show();
       score = 0;
       document.getElementById('noo').innerHTML = score;
       totals = [];
     } else {
       totals.push(dice);
     }
   });
   $("#holdButton").click(function() {
     totals.forEach(function(total) {
       return scorer += total;
     });
     document.getElementById('totalscore').innerHTML = scorer;
       $(".buttons").hide();
       $(".buttons2").show();
       totals =[];
       score = 0;
       document.getElementById('noo').innerHTML = score;
       if (scorer >= 100) {
        $(".gamepanel").hide();
         $(".buttons").hide();
          $(".buttons2").hide();
           $("#new-game").show();
        document.getElementById('finalresult').innerHTML = "PLAYERONE HAS WON THE GAME" ;
        $(".final").show();
      }
   });
     $("#buttonRoll2").click(function() {
       var dice2 = Math.floor(Math.random() * 6 + 1);
       score2 += dice2;
       document.getElementById('scoreTwo').innerHTML = dice2;
       document.getElementById('noo1').innerHTML = score2;
       if (dice2 == 1) {
         $(".buttons").show();
         $(".buttons2").hide();
         score2 = 0;
         document.getElementById('noo1').innerHTML = score2;
       } else {
         totals2.push(score2);
       }
     });
     $("#holdButton2").click(function() {
       totals2.forEach(function(total) {
         return scorer2 += total;
       });
       document.getElementById('totalscore2').innerHTML = scorer2;
       $(".buttons2").hide();
         $(".buttons").show();
         totals2 =[];
         score2 = 0;
         document.getElementById('noo1').innerHTML = score2;
         if (scorer2 >= 100) {
          $(".gamepanel").hide();
           $(".buttons").hide();
            $(".buttons2").hide();
             $("#new-game").show();
          document.getElementById('finalresult').innerHTML = "PLAYERTWO HAS WON THE GAME" ;
          $(".final").show();
        }
     });

 });
