'use strict';

function sum(a,b){ //eslint-disable-line
  var theSum = a + b;
  var message = 'The sum of ' + a + ' and ' + b + ' is ' + theSum + '.';
  return [theSum, message];
}



// sum(4, 7);



function multiply(a,b){ //eslint-disable-line
  var mult = a*b;
  var arr = ' The product of ' + a + ' and ' + b + ' is ' + mult ;
  return [mult, arr]
}
//

// TODO: Write your code here

function sumAndMultiply(a,b,c){ //eslint-disable-line
  var summ = sum(a,b)
  var bigsum = sum(summ[0], c);
  var prod = multiply(a,b);
  var bigprod = multiply(prod[0], c)
  var str1 = a + ' and ' + b + ' and ' + c + ' sum to ' + bigsum[0];
  var str2 = 'The product of ' + a + ' and ' + b + ' and ' +  c + ' is ' + bigprod[0] ;
  return [bigsum[0], bigprod[0], str1, str2]

}

}

// TODO: Here is the test for sumAndMultiply(); uncomment it to run it
sumAndMultiply(4,7,5);
// TODO: Write your code here
var testArray = [2,3,4]; //eslint-disable-line


function sumArray(testArray1){ //eslint-disable-line
  var num1 = sumAndMultiply(testArray1[0], testArray1[1], testArray1[2]);
  var num1c = num1[0];
  var stri1 = testArray1[0] + ' , ' + testArray1[1] + ' , ' + testArray1[2] + ' was passed in as an array of numbers, and ' + num1c + ' is their sum.';
  return [num1c, stri1]
}

sumArray(testArray);

// TODO: Here is the test for sumArray(); uncomment it to run it
// testSumArray(testArray);

// Once you get the test passing, do an a-c-p cycle and synchronize the code between GitHub and your laptop. Don't forget to create a new branch for your work on the next question!

/////////////////////////////////////
/* Problem 5
Write a function called multiplyArray() that takes an array of numbers as its argument and returns an array whose first element is the product of those numbers, and the second element is a string that EXACTLY follows this example and concatenates a message using the arguments that were passed into the function:

"The numbers 2,3,4 have a product of 24."

IMPORTANT DETAIL: You may not use the arithmetic operator * in this function. To do multiplication, use your multiply() function that you've already created. You're going to have to be resourceful to figure out how to do this.

Test this function by hand in the console to get it working, and when you think it is finished, uncomment the call for the testMultiplyArray() function and see if the test passes.*/

// Write your code here
function multiplyArray(testArray){ //eslint-disable-line

}

// Here is the test for multiplyArray(); uncomment it to run it
// testMultiplyArray(2,3,4);

// Once you get the test passing, do an a-c-p cycle and synchronize the code between GitHub and your laptop. You're done! Submit the link to the repo following the instructions in Canvas.
