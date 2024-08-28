// // // // // // // // // Q.1: Print out the statement using console.log()

// // // // // // // // // console.log("The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.");
// // // // // // // // // console.log('Mother Teresa once said, "Spread love everywhere you go. Let no one ever come to you without leaving happier."');

// // // // // // // // // ------------------------------------------------------------------

// // // // // // // // // Q.2: Check if typeof '10' is exactly equal to 10 and make it exactly equal

// // // // // // // // // let strNumber = '10';
// // // // // // // // // let number = 10;

// // // // // // // // // if (typeof strNumber !== typeof number) {
// // // // // // // // //     strNumber = Number(strNumber);
// // // // // // // // // }

// // // // // // // // // console.log(strNumber === number);  // Output: true
// // // // // // // // // --------------------------------------------------------------------------------

// // // // // // // // // Q.3: JavaScript Program to find the area of a triangle

// // // // // // // // // let base = 5;
// // // // // // // // // let height = 10;
// // // // // // // // // let area = (base * height) / 2;

// // // // // // // // // console.log(`The area of the triangle is ${area}`);
// // // // // // // // // ---------------------------------------------------------------------------

// // // // // // // // // Q.4: JavaScript program to calculate days left until next Christmas

// // // // // // // // // let today = new Date();
// // // // // // // // // let nextChristmas = new Date(today.getFullYear(), 11, 25);  // December 25 of the current year

// // // // // // // // // if (today.getMonth() === 11 && today.getDate() > 25) {
// // // // // // // // //     nextChristmas.setFullYear(nextChristmas.getFullYear() + 1);
// // // // // // // // // }

// // // // // // // // // let timeDiff = nextChristmas - today;
// // // // // // // // // let daysLeft = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));

// // // // // // // // // console.log(`${daysLeft} days left until next Christmas.`);
// // // // // // // // // -----------------------------------------------------------------------------------------------

// // // // // // // // // Q.5: What is a Conditional Statement?

// // // // // // // // // Answer: A conditional statement is a set of rules that perform different actions based on whether a specified
// // // // // // // // //          condition is true or false. In JavaScript, the most common conditional statements are if, else if, else, switch, 
// // // // // // // // //          and the ternary operator.
// // // // // // // // // ----------------------------------------------------------------------------------------------------------

// // // // // // // // // Q.6: Find the circumference of a Rectangle (formula: C = 4 * a)

// // // // // // // // // let a = 5;  // side of the rectangle
// // // // // // // // // let circumference = 4 * a;

// // // // // // // // // console.log(`The circumference of the rectangle is ${circumference}`);
// // // // // // // // // --------------------------------------------------------------------------------------------------------------------

// // // // // // // // // Q.7: Convert years into days and days into years

// // // // // // // // // Convert years into days
// // // // // // // // // let years = 2;
// // // // // // // // // let daysInYear = years * 365;
// // // // // // // // // console.log(`${years} years is approximately ${daysInYear} days.`);

// // // // // // // // // // Convert days into years
// // // // // // // // // let days = 730;
// // // // // // // // // let yearsInDays = days / 365;
// // // // // // // // // console.log(`${days} days is approximately ${yearsInDays.toFixed(2)} years.`);
// // // // // // // // // ------------------------------------------------------------------------------------------------------------------------

// // // // // // // // // Q.8: Convert temperature Fahrenheit to Celsius (Conditional logic)

// // // // // // // // // let fahrenheit = 98;
// // // // // // // // // let celsius = (fahrenheit - 32) * 5 / 9;

// // // // // // // // // console.log(`${fahrenheit}°F is equal to ${celsius.toFixed(2)}°C.`);
// // // // // // // // // ----------------------------------------------------------------------------------------------------------

// // // // // // // // // Q.9: JavaScript exercise to get the extension of a filename

// // // // // // // // // let filename = "document.pdf";
// // // // // // // // // let extension = filename.split('.').pop();

// // // // // // // // // console.log(`The extension of the file is ${extension}`);
// // // // // // // // // -------------------------------------------------------------------------------------------------------------

// // // // // // // // Q.10: Result of the expression (5 > 3 && 2 < 4)
// // // // // // // // Answer: true because both conditions are true.
// // // // // // // // -------------------------------------------------------------------------------------
// // // // // // // // Q.11: Result of the expression (true && 1 && "hello")
// // // // // // // // Answer: "hello" because in a logical AND (&&), the last truthy value is returned.
// // // // // // // // -----------------------------------------------------------------------------------------------

