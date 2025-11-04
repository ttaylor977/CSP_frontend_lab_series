/* 
 Lab 003 – Data Types in JavaScript (Boolean, Undefined, Null & Immutability)
*/

// TODO 1: Booleans
// - Create isStudent = true, hasLicense = false
// - Print results of true || false, true && false, !true
let isStudent = true;
let hasLicense = false;

console.log(true || false );
console.log(true && false );
!true
// TODO 2: Short-circuit evaluation
// - Print result of false && (5 > 2)
// - Print result of true || (2 > 5)
console.log(false && (5 > 2))
console.log(true || (2 > 5))

// TODO 3: Undefined
// - Declare variable grade and print it
let grade = true; 
console.log(grade)

// TODO 4: Null
// - Create city = null, print it
// - Reassign city = "Miami" and print again
let city = null;
console.log(null)

city = "Miami"
console.log(city)

// TODO 5: Immutability
// - Create word = "hello"
// - Try word[0] = "H", print word
// - Reassign word = "Hello" and print again
let word = "hello";
word[0] = "H"
word = "Hello"
console.log(word)

// 🚀 Stretch Goals
// - Check if number is between 10 and 20 using &&
let number = 15
let isBetween = number >= 10 && number <= 20
console.log(isBetween)
// - Check if city is "Miami" or "Berlin" using ||
city = "Moscow" 
let isCity = city === "Miami" || city === "Berlin" 
console.log(isCity)



//What is the difference between null and undefined?
// null is when the varaiable can have any value, while undefined is declaring the variable but not given a value

//What does immutability mean in terms of primitive values?
//

//Why is short-circuit evaluation useful?
//Because it avoids uncessary errors and is better organization 

//Which logical operator (&&, ||, !) do you think you’ll use most often, and why?
// I think Ill use && most often for math equations
