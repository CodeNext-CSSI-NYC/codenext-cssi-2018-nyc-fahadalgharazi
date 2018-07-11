//author:fahad algharazi

var readline = require("readline-sync");


var guess = readline.question("guess heads or tails=-=-=->");



 var ran = Math.random()
if(0.5<ran && guess =="heads"){
	console.log("you guessed correctly");
}
else if(0.5<ran && guess == "tails"){
	console.log("you guessed wrong better luck next time");
}
else if(0.5>ran && guess == "heads"){
	console.log("you guessed wrong better luck next time");
}
else if(0.5>ran && guess == "tails"){
	console.log("you guessed correctly");
}



