// // // // // // // // Q.12: Result of the expression true && false || false && true
// // // // // // // // Answer: false. The AND (&&) operation takes precedence over OR (||), so the expression is evaluated as (true && false) || (false && true) which simplifies to false || false.
// // // // // // // // ---------------------------------------------------------------------------------------------------------------

// // // // // // // // Q.13: Check if a number is positive or negative in JavaScript

// // // // // // // // let number = -5;

// // // // // // // // if (number > 0) {
// // // // // // // //     console.log("The number is positive");
// // // // // // // // } else if (number < 0) {
// // // // // // // //     console.log("The number is negative");
// // // // // // // // } else {
// // // // // // // //     console.log("The number is zero");
// // // // // // // // }
// // // // // // // // -----------------------------------------------------------------------------------------------------------------------

// // // // // // // // Q.14: Find if the character is a vowel or not

// // // // // // // let char = 'a';

// // // // // // // if (['a', 'e', 'i', 'o', 'u'].includes(char.toLowerCase())) {
// // // // // // //     console.log(`${char} is a vowel.`);
// // // // // // // } else {
// // // // // // //     console.log(`${char} is not a vowel.`);
// // // // // // // }
// // // // // // // --------------------------------------------------------------

// // // // // // // Q.15: Check whether a number is negative, positive, or zero

// // // // // // // let num = 0;

// // // // // // // if (num > 0) {
// // // // // // //     console.log("Positive");
// // // // // // // } else if (num < 0) {
// // // // // // //     console.log("Negative");
// // // // // // // } else {
// // // // // // //     console.log("Zero");
// // // // // // // }
// // // // // // // -----------------------------------------------------------------------------------

// // // // // // // Q.16: Find if a number is even or odd using the ternary operator in JS

// // // // // // // let num = 7;
// // // // // // // let result = (num % 2 === 0) ? "Even" : "Odd";

// // // // // // // console.log(result);
// // // // // // // --------------------------------------------------------------------------------------

// // // // // // // Q.17: Find the maximum number among 3 numbers using the ternary operator in JS

// // // // // // // let a = 5, b = 10, c = 3;

// // // // // // // let max = (a > b) ? (a > c ? a : c) : (b > c ? b : c);

// // // // // // // console.log(`The maximum number is ${max}`);
// // // // // // // ----------------------------------------------------------------------------------------------

// // // // // // // Q.18: Find the minimum number among 3 numbers using the ternary operator in JS

// // // // // // // let a = 5, b = 10, c = 3;

// // // // // // // let min = (a < b) ? (a < c ? a : c) : (b < c ? b : c);

// // // // // // // console.log(`The minimum number is ${min}`);
// // // // // // // -----------------------------------------------------------------------------------------------

// // // // // // // Q.19: Find the largest of three numbers in JS

// // // // // // let a = 5, b = 10, c = 3;

// // // // // // let largest = Math.max(a, b, c);

// // // // // // console.log(`The largest number is ${largest}`);
// // // // // // ------------------------------------------------------------------------------------------------------

// // // // // // Q.20: Show

// // // // // // i. Monday to Sunday using switch case in JS

// // // // // // let day = 3;  // assuming 1 = Monday, 7 = Sunday

// // // // // // switch(day) {
// // // // // //     case 1:
// // // // // //         console.log("Monday");
// // // // // //         break;
// // // // // //     case 2:
// // // // // //         console.log("Tuesday");
// // // // // //         break;
// // // // // //     case 3:
// // // // // //         console.log("Wednesday");
// // // // // //         break;
// // // // // //     case 4:
// // // // // //         console.log("Thursday");
// // // // // //         break;
// // // // // //     case 5:
// // // // // //         console.log("Friday");
// // // // // //         break;
// // // // // //     case 6:
// // // // // //         console.log("Saturday");
// // // // // //         break;
// // // // // //     case 7:
// // // // // //         console.log("Sunday");
// // // // // //         break;
// // // // // //     default:
// // // // // //         console.log("Invalid day");
// // // // // // }
// // // // // //  - - - - - - - - - - - - - - - - - - - - - - 
// // // // // //  ii. Vowel or Consonant using switch case in JS

// // // // // //  let letter = 'a';

