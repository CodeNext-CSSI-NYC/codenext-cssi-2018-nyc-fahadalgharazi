// Author: Fahad algharazi
var readline = require("readline-sync");
console.log("welcome to the CHANGE MACHINE");
 var cents = readline.question(Enter the cents as a positive integer);
// var q = 25;
 var quarter;  
 var dime;
 var nickel;
 var penny;
// var d = 10;
// var dime = 
// var n = 5;
// var nickel = 
// var p = 1;
// var penny = 1
// if(y % 25 = 0){
//  y/q=
// }
quarter = math.floor(cents/25);
console.log("quarter = " + quarter);
 remeinder = cents%25;
 dime =math.floor(remeinder/10);
 remeinder=math.floor(remeinder%10);
 nickel=math.floor(remeinder/5);
 remeinder=math.floor(remeinder%5);
 penny=math.floor(remeinder/1);

