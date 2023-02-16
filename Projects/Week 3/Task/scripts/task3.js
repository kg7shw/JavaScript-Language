/* Lesson 3 */

/* FUNCTIONS */

// Step 1: Using function declaration, define a function named add that takes two arguments, number1 and number2
// Step 2: In the function, return the sum of the parameters number1 and number2
function add(numOne, numTwo) {
  const total = numOne + numTwo;
  return total;
}

// Step 3: Step 3: Using function declaration, define another function named addNumbers that gets the values of two HTML form controls with IDs of addend1 and addend2. Pass them to the add function
function addNumbers() {
  let append1 = parseInt(document.getElementById("addend1").value);
  let append2 = parseInt(document.getElementById("addend2").value);
  let result = add(append1, append2);

  document.getElementById("sum").value = result;
}
// Step 4: Assign the return value to an HTML form element with an ID of sum

// Step 5: Add a "click" event listener to the HTML button with an ID of addNumbers that calls the addNumbers function
document.getElementById("addNumbers").addEventListener("click", addNumbers);

// Step 6: Using function expressions, repeat Steps 1-5 with new functions named subtract and subtractNumbers and HTML form controls with IDs of minuend, subtrahend, difference and subtractNumbers
const subtract = function (numOne, numTwo) {
  return numOne - numTwo;
};

const subtractNumbers = function () {
  let numOne = parseInt(document.getElementById("minuend").value);
  let numTwo = parseInt(document.getElementById("subtrahend").value);
  let result = subtract(numOne, numTwo);

  document.getElementById("difference").value = result;
};

document
  .getElementById("subtractNumbers")
  .addEventListener("click", subtractNumbers);
// Step 7: Using arrow functions, repeat Steps 1-5 with new functions named multiply and mulitplyNumbers and HTML form controls with IDs of factor1, factor2, product and multiplyNumbers

multiply = (numOne, numTwo) => numOne * numTwo;

mulitplyNumbers = () => {
  let numOne = parseInt(document.getElementById("factor1").value);
  let numTwo = parseInt(document.getElementById("factor2").value);
  let result = multiply(numOne, numTwo);
  document.getElementById("product").value = result;
};

document
  .getElementById("multiplyNumbers")
  .addEventListener("click", mulitplyNumbers);
// Step 8: Using any of the three function declaration types, repeat Steps 1-5 with new functions named divide and divideNumbers and HTML form controls with IDs of dividend, divisor, quotient and divideNumbers
divide = (numOne, numTwo) => numOne / numTwo;

divideNumbers = () => {
  let numOne = parseInt(document.getElementById("dividend").value);
  let numTwo = parseInt(document.getElementById("divisor").value);
  let result = divide(numOne, numTwo);
  document.getElementById("quotient").value = result;
};

document
  .getElementById("divideNumbers")
  .addEventListener("click", divideNumbers);

// Step 9: Test all of the mathematical functionality of the task3.html page.

/* BUILT-IN METHODS */

// Step 1: Declare and instantiate a variable of type Date to hold the current date
const currentDate = new Date();
// Step 2: Declare a variable to hold the current year
let currentYear;
// Step 3: Using the variable declared in Step 1, call the built-in getFullYear() method/function and assign it to the variable declared in Step 2
currentYear = currentDate.getFullYear();
// Step 4: Assign the current year variable to an HTML form element with an ID of year
document.getElementById("year").textContent = currentYear;
/* ARRAY METHODS */

// Step 1: Declare and instantiate an array variable to hold the numbers 1 through 25
const myArray = [];

for (let i = 0; i < 25; i++) {
  myArray[i] = i + 1;
}

// An array starting at 1 that ends at 1000

// Step 2: Assign the value of the array variable to the HTML element with an ID of "array"
document.getElementById("array").textContent = myArray;
// Step 3: Use the filter array method to find all of the odd numbers of the array variable and assign the reult to the HTML element with an ID of "odds" ( hint: % (modulus operartor) )

document.getElementById("odds").textContent = myArray.filter(
  (item) => item % 2 === 1
);
// Step 4: Use the filter array method to find all of the even numbers of the array variable and assign the result to the HTML element with an ID of "evens"
document.getElementById("evens").textContent = myArray.filter(
  (item) => item % 2 === 0
);
// Step 5: Use the reduce array method to sum the array variable elements and assign the result to the HTML element with an ID of "sumOfArray"
document.getElementById("sumOfArray").textContent = myArray.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  0
);
// Step 6: Use the map array method to multiply each element in the array variable by 2 and assign the result to the HTML element with an ID of "multiplied"
document.getElementById("multiplied").textContent = myArray.map(
  (arrayItem) => arrayItem * 2
);

// Step 7: Use the map and reduce array methods to sum the array elements after multiplying each element by two.  Assign the result to the HTML element with an ID of "sumOfMultiplied"

document.getElementById("sumOfMultiplied").textContent = myArray
  .map((arrayItem) => arrayItem * 2)
  .reduce((accumulator, currentValue) => accumulator + currentValue, 0);