// // // // // // switch(letter.toLowerCase()) {
// // // // // //     case 'a':
// // // // // //     case 'e':
// // // // // //     case 'i':
// // // // // //     case 'o':
// // // // // //     case 'u':
// // // // // //         console.log(`${letter} is a vowel.`);
// // // // // //         break;
// // // // // //     default:
// // // // // //         console.log(`${letter} is a consonant.`);
// // // // // // }
// // // // // // ------------------------------------------------------------------------------------------------------------

// // // // // Q.21 What are the looping structures in JavaScript? Any one Example?
// // // // // Looping Structures in JavaScript:

// // // // // 1)for loop: Used for iterating over a block of code a certain number of times.
// // // // // 2)while loop: Executes a block of code as long as a specified condition is true.
// // // // // 3)do...while loop: Similar to the while loop but the block of code is executed at least once before the condition is tested.
// // // // // 4)for...in loop: Used for iterating over the properties of an object.
// // // // // 5)for...of loop: Used for iterating over iterable objects like arrays, strings, etc.


// // // // // Example:

// // // // // // Example of a for loop in JavaScript
// // // // // for (let i = 0; i < 5; i++) {
// // // // //     console.log("Iteration number: " + i);
// // // // // }
// // // // // -----------------------------------------------------------------------------------------

// // // // // Q.22 Write a program to print 972 to 897 using for loop in JavaScript.

// // // // for (let i = 972; i >= 897; i--) {
// // // //     console.log(i);
// // // // }
// // // // ------------------------------------------------------------------------------------------------

// // // // Q.23 Write a program to print the factorial of a given number in JavaScript.

// // // // function factorial(n) {
// // // //     let result = 1;
// // // //     for (let i = 2; i <= n; i++) {
// // // //         result *= i;
// // // //     }
// // // //     return result;
// // // // }

// // // // let number = 5; // Example input
// // // // console.log("Factorial of " + number + " is: " + factorial(number));
// // // // -------------------------------------------------------------------------------------------------------

// // // // Q.24 Write a program to print the Fibonacci series up to a given number in JavaScript.

// // // // function fibonacciSeries(n) {
// // // //     let fib = [0, 1];
// // // //     for (let i = 2; i < n; i++) {
// // // //         fib[i] = fib[i - 1] + fib[i - 2];
// // // //     }
// // // //     return fib.slice(0, n);
// // // // }

// // // // let num = 10; // Example input
// // // // console.log("Fibonacci series up to " + num + " numbers: " + fibonacciSeries(num).join(", "));
// // // // ---------------------------------------------------------------------------------------------------------------

// // // // Q.25 Write a program to print a number in reverse order (e.g., number = 64728 ---> reverse = 82746) in JavaScript.

// // // // function reverseNumber(n) {
// // // //     return parseInt(n.toString().split('').reverse().join(''), 10);
// // // // }

// // // // let number = 64728; // Example input
// // // // console.log("Reversed number is: " + reverseNumber(number));
// // // // ---------------------------------------------------------------------------------------------------------------

// // // // Q.26 Write a program to make a summation of a given number (e.g., 1523 ---> sum = 11) in JavaScript.

// // // // function sumOfDigits(n) {
// // // //     return n.toString().split('').reduce((sum, digit) => sum + parseInt(digit, 10), 0);
// // // // }

// // // // let number = 1523; // Example input
// // // // console.log("Summation of digits is: " + sumOfDigits(number));
// // // // --------------------------------------------------------------------------------------------------------------------

// // // // Q.27 Write a program to make a summation of the first and last digit (e.g., 1234 ---> sum = 5) in JavaScript.

// // // // function sumOfFirstAndLastDigit(n) {
// // // //     let digits = n.toString();
// // // //     let firstDigit = parseInt(digits[0], 10);
// // // //     let lastDigit = parseInt(digits[digits.length - 1], 10);
// // // //     return firstDigit + lastDigit;
// // // // }

// // // // let number = 1234; // Example input
// // // // console.log("Summation of first and last digit is: " + sumOfFirstAndLastDigit(number));
// // // // ---------------------------------------------------------------------------------------------------------------------

// // // Q.28 Use console.log() and escape characters to print the following pattern in JS?

// // // for (let i = 1; i <= 5; i++) {
// // //     let row = "";
// // //     for (let j = 1; j <= 5; j++) {
// // //         row += (j === 1 ? i : Math.pow(i, j - 1)) + " ";
// // //     }
// // //     console.log(row.trim());
// // // }
// // // -------------------------------------------------------------------------------------

