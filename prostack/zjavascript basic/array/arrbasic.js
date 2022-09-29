// ARRAY is representing group of value as one entity//
//allowed duplicate and heterogenius value//
// values are stored in indexing starting from 0//
// indexing and slicing is possible//
// negative - value is not allowed//
//iterative statement are possible//
//Insertion order is preserved//
// To find out array to array with true or false //
//---------------------------------***********---------------------------------//
var a = [1, 2, 3, 4];
var b = [1, 2, 3, 4];
console.log(a == b); //false//

var a = [1, 2, 3, 4];
var b = [1, 2, 3, 4];
console.log(a[0] == b[0]); //true//
//---------------------------------***********---------------------------------//

var size = [10, 20, 30, 40, 50];
console.log(size); //[10, 20, 30, 40, 50]
console.log(size[0]); //10//
console.log(size[4]); //50//
console.log(size[10]); //undefined//

//-------------------------//using for(of)
let names = ["Modi", "Rahul", "Sonia", "Vijay", "Ajith", "surya"];
for (name of names) console.log(name);
// all names will display/

//-------------------------// using forloop
let ids = [101, 102, 103, 104, 105, 106, 107, 108, 109];
for (var i = 0; i <= ids.length - 1; i = i + 1) console.log(ids[i]);
// ids from 101 to 109 will display

//---------------------------------***********---------------------------------//
// reverse statement in array//
let arr = [101, 102, 103, 104, 105, 106, 107, 108, 109, 110];
console.log(arr.reverse());
