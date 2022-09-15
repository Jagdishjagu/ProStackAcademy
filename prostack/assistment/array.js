// How to create arrays in javascript //
let emp = [101, "Rahul", 103, 104, 105, true, false, []];
console.log((emp[1] = ["Rahul Gandhi"]));
//---------------------------------***********---------------------------------//
// How to access items from arrays in JS //
let a = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(a[0]);
console.log(a[1]);
console.log(a[2]);
console.log(a[3]);
//---------------------------------***********---------------------------------//
// How to access the last item from an array in JS //
let b = [101, 102, 103, 104, 105, 106, "rahul", 107, 108, 109];
console.log(b[b.length - 1]);
//---------------------------------***********---------------------------------//
// How to access all item from array using for loop in JS //
let number = [1, 2, 3, 4, "Ajith", "Vijay", "Surya", [], {}, 5, 6, 7];
for (i = 1; i <= number.length - 1; i = i + 1) {
  console.log(number[i]);
}