// // // Q.29 Use pattern in console.log in JS?

// // // 1)

// // // 1
// // // 1 0
// // // 1 0 1
// // // 1 0 1 0
// // // 1 0 1 0 1



// // // for (let i = 1; i <= 5; i++) {
// // //     let row = "";
// // //     for (let j = 1; j <= 5; j++) {
// // //         row += (j === 1 ? i : Math.pow(i, j - 1)) + " ";
// // //     }
// // //     console.log(row.trim());
// // // }
// // //  - - - - - - - - - -
// // //  2)

// // // A
// // // B C
// // // DE F
// // // G H I J
// // // K L M N O

// // // let charCode = 65; // ASCII value of 'A'
// // // for (let i = 1; i <= 5; i++) {
// // //     let row = "";
// // //     for (let j = 1; j <= i; j++) {
// // //         row += String.fromCharCode(charCode++) + " ";
// // //     }
// // //     console.log(row.trim());
// // // }
// // //  - - - - - - - - - - - - - - -  - -
// // //  3)

// // //  1
// // //  2 3
// // //  4 5 6
// // //  7 8 9 10
// // //  11 12 13 14 15


// // //  let num = 1;
// // // for (let i = 1; i <= 5; i++) {
// // //     let row = "";
// // //     for (let j = 1; j <= i; j++) {
// // //         row += num++ + " ";
// // //     }
// // //     console.log(row.trim());
// // // }
// // //  - - - - - - - - - - - - - - - - - - - - - -
// // //  4)

// // //  *
// // // * *
// // // * * *
// // // * * * *
// // // * * * * *


// // // for (let i = 1; i <= 5; i++) {
// // //     let row = "";
// // //     for (let j = 1; j <= i; j++) {
// // //         row += "* ";
// // //     }
// // //     console.log(row.trim());
// // // }
// // // --------------------------------------------------------------------------------------------------------------------

// // // Q.30: Accept 3 numbers from the user using a while loop and check if each number is a palindrome.

// // function isPalindrome(num) {
// //     let original = num.toString();
// //     let reversed = original.split('').reverse().join('');
// //     return original === reversed;
// // }

// // let count = 0;
// // while (count < 3) {
// //     let num = prompt("Enter a number:");
// //     if (isPalindrome(num)) {
// //         console.log(`${num} is a palindrome.`);
// //     } else {
// //         console.log(`${num} is not a palindrome.`);
// //     }
// //     count++;
// // }
// // ------------------------------------------------------------------------------------------------------------

// // Q.31: Display the current day and time in the specified format.

// // let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
// // let now = new Date();
// // let day = days[now.getDay()];
// // let hours = now.getHours();
// // let minutes = now.getMinutes();
// // let seconds = now.getSeconds();
// // let period = hours >= 12 ? 'PM' : 'AM';
// // hours = hours % 12 || 12;

// // console.log(`Today is ${day}. Current Time is ${hours} ${period} : ${minutes} : ${seconds}`);
// // ---------------------------------------------------------------------------------------------------------------

// // Q.32: Get the current date.

// // let currentDate = new Date();
// // console.log(`Current Date: ${currentDate.toDateString()}`);
// // -------------------------------------------------------------------------------------------------------------

// // Q.33: Compare two objects in JavaScript.

// // function areObjectsEqual(obj1, obj2) {
// //     let keys1 = Object.keys(obj1);
// //     let keys2 = Object.keys(obj2);

// //     if (keys1.length !== keys2.length) {
// //         return false;
// //     }

// //     for (let key of keys1) {
// //         if (obj1[key] !== obj2[key]) {
// //             return false;
// //         }
// //     }

// //     return true;
// // }

// // let obj1 = {a: 1, b: 2, c: 3};
// // let obj2 = {a: 1, b: 2, c: 3};
// // console.log(areObjectsEqual(obj1, obj2)); // true
// // ----------------------------------------------------------------------------------------------------------

// // Q.34: Convert an array of objects into a CSV string.

// // function arrayToCSV(arr) {
// //     const headers = Object.keys(arr[0]).join(',');
// //     const rows = arr.map(obj => Object.values(obj).join(',')).join('\n');
// //     return `${headers}\n${rows}`;
// // }

