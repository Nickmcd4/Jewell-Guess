var targetNumber = Math.floor((Math.random() * 102) + 19);

var crystal_1 =  Math.floor((Math.random() * 12) + 1);
var crystal_2 =  Math.floor((Math.random() * 12) + 1);
var crystal_3 =  Math.floor((Math.random() * 12) + 1);
var crystal_4 =  Math.floor((Math.random() * 12) + 1);

var score = 0;
var win = false;
var lose = false;
var winsCounter = 0;
var loseCounter = 0;

function updateScore () {
        $("#score").text(score);
        
        if (score === targetNumber) {
                alert("WIN");
                win = !win;
                winsCounter++;
                console.log(win);
                $("#win").text(winsCounter);
                newGame();
        }
        if (score > targetNumber) {
                alert("LOSE");
                lose = !lose;
                loseCounter++;
                console.log(lose);
                $("#lose").text(loseCounter);
                newGame();
        }
};


/*function winLose () {
        if (win === true) { 
                winsCounter + 1;
                $("#win").text(winsCounter);
                console.log(winsCounter);
             };
        if (lose === true) {
                loseCounter + 1;
                $("#lose").text(loseCounter);
        }
};*/


$( document ).ready(function() {

                 //GENERATE A RANDOM NUMBER TO GUESS AND APPEND IT TO THE PAGE 
                $("#number-to-guess").text(targetNumber);
                //APPEND SCORE TO PAGE
                $("#score").text(score);
                //DISPLAY WIN COUNTER
                $("#win").text(winsCounter);
                //DISPLAY LOSE COUNTER
                $("#lose").text(loseCounter);

                $("#crystal_1").click(function (){
                         score = score + crystal_1;
                         console.log(score);
                         updateScore();
                });

                $("#crystal_2").on("click", function (){
                        score = score + crystal_2;
                        updateScore();
                });

                $("#crystal_3").on("click", function (){
                        score = score + crystal_3;
                        updateScore();
                });

                $("#crystal_4").on("click", function (){
                        score = score + crystal_4;
                        updateScore();

                });     


        
});

