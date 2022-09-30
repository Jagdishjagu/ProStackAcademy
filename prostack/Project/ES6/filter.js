Cars = [
  { name: "Honda", price: 10000, color: "red" },
  { name: "Maruti", price: 20000, color: "blue" },
  { name: "swift", price: 30000, color: "green" },
  { name: "Enova", price: 40000, color: "orange" },
  { name: "Honda", price: 20000, color: "yellow" },
  { name: "Maruti", price: 20000, color: "blue" },
  { name: "swift", price: 30000, color: "green" },
  { name: "Enova", price: 40000, color: "orange" },
  { name: "Fortuner", price: 10000, color: "red" },
  { name: "bus", price: 20000, color: "blue" },
  { name: "auto", price: 30000, color: "green" },
  { name: "audi", price: 40000, color: "pink" },
  { name: "scarpio", price: 15000, color: "red" },
  { name: "Zen", price: 25000, color: "blue" },
  { name: "desire", price: 30000, color: "green" },
  { name: "Lori", price: 40000, color: "orange" },
];
let new_car = Cars.filter((car) => {
  return car.name == "Honda"; // in map boolean value will execute, But in filter object will excecute//
});
console.log(new_car);