// // const data = [
// //     {name: "John", age: 28, city: "New York"},
// //     {name: "Anna", age: 22, city: "London"},
// //     {name: "Mike", age: 32, city: "Chicago"}
// // ];

// // console.log(arrayToCSV(data));
// // -----------------------------------------------------------------------------------------------------------

// // Q.35: Capitalize the first letter of a string.

// // function capitalizeFirstLetter(str) {
// //     return str.charAt(0).toUpperCase() + str.slice(1);
// // }

// // console.log(capitalizeFirstLetter("hello world!")); // Hello world!
// // -----------------------------------------------------------------------------------------------------------

// // Q.36: Determine if a variable is an array.

// // let variable = [1, 2, 3];
// // console.log(Array.isArray(variable)); // true
// // -----------------------------------------------------------------------------------------------------------

// // Q.37: Clone an array.

// // let originalArray = [1, 2, 3, 4];
// // let clonedArray = [...originalArray];
// // console.log(clonedArray); // [1, 2, 3, 4]
// // ---------------------------------------------------------------------------------------------------------

// // Q.38: Drawback of declaring methods directly in JavaScript objects.

// //  Ans:Declaring methods directly in JavaScript objects can lead to higher memory usage since each object instance will
// //      have its own copy of the method. This is inefficient compared to defining methods on the prototype, where all
// //      instances share the same method, leading to better memory usage.
// // --------------------------------------------------------------------------------------------------------------------
// // Q.39: Print the length of a string on the browser console.

// // let str = "Hello, World!";
// // console.log(`Length of the string: ${str.length}`); // Length of the string: 13
// // -------------------------------------------------------------------------------------------------------------------

// // Q.40: Change all string characters to capital letters using toUpperCase() method.

// // let str = "hello world";
// // console.log(str.toUpperCase()); // HELLO WORLD
// // ------------------------------------------------------------------------------------------------------------------

// // Q.41: (Duplicate) Drawback of declaring methods directly in JavaScript objects.

// // Ans:Declaring methods directly in JavaScript objects can lead to higher memory usage since each object instance will
// // have its own copy of the method. This is inefficient compared to defining methods on the prototype, where all
// // instances share the same method, leading to better memory usage.
// // -----------------------------------------------------------------------------------------------------------------------------

// // Q.42: Get the current date in different formats.

// // function formatDate(date) {
// //     let dd = String(date.getDate()).padStart(2, '0');
// //     let mm = String(date.getMonth() + 1).padStart(2, '0'); // January is 0!
// //     let yyyy = date.getFullYear();

// //     return {
// //         "mm-dd-yyyy": `${mm}-${dd}-${yyyy}`,
// //         "mm/dd/yyyy": `${mm}/${dd}/${yyyy}`,
// //         "dd-mm-yyyy": `${dd}-${mm}-${yyyy}`,
// //         "dd/mm/yyyy": `${dd}/${mm}/${yyyy}`
// //     };
// // }

// // let date = new Date();
// // let formattedDate = formatDate(date);
// // console.log(formattedDate["mm-dd-yyyy"]);
// // console.log(formattedDate["mm/dd/yyyy"]);
// // console.log(formattedDate["dd-mm-yyyy"]);
// // console.log(formattedDate["dd/mm/yyyy"]);
// // -----------------------------------------------------------------------------------------------------

// // Q.43: Use indexOf to determine the position of the first occurrence of 'a' in "30 Days Of JavaScript".

// // let str = "30 Days Of JavaScript";
// // console.log(str.indexOf('a')); // 3
// // -----------------------------------------------------------------------------------------------------------

// // Q.44: Use lastIndexOf to determine the position of the last occurrence of a in "30 Days Of JavaScript"?

// // let str = "30 Days Of JavaScript";
// // let position = str.lastIndexOf('a');
// // console.log(position); // Output: 14
// // ----------------------------------------------------------------------------------------------------------

// // Q.45:  Form Validation in JavaScript

// // function validateForm() {
// //     let email = document.forms["myForm"]["email"].value;
// //     if (email == "") {
// //         alert("Email must be filled out");
// //         return false;
// //     }
// // }
// // -------------------------------------------------------------------------------------------------------------

// // Q.46: Form in Email, Number, Password Validation

// // function validateForm() {
// //     let email = document.forms["myForm"]["email"].value;
// //     let number = document.forms["myForm"]["number"].value;
// //     let password = document.forms["myForm"]["password"].value;

