numbers = [
  0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
];
/* numbers.filter % 2;
console.log(numbers); */

let even_Number = numbers.filter((num) => {
  return num % 2 == 0;
});
console.log(even_Number);

let even_Number1 = numbers.filter((num) => {
  return num % 2 == 1;
});
console.log(even_Number1);
