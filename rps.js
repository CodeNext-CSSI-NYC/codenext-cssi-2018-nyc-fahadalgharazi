//Author:Fahad Algharazi
let readline = require("readline-sync");
const compNum = Math.random()*3;
let compChoice ;
let playerChoice = readline.question("write rock,paper, or scissor=-=->");

if(compNum == 1){
 let compChoice = "rock";
 if(compNum == 1-2){
 	let compChoice = "scissors";
 }
else{
	compChoice = "paper";
} 
}
if(playerChoice =="rock" && compChoice == "paper"){
	console.log("computer wins!");

	if(playerChoice == "rock" && compChoice == "scissor"){
		console.log("player wins!");}

		if(playerChoice == "rock" && compChoice == "rock"){
		console.log("its a tie");}

			if(playerChoice == "paper" && compChoice == "scissor"){
		console.log("computer wins!");}
							if(playerChoice == "paper" && compChoice == "paper"){
		console.log("its a tie");}
											if(playerChoice == "paper" && compChoice == "rock"){


		console.log("Player wins!");
}
												if(playerChoice == "scissor" && compChoice == "rock"){
			console.log("computer wins!");}
													if(playerChoice == "scissor" && compChoice == "scissor"){
						console.log("its a tie");}
													if(playerChoice == "scissor" && compChoice == "paper"){
		console.log("Player wins!");}
}































































































