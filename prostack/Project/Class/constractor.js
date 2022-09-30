class Employee {
  constructor(ids, names, sals) {
    this.id = ids;
    this.name = names;
    this.salary = sals;
  }
}
let emp1 = new Employee(101, "Rahul", 20000);
let emp2 = new Employee(102, "Sonia", 30000);
let emp3 = new Employee(103, "Priyanka", 40000);
console.log(emp1);
console.log(emp2);
console.log(emp3);
