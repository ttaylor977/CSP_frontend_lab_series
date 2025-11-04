/* 
 Lab 002 – Data Types in JavaScript
*/

// TODO 1: Create variables age (34) and price (12.99), print both
// TODO 1b: Divide "Sandra" by 2 and print result (expect NaN)
let age = 34;
let price = 12.99;

console.log(age);
console.log(price);

let whatIsThis = "Sandra" / 2;

console.log(whatIsThis);

// TODO 2: Print basic math ops: + - * /
// TODO 2b: Use exponentiation (2 ** 3) and modulo (7 % 2)
console.log(2 + 2);
console.log(6 - 7);
console.log(9 * 6);
console.log(10 / 2);
console.log(2 ** 3);
console.log(7 % 2)

// TODO 3: Assignment operators with score variable
let score = 10;

score += 5; 
score -= 3;
score *= 2;  
score /= 4; 

console.log(score);

// TODO 4: Expressions with operator precedence
let result1 = 2 + 3 * 4;      
let result2 = (2 + 3) * 4;   
let result3 = 10 - 4 / 2;    

console.log(result1);
console.log(result2);
console.log(result3);

// TODO 5: Strings (single, double, backticks)
let singleQuote = 'Hello';
let doubleQuote = "World";
let backticks = `Hello, ${doubleQuote}!`;

console.log(singleQuote);
console.log(doubleQuote);
console.log(backticks);

// TODO 6: String properties and methods
// - greeting.length
// - charAt(0), charAt(5), [3]
// - indexOf("sad")
// - repeat()
// - substring, substr, slice examples
let greeting = "This is sad but cool!";

console.log(greeting.length);

console.log(greeting.charAt(0));
console.log(greeting.charAt(5));
console.log(greeting[3]);

console.log(greeting.indexOf("sad"));

console.log(greeting.repeat(2));

console.log(greeting.substring(5, 10)); 
console.log(greeting.substr(5, 4));     
console.log(greeting.slice(5, 10));

// 🚀 Stretch Goals
// - Even number check using %
// - localeCompare() example

