/* ===========================================================
   Lab 1.1 – Intro
   Exploring JavaScript syntax, console output, and variables.
   =========================================================== */

// TODO 1: Print your full name with console.log()
   console.log("TyTaylor")

// TODO 2: Declare variable favoriteFood, assign "Steak", then reassign "Pizza"
   let favoriteFood

   favoriteFood = "Steak"
   console.log(favoriteFood)

   favoriteFood = "Pizza"
   console.log(favoriteFood)

// TODO 3: Create variable mystery, assign a string, then a number, print type each time
   let mystery

   mystery = "football"
   console.log("Value: " + mystery + " Type: " + typeof mystery)

   mystery = 100
   console.log("Value: " + mystery + " Type: " + typeof mystery)

// TODO 4: Declare const schoolName, try to reassign
   const schoolName = "Christopher Columbus Highschool"

   console.log ("I attend" + schoolName)
   
// TODO 5: Create three valid camelCase variables and print them
   let sixSeven
   let skyColor
   let accountBalance

// 🚀 Stretch Goals (optional)
// - Create a variable age and print "I am X years old" using concatenation
// - Repeat using template literals
   let age = 16
   console.log("I am" + age + "years old") // Concatenation

   console.log(`I am ${age} years old`) // Literals
/* ===========================================================
   🎟 EXIT TICKET
   1. What new concept or skill did you learn in this lab?
<<<<<<< HEAD
         A new concept I learned in the lab is that Javascript is stricter than html and css, for ex. capital letters.

   2. How did you apply logic or conditionals in your code?

   3. What challenges did you encounter, and how did you solve them?
         I encountered some misstyped codes leading them to errors, I went into 'Inspect', 'Console' to locate and fix the error.

   4. Where else could this programming concept be useful?
         For organizing.
=======
   2. What challenges did you encounter, and how did you solve them?
   3. Where else could this programming concept be useful?
>>>>>>> upstream/main
   =========================================================== */

// MiniFRQ_Pratice 

   let width = 5;
   let height = 5;

   let area = width * height;
   let perimeter = 2 *( width + height);

   console.log(`area of rectangle ${area}`);
   console.log(`perimeter of a rectange ${perimeter}`);