// //     if (!validateEmail(email)) {
// //         alert("Invalid email address");
// //         return false;
// //     }

// //     if (isNaN(number) || number < 1) {
// //         alert("Please enter a valid number");
// //         return false;
// //     }

// //     if (password.length < 6) {
// //         alert("Password must be at least 6 characters long");
// //         return false;
// //     }
// // }

// // function validateEmail(email) {
// //     let re = /\S+@\S+\.\S+/;
// //     return re.test(email);
// // }
// // -----------------------------------------------------------------------------------------------------

// // Q.47:  Dynamic Form Validation in JavaScript

// // document.getElementById("email").addEventListener("input", function() {
// //     let email = this.value;
// //     let emailError = document.getElementById("emailError");
// //     if (!validateEmail(email)) {
// //         emailError.textContent = "Invalid email address";
// //     } else {
// //         emailError.textContent = "";
// //     }
// // });
// // ----------------------------------------------------------------------------------------------------------------------

// // Q.48: How Many Types of JS Events? How to Use It?

// //   1)  Mouse Events: click, dblclick, mousedown, mouseup, mouseover, mouseout, mousemove.
// //   2)  Keyboard Events: keydown, keypress, keyup.
// //   3)  Form Events: submit, change, focus, blur.
// //   4)  Window Events: load, resize, scroll, unload.

// //   document.getElementById("myButton").addEventListener("click", function() {
// //     alert("Button clicked!");
// // });
// // -----------------------------------------------------------------------------------------------------------------------


// // Q.49:  What is BOM vs DOM in JavaScript?

// // BOM (Browser Object Model): Refers to objects provided by the browser to interact with the browser window.
// //                              Examples include window, navigator, screen, history, and location.

// // DOM (Document Object Model): Refers to the structure of the HTML document, allowing JavaScript to interact with 
// //                              and manipulate the elements, attributes, and text content of the document.

// //         // DOM example
// // document.getElementById("myDiv").style.color = "blue";

// // // BOM example
// // alert(window.location.href);
// // ---------------------------------------------------------------------------------------------------------------------------
// // Q.50:  Array vs Object Differences in JavaScript

// // Array: A collection of elements, ordered by index, typically used to store a list of values.
// // Object: A collection of key-value pairs, where keys are strings (or symbols), typically used to represent structured data.
// // ----------------------------------------------------------------------------------------------------------------------------


// // Q.51:  Split the String into an Array Using split() Method.A

// // let str = "30 Days Of JavaScript";
// // let arr = str.split(" ");
// // console.log(arr); // Output: ["30", "Days", "Of", "JavaScript"]
// // -------------------------------------------------------------------------------------------------------------------------


// // Q.52:  Check if the String Contains a Word Script Using includes() Method

// // let str = "30 Days Of JavaScript";
// // let contains = str.includes("Script");
// // console.log(contains); // Output: true
// // ----------------------------------------------------------------------------------------------------------------------------


// // Q.53:  Change All the String Characters to Lowercase Letters Using toLowerCase() Method

// // let str = "30 Days Of JavaScript";
// // let lowerStr = str.toLowerCase();
// // console.log(lowerStr); // Output: "30 days of javascript"
// // ------------------------------------------------------------------------------------------------------------------------------

// // Q.54:  What is the Character at Index 15 in ’30 Days of JavaScript’ String? Use charAt() Method


// // let str = "30 Days Of JavaScript";
// // let char = str.charAt(15);
// // console.log(char); // Output: "S"

// // ---------------------------------------------------------------------------------------------------------------------------

// // Q.55  Copy One String to Another String in JavaScript

// // let str1 = "Hello, World!";
// // let str2 = str1;
// // console.log(str2); // Output: "Hello, World!"
// // -----------------------------------------------------------------------------------------------------------------------------

// Q.56 What is JavaScript? 
// Ans:  JavaScript is a high-level, interpreted programming language that is primarily used to create interactive and dynamic content on web pages.
//      It is a core technology of the World Wide Web, alongside HTML and CSS.
// --------------------------------------------------------------------------------------------------------------------------------------------

// Q.57 What is the use of isNaN function? 
// Ans:  The isNaN function checks whether a value is NaN (Not-a-Number). It returns true if the value is NaN, and false otherwise.
//        This function helps in validating whether a given value is a number.
// -------------------------------------------------------------------------------------------------------------------------------------------

