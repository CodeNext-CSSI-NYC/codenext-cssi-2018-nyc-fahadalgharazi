//Author:Fahad algharazi
//let readline = require("readline-sync");
// MAKE SURE YOU CHOOSE GOOD, RELEVANT NAMES FOR YOUR FUNCTIONS AND PARAMETERS

// 1a. Write (declare) a function that prints out "meow"
// function cat(){
// 	console.log("meow");

// } 




// 1b. Call it three times in a row. Run your code to make sure it works.
// cat();
// cat();
// cat(); 


// 2a. Write (declare) a function that takes one parameter and prints out the square of that number
// function square(num1){
// 	console.log (num1**2);

// }




// 2b. Call it three times with three different parameters. Run your code to make sure it works.
	// square(4);
	// square(12);
	// square(123);

// 3a. Write (declare) a function that takes two parameters and prints out
// "_____ is greater than ____" with the blanks filled in correctly with the two inputs.

// function greater(num1 , num2){
// 	if(num1 > num2){
// 		console.log(num1 + "is greater");
// }	else{
// 		console.log(num2 + "is greater");

// 		}

// }

// greater(10,5);
// greater(2,1);
// greater(5,8);


// 3b. Call it three times with three different parameters
// Make sure to try cases where the first one is bigger, the second one is bigger, and when they are equal.
// Run your code to make sure it works.



// 4a. Write (declare) a function that takes one parameter called name and
// returns (not prints out, just returns) the string "Hello ____", with the name in the blank.
// function hello(name){
// 	let greetings = "Hello "
// 	return greetings + name;

//}
// 4b. Call the function and store the result in a variable. Then, print out that variable.
// Repeat this three times with different names.
    // let result = hello("Fahad");
    // console.log(result);

// 5a. Write (declare) a function that takes two parameters and
// returns (not prints out, just returns) the average of the parameters.
function average(num1 , num2){
	return (num1 + num2 )/2;
}



// 5b. Call the function and store the result in a variable. Then, print out that variable
// in a sentence like "The average is _____".
// Repeat this three times with different numbers. What happens if you pass in
// something that isn't a number, like true or "apple"?


let result = average(10,20);

console.log("the average is " + result);




























