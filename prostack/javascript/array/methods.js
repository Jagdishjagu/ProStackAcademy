// PUSH method is adding or inserting value at end //
let a = [1, 2, 3, 4, 5, 6, 7, 8];
a.push(9);
a.push(10);
console.log(a);
// [1, 2, 3, 4, 5, 6, 7, 8, 9] //end
//---------------------------------***********---------------------------------//
// POP method is deleting last value //
let b = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let removed = b.pop();
console.log(removed); // 10 //
// [1, 2, 3, 4, 5, 6, 7, 8, 9] //end
//---------------------------------***********---------------------------------//
// UNSHIFT method is adding or inserting value at beganing //
let c = [2, 3, 4, 5, 6, 7, 8, 9];
c.unshift(1);
c.unshift(0);
console.log(c);
// [0,1,2, 3, 4, 5, 6, 7, 8, 9] //end
//---------------------------------***********---------------------------------//
// SHIFT method is deleting first value //
let d = [2, 3, 4, 5, 6, 7, 8, 9];
let removed1 = d.shift();
console.log(d); // [3, 4, 5, 6, 7, 8, 9]//
console.log(removed1); // 2 //end
//---------------------------------***********---------------------------------//
// INDEX method if element present multiple time then this methods return the index of first occurance //
// if index value is not available then it will give us -1 //
let e = [10, 20, 30, 40, 50];
console.log(e.indexOf(10)); // 0 //
console.log(e.indexOf(50)); // 4 //
console.log(e.indexOf(99)); // -1 //
//---------------------------------***********---------------------------------//
// SLICE method to get part of array as slice //page 35
// slice(start,end) returns the array of element from starting index to end -1 index //
let size = [2, 4, 6, 8, 10, 12];
console.log(size.slice()); // [2, 4, 6, 8, 10, 12] //
console.log(size.slice(0, 3)); // [2,4,6] //
console.log(size.slice(1, 3)); // [4,6] //
console.log(size.slice(0, -1)); // [ 2, 4, 6, 8, 10 ] //
//---------------------------------***********---------------------------------//
