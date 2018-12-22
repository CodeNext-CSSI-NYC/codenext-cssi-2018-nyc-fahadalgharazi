// Author: Fahad algharazi
var readline = require("readline-sync");
console.log("welcome to the CHANGE MACHINE");
 var cents = readline.question("Enter the cents as a positive integer and your age after a space =-=->");
//  var q = 25;
//  var quarter;  
//  var nickel;
//  var penny;
// var d = 10;
// var dime ;
// var n = 5;
// var nickel;
// var p = 1;
// var penny = 1;
// //if(y % 25 = 0){
//  //y/q=
// }
let = quarter = Math.floor(cents/25);
// console.log("quarter = " + quarter);
 let remeinder = cents%25;
 let dime =Math.floor(remeinder/10);
  remeinder=Math.floor(remeinder%10);
 let nickel=Math.floor(remeinder/5);
  remeinder=Math.floor(remeinder%5);
 let penny=Math.floor(remeinder/1);
console.log("quarter = " + quarter);
console.log("dime = " + dime);
console.log("nickel = " + nickel);
console.log("penny = " + penny);