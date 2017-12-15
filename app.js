'use strict';




function sum(a,b){
  var theSum = a + b;
  var message = 'The sum of ' + a + ' and ' + b + ' is ' + theSum + '.';
  return [theSum, message];

}

sum(4, 7);



function multiply(a,b){
  var mult = a*b;
  var arr = ' The product of ' + a + ' and ' + b + ' is ' + mult ;
  return [mult, arr]
}

testMultiply(5,9);

function sumAndMultiply(a,b,c){ //eslint-disable-line
  var summ = sum(a,b);
  var bigsum = sum(summ[0], c);
  var prod = multiply(a,b);
  var bigprod = multiply(prod[0], c)
  var str1 = a + ' and ' + b + ' and ' + c + ' sum to ' + bigsum[0];
  var str2 = 'The product of ' + a + ' and ' + b + ' and ' +  c + ' is ' + bigprod[0] ;
  return [bigsum[0], bigprod[0], str1, str2]


sumAndMultiply(4,7,5);

var testArray = [2,3,4];


function sumArray(testArray1){ //eslint-disable-line
  var num1 = sumAndMultiply(testArray1[0], testArray1[1], testArray1[2]);
  var num1c = num1[0];
  var stri1 = testArray1[0] + ' , ' + testArray1[1] + ' , ' + testArray1[2] + ' was passed in as an array of numbers, and ' + num1c + ' is their sum.';
  return [num1c, stri1]
}

sumArray(testArray);


function multiplyArray(testArray1){ //eslint-disable-line
  var num1 = sumAndMultiply(testArray1[0], testArray1[1], testArray1[2]);
  var num1c = num1[1];
  var stri1 = 'The numbers ' + testArray1[0] + ' , ' + testArray1[1] + ' , ' + testArray1[2] + ' ave a product of ' + num1c;
  return [num1c, stri1]

}

multiplyArray(testArray);
