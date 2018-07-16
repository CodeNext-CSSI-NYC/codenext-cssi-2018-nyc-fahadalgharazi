//Author:Fahad Algharazi
console.clear();
let readline = require("readline-sync");
// 1. Do each step below on a separate line
		// Create an array with exactly five numbers.
		// Store the second value from the array in a variable named secondValue.
		// Print out the third value from the array.
		// Change the fourth value in the array to 0.
		// Remove the last value from the array and store it in the variable lastVal.
		// Print out lastVal to make sure it has the value you expected			
		// Add 524 to the end of the array.
		// Add 76 to the end of the array.
		// Print out the second-to-last value in the array (which should be 524) by
		// placing a number inside square brackets (e.g. arr[3], though 3 is wrong).
	// Print out the second-to-last value in the array again, but this time,
	// use the length property and subtraction (e.g. arr[arr.length + 3], though +3 is wrong).

// let five = [1,2,3,4,5,];
// let secondValue = five[1];
// //console.log(five[2]);
// five[5] = 0;
// let lastVal = five.pop();
// five.push(524,76);
// // console.log(five);
// //console.log(five[5]);
// console.log(five[five.length - 2]);













// 2a. Create an array with five items.
// Without using a for loop, print out each item in the array, one at a time.
// Do NOT just print out the whole array with a command like console.log(arr).
// Make sure you actually print out each item in the array one at a time.
// What if there were 100 items in the array? 1000?
// let five = ["cat","hat","thing1","thing2","book"];
// console.log(five[0]);
// console.log(five[1]);
// console.log(five[2]);
// console.log(five[3]);
// console.log(five[4]);
// 2b. Create an empty array.
// Add a few items to the array one at a time using push.
// What if you needed to add 100 items to the array, or 1000?
// Hopefully these examples illustrate how helpful for loops can be.
// let array = [];
// array.push(hfj);
// array.push(hhfd);
// array.push(hfljbj);


// 3. Make a new empty array.
// Set up a for loop that will run ten times. Think carefully to make sure it will run ten times.
// Inside the for loop, add your favorite number to the array two times.
// You will need to do this on two separate lines.
// How many numbers should be in your array when the for loop is done?
// Print out the array and the array's length at the end and make sure you are right.
// let array = [];
// for(i=0;i<=9;i++){
// 	array.push(10);
// 	array.push(10);
// }
// console.log(array,array.length);

// 4. Make an array that contains four foods.
// Set up a for loop that will iterate (go through) the array.
// Do NOT use the number 4 (or 3) in your for loop.
// Instead, use the length of the array in the condition portion (the 2nd part) of the for loop.
// Inside the for loop, get the item that is at the current index and store it in a variable.
// On the next line, print out the variable.
// On the line after that, print out the variable but use toUpperCase() on it.
// When it is done running, you should see something like:
// 				//apple// APPLE// orange// ORANGE// pear// PEAR// plum// PLUM
// let array = ["pineapple","apple","blackberry","rasberry"];
// for(i = 0;i< array.length;i++){
// 	let current = i;
// 	console.log(array[current]);
// 	console.log(array[current].toUpperCase());
// }


// 5. Make an array that contains five cities.
// Set up a for loop that will iterate (go through) the array.
// Do NOT use the number 5 (or 4) in your for loop.
// Instead, use the length of the array in the condition portion (the 2nd part) of the for loop.
// (Yes, this is the same as last time. This is super important.)
// Inside the for loop, store the name of the city in a variable called city.
// Then print out the index from the for loop, then a colon, followed by the city.
// When it is done running, you should see something like:
// 0: New York
// 1: Boston
// 2: Seattle
// 3: LA
// // 4: San Diego
// let city = ["ENGLAND","NEW YORK","LA","Boston","SEATTLE"];
// for(i=0;i<city.length;i++){
//  let name = i;
//  console.log(i + ":" + city[i]);
// }


// 6. Make an array that contains six numbers.
// Also make a new, separate empty array called squares.
// Set up a for loop that will iterate (go through) the array.
// Do NOT use the number 6 (or 5) in your for loop.
// Instead, use the length of the array in the condition portion (the 2nd part) of the for loop.
// (Yes, this is the same as the last 2 times. This is super important.)
// Inside the for loop, store the number from the array with numbers in a variable called num.
// Add the square of the number to the end of your new array.
// At the end, print out the new array.
// Assuming your original array was [2,6,4,3,1,7] ...
// When it is done running, you should see something like [4, 36, 16, 9, 1, 49]
// let nums = [1,2,3,4,5,6];
// let squares = [];
// for(let i=0;i<nums.length;i++){
	
// 	squares.push((nums[i])**2);
// 	console.log(squares);


// }













// 7. Make an array that contains six numbers. Feel free to use the same one.
// Also make a new, separate empty array called reverse.
// Set up a for loop that will iterate (go through) the array, but BACKWARDS.
// This means, rather than i = 0; i < arr.length; i++
// You will instead do: i = arr.length - 1; i >= 0; i--
// Make sure that you 110% understand that previous line, because it is very important. Ask questions.
// Inside the for loop, store the number from the array with numbers in a variable called num.
// Add the number to the end of your new array (reverse).
// Note that, since we are looping backwards, we will be adding the numbers from the end first.
// At the end, print out both the original and new array.
// Assuming your original array was [2,6,4,3,1,7] ...
// When it is done running, you should see [7, 1, 3, 4, 6, 2] (it was reversed!)

// let nums = [1,2,3,4,5,6];
// let reverse = [];
// 	for(let i = nums.length ;i>=1;i--){
// 		num = i ;
// 		reverse.push(i);


// }
// console.log(nums);
// console.log(reverse);






// 8. Make a new empty array.
// Ask the user how many letters they would like to type in.
// Use a for loop to loop that many times.
// Each time through the loop, ask the user to enter a letter. Add that letter to the array.
// At the very end use let str = arr.join("") to turn your array into a string.
// Print out the str
// For example, if they type in 4, and then type in c, a, k, e when asked
// Then at the end it should just say "cake"

// let empty = [];
// let ask = readline.question("how many letters would you like to type in-=-=->");
// for(i = 0;i<ask; i++){
// let letter = readline.question("Enter a letter=-=->");
// empty.push(letter);



// }
// let result = empty.join("");
// console.log(result);

// 9. Make a new empty array.
// Write a for loop that run ten times. Each time, it should add one random number to your array.
// When that is done, create another for loop that goes throught this array and,
// one at a time, prints out each item, so that you can see which items were added.
// Do NOT just print the whole array at once. Get them one at a time and print them.



// 10. We will make a deck of cards -- sort of.
// Create an empty array called deck.
// Make a for loop that goes from 1 to 13.
// Inside that for loop make another for loop that goes from 1 to 4.
// Do NOT use i for both for loops! You can use j if you want.
// Inside the inner for loop:
// Create an empty string
// If the outer loop variable is 2-10 add that number to the empty string.
// However, if it's 1, add A, if it's 11 add J, if it's 12 and Q, if it's 13 and K.
// This is the value of the card (2-10, Ace, Jack, Queen, King)
// Then, using the inner loop, add the suit.
// If it's 1 add "clubs", for 2 add "diamonds", for 3 add "spades", for 4 add "hearts"
// Then, add this string onto the array.
// After both loops are done, print out both the length of the array (should be 52)
// as well as the array itself, which should look like a deck of cards
// Something like: ["Aclubs", "Adiamonds", "Aspades", "Ahearts", "2Clubs", "2Diamonds", ...]