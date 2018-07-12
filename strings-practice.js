//Author:Fahad Algharazi
let readline = require("readline-sync");

// Given two strings, a and b, return the result of putting them together in the order abba, e.g. "Hi" and "Bye" returns "HiByeByeHi".

// Examples: 
// makeAbba("Hi", "Bye") → "HiByeByeHi"
// makeAbba("Yo", "Alice") → "YoAliceAliceYo"
// makeAbba("What", "Up") → "WhatUpUpWhat" 

function makeAbba(a, b) {
	return (a + b + b +a);

}
let a = readline.question("write a word:");
let b = readline.question("write a word:");
let result = makeAbba(a,b);
console.log(result);

















































































































