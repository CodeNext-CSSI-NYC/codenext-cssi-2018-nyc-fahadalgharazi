//Author:Fahad Algharazi
let readline = require("readline-sync");

// Given two strings, a and b, return the result of putting them together in the order abba, e.g. "Hi" and "Bye" returns "HiByeByeHi".

// Examples: 
// makeAbba("Hi", "Bye") → "HiByeByeHi"
// makeAbba("Yo", "Alice") → "YoAliceAliceYo"
// makeAbba("What", "Up") → "WhatUpUpWhat" 
/*
function makeAbba(a, b) {
	return (a + b + b +a);

}
let a = readline.question("write a word:");
let b = readline.question("write a word:");
let result = makeAbba(a,b);
console.log(result);
*/

//Given 2 strings, a and b, return a string of the form short+long+short, with the shorter string on the outside and the longer string on the inside. The strings will not be the same length, but they may be empty (length 0).
// Examples: 
// comboString("Hello", "hi") → "hiHellohi"
// comboString("hi", "Hello") → "hiHellohi"
// comboString("aaa", "b") → "baaab" 

function comboString(a, b) {
 aLength = (a.length);
 bLength = (b.length);
 
	if(aLength>bLength){
		return (b + a + b);
	}else{
		return (a+b+a);
	}
}

let a = readline.question("write a word:");
let b = readline.question("write a word:");
let result = comboString(a,b);
console.log(result);












































































































