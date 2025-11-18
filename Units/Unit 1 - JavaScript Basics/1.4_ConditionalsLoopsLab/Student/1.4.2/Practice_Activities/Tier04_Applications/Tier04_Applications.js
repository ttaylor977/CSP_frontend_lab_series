// Your code goes here. Follow the steps in README.md and run from index.html.
console.log("TEST - TIER 4")

//login system

let u = "admin";
let p = "1234";
let username;
let password;

while (u != username && password != p) {
    username = prompt("Enter your username:");
    password = prompt("Enter your password:");

    if ( username === u && password === p) {
        alert("Welcome");
        break;
    } else {
        alert("Invalid credentials. Try again");
    }
}









//Weather Bot

// let weather = prompt("Whats the weather")

// let weatherLowerCase = weather.toLowerCase();

// if (weatherLowerCase == "sunny"){
//     alert("shirt and shorts")
// } else if (weatherLowerCase == "cold"){
//     alert("sweater and pants")
// } else if (weatherLowerCase == "rainy"){
//     alert("raincoat and boots")
// } else {
//     alert("not a valide response")
// }