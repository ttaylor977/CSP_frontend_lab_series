// Your code goes here. Follow the steps in README.md and run from index.html.
console.log("TEST - TIER 3");

//FizzBuzz
// for (let i = 1; i <= 50; i++) {
//   if (i % 15 === 0) {
//     console.log("Fizzbuzz");
//   } else if (i % 3 === 0) {
//     console.log("Fizz");
//   } else if (i % 5 === 0) {
//     console.log("Buzz");
//   } else {
//     console.log(i);
//   }
// }

//Guess the Number
let secret = Math.floor(Math.random() * 10) + 1;
let guess;
while (guess != secret) {
    guess = Number(prompt("Guess the number 1-10"))
    if (guess < secret) {
        alert("Too low")
    }
    else if (guess > secret) {
        alert("Too high")
    } else {
        alert("Congrats")
    }
}