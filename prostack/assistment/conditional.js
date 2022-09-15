//WAP to check if number is divisible by 7 or not//
var a = 49;
if (a % 7 == 0) {
  console.log("it is divisible by 7");
} else {
  console.log("Not divisible by 7");
}

// WAP a program to check if a number is multiple of 3 or not//dought
var b = 9;
if (b * 3 == 0) {
  console.log("true");
} else {
  console.log("false");
}

// WAP to check if number is positive or not//
var c = 10;
if (c < 11) {
  console.log("Positive");
} else {
  console.log("Negative");
}

// WAP to check if a number is having 4 at the units place or not//
// WAP to check if number is 3 digits number or not//
var d = 499;
if (d > 99 && d < 1000) {
  console.log("Yes it is 3 digit number");
} else {
  console.log("No it is not 3 digit number");
}

// WAP a program to print even or odd for a given number//
var e = 2467;
if (e % 2 == 1) {
  console.log("Even");
} else {
  console.log("Odd");
}

// WAP a progran to print greatest number in given two number//
var f = 20;
var g = 30;
if (f > g) {
  console.log("F is greater");
} else {
  console.log("G is greater");
}
// WAP to to print the least number given two number//

var f = 25;
var g = 50;
if (f < g) {
  console.log("F is least");
} else {
  console.log("G is least");
}
// WAP a program to print the greatest number in given three numbers//dought
var h = 1000;
var i = 200;
var j = 3000;
if (h > i && h > j) {
  console.log("h is greater");
} else if (i > h && i > j) {
  console.log("i is greater");
} else {
  console.log("j is greater");
}
// WAP a to print the least number giveb three numbers//dought
var k = 100;
var l = 20;
var m = 30;
if (k < l && k < m) {
  console.log("k is least");
} else {
  console.log("l is least");
  console.log("m is least");
}
//WAP to print given 3 numbers in ascending orders//dought
let n = [31, 1, 101, 32, 33, 34, 35, 21, 22, 23, 24, 25, 11, 12, 13, 14, 15];
n.sort();
console.log(n);

let number = [
  31, 1, 101, 32, 33, 34, 35, 21, 22, 23, 24, 25, 11, 12, 13, 14, 15,
];
number.sort().reverse();
console.log(number);

// WAP to find largest of three numbers//