// Q.58 What is negative Infinity?
// Ans:  Negative Infinity is a special value in JavaScript representing negative infinity. It is the result of dividing a negative number by zero or
//      using the -Infinity literal. It is less than any finite number.
// -----------------------------------------------------------------------------------------------------------------------------------------------

// Q.59 Which company developed JavaScript?
//  Ans: JavaScript was developed by Netscape Communications Corporation, specifically by Brendan Eich, in 1995.
//  ----------------------------------------------------------------------------------------------------------------------------------------

//  Q.60 What are undeclared and undefined variables?

//  Undeclared variables: These are variables that are used without being declared first. Using them typically results in a ReferenceError.
//  Undefined variables: These are variables that have been declared but not yet assigned a value. They are automatically assigned the value undefined.
//  ------------------------------------------------------------------------------------------------------------------------------------------------------

//  Q. 61  Write the code for adding new elements dynamically:

//  // Example: Adding new elements to a list
// const list = document.getElementById('myList');

// function addItem(itemText) {
//     const newItem = document.createElement('li');
//     newItem.textContent = itemText;
//     list.appendChild(newItem);
// }

// addItem('New Item');
// --------------------------------------------------------------------------------------------------------------------------------------------------

// Q.62  What is the difference between ViewState and SessionState?

// ViewState: Stores the state of a web page or control between postbacks on the client side. 
//            It is specific to the page and maintained in a hidden field on the client side.

// SessionState: Stores user-specific data on the server side across multiple pages and sessions.
//               It is used to maintain state between different requests from the same user.
// --------------------------------------------------------------------------------------------------------------------------------------------------

// Q. 63 What is === operator?
// Ans: The === operator is the strict equality operator in JavaScript. It checks
// --------------------------------------------------------------------------------------------------------------------------------------------------

// Q.64  How can the style/class of an element be changed?
// Ans:  // Changing the style directly
// document.getElementById('myElement').style.color = 'red';

// // Changing the class
// document.getElementById('myElement').className = 'newClass';
// -------------------------------------------------------------------------------------------------------------------------------------------------

// Q. 65  How to read and write a file using JavaScript?
//  ans: In the browser: JavaScript does not have direct access to the file system. You can use the File API to read files 
//       selected by the user through file input elements, but writing files is typically done using server-side code or web
//        APIs like the File System Access API.
// ---------------------------------------------------------------------------------------------------------------------------------------------------

// Q.66  How can you convert the string of any base to an integer in JavaScript?
//  Ans:  Use the parseInt function with the base as the second argument.
//  let binaryString = '1010';
//  let decimalNumber = parseInt(binaryString, 2);
//  console.log(decimalNumber); // 10
// ------------------------------------------------------------------------------------------------------------------------------------------------

// Q.67  What is the function of the delete operator?
//  Ans:  The delete operator is used to remove a property from an object. It returns true if the property was successfully deleted and false otherwise.
//  let obj = { name: 'Alice', age: 25 };
//  delete obj.age;
//  console.log(obj); // { name: 'Alice' }
// -------------------------------------------------------------------------------------------------------------------------------------------------

// Q.68   What are all the types of pop-up boxes available in JavaScript?
//  Ans:  alert(): Displays a message to the user.
//        confirm(): Displays a dialog with OK and Cancel buttons, returning true or false based on user action.
//        prompt(): Displays a dialog with an input field, allowing the user to enter a value.
// ---------------------------------------------------------------------------------------------------------------------------------------------------

// Q.69  What is the use of void(0)? 
//  Ans:  void(0) is used to evaluate an expression and return undefined. It is often used in URLs to prevent the default action or to prevent the page from reloading.
//  <a href="javascript:void(0);">Click here</a>
// --------------------------------------------------------------------------------------------------------------------------------------------------

// Q.70  How can a page be forced to load another page in JavaScript?
// Ans:  window.location.href = 'https://www.example.com';
// ----------------------------------------------------------------------------------------------------------------------------------------------------

// Q. 71 What are the disadvantages of using innerHTML in JavaScript?
// Ans: 1) Security risks: Can expose the site to cross-site scripting (XSS) attacks if user input is not properly sanitized.
//      2) Performance issues: Can cause the browser to re-render and re-layout the entire content, which can be inefficient for large changes.
//      3) Loss of event handlers: Replacing innerHTML may remove existing event listeners attached to elements.