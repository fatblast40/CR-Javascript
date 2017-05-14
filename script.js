

var gameName = prompt("Game name:");

document.getElementById('game-name').innerText = gameName;

var player1Array = [];
var player2Array = [];

function rollDice(playerId){
    
    var randomArray = [];

    for(var i = 0; i < 3; i ++){
        randomArray.push( Math.floor(Math.random() * (6 - 1 + 1)) + 1);
    }

    if(playerId == 1){
        player1Array = randomArray;
    }else{
        player2Array = randomArray;
    }

    showPlayersRoll();
}

function showPlayersRoll() {
    player1Array.forEach(function(item, index){
        document.getElementById("player1-dice" + (index + 1)).innerHTML = item;
    });
    player2Array.forEach(function(item, index){
        document.getElementById("player2-dice" + (index + 1)).innerHTML = item;
    });
}