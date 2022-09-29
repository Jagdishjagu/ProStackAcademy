// OBJECT is representing group of key value pair as one entity//
// property name and property value //
// group of data & functionality of one entity //
// index concept is not applicable //
// object is not a iterable object //
// only one syntax for(   in){} //
//---------------------------------***********---------------------------------//

let ids = { id: 101, name: "Modi", sal: 25000 };
for (id in ids) {
  console.log(id);
}
//---------------------------------***********---------------------------------//
// how to check object is empty or not //
let employee = { id: 101, name: "rahul", sal: 45000 };
console.log(Object.keys(employee));
console.log(Object.keys(employee).length);
console.log(Object.keys(employee).length > 0);
//---------------------------------***********---------------------------------//
let employees = {};
console.log(Object.keys(employees));
console.log(Object.keys(employees).length);
console.log(Object.keys(employees).length > 0);
//---------------------------------***********---------------------------------//
