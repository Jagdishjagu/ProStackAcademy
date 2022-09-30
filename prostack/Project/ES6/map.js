let employees = [
  { id: 101, name: "rahul", sal: 15000 },
  { id: 102, name: "sonia", sal: 25000 },
  { id: 103, name: "priyanka", sal: 35000 },
  { id: 104, name: "modi", sal: 45000 },
];

employees.map(() => {
  console.log(employees); // This will excecute 4 times if we use array name//
});

employees.map((ele) => {
  console.log(ele); // This will excecute 1 time if we use ELE//
});

employees.map((index) => {
  console.log(index); // This will excecute index value of array//
});
