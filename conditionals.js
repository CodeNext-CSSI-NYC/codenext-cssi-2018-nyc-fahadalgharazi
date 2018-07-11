// author: fahad algharazi

// Complete these one at a time. Test each one several times to make sure it works.
// When you are done with each one, comment it out when you move to the next one, so it doesn't keep showing up.
var readline = require("readline-sync");
// 1. Ask the user for a number and print whether it is positive or negative or zero.
// var num1
// num1 = readline.question("   write a number any number ===>");
// console.log(num1);
// 2. Ask the user to enter three numbers, and then print out the biggest number they entered.

// var num1 = readline.question("write down 1 number ===>");
// var num2;
// num2 = readline.question("write down anotha one=-=-=->");
// var num3;
// num3 = readline.question("and anotha juan=-=-=->");
// if(num1>num2&&num1>num3){
// 	console.log("the greatest number is =-=-=->" + num1);
// }
// else if(num2>num1 && num2>num3){
// 	console.log("the greatest number is =-=-=->" + num2);
// }
// else if(num3>num1 && num3>num2){
// 	console.log("the greatest number is =-=-=->" + num3);
// }


// 3. Ask the user for a number and print whether it is odd or even
// num1=readline.question("write down any number =-=-=->");
// if(num1 % 2 == 0){
// 	console.log("the number is even");
// }
// else if(num1 % 2 ==1){
// 	console.log("the number is odd");
// }
// 4. Ask the user to enter a letter and tell them if it is a vowel or consonant

// 	letter = readline.question("write down is a letter");
// 	if(letter.substring(0,1) == "a"){	
// 		console.log("its a vowel");
// 	}
// else if (letter.substring(0,1) == "e"){
// 		console.log("its a vowel");
		
// 	}
// else if (letter.substring(0,1) == "i"){
// 		console.log("its a vowel");
// 	}

// else if (letter.substring(0,1) == "o"){


// 		console.log("its a vowel");
// 	}
// else if (letter.substring(0,1) == "u"){

// 		console.log("its a vowel");
// 	}
// else if (letter.substring(0,1) == "y"){
// 		console.log("its a vowel");
// 	}
// 	else {
// 		console.log("its a consonant");
// 	}
		
		
		
		

// 5. Ask the user to enter a year, and tell them if it was a leap year.
// (You can use Google if you're not sure when leap years happen.)

// var year = readline.question("write down a year=-=-=->");
// if(year % 4 == 0){
// 	console.log("this year is a leap year!!");
// }
//  else{
//  	console.log("its not a leap year.");
//  }




// 6. Ask the user if they have been a citizen for at least 9 years (yes or no), ask them their age, and ask if they live in New York state.
// If they answer yes, their age is above 30, and yes, then tell them they can run for senate in NY. Otherwise, say that they cannot.

// var citizen = readline.question("have you been a citizen for at least 9 years.=-=->");
// var age = readline.question("how old are you=-=->");
// var state = readline.question("do live in new york state=-=->");
// if("yes" == citizen && 30 < age && "yes" == state){
// 	console.log("you can run for new york state senate");

// }
// else{
// 	console.log("thats too bad you cant run for ny senate");
// }








// 7. Write a program that asks the user to enter a whole number 1-7 and prints out the corresponding day of the week.
// If you want another challenge, look up how to use switch statements and use a switch instead of if-else for this.
// Note that we usually don't bother with switch statements unless there are more than a few elses.


var num = readline.question("pick a number from 1-7 =-=->");
if(num == 1){
 console.log(sun);
}
 else if (num == 2){
 	console.log("mon");
 }
 else if (num == 3){
 	console.log("tue");
 }
 else if (num == 4){
 	console.log("wed");
 }
 else if (num == 5){
 	console.log("thu");
 }
 else if (num == 6){
 	console.log("fri");
 }
else if (num == 7){
 	console.log("sat"); 
 }




