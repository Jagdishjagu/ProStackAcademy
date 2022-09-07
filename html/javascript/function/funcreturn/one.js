function wish() {
  return "Hello GM";
}
let message = wish();
console.log(message);
//---------------*********---------------//
function add(a, b, c, d) {
  console.log(a + b + c);
  console.log(a + b);
  console.log(a + d);
  return a + b + d;
}
let result = add(1, 2, 3);
add(10, 20, 30);
add(100, 200, 300);
add(1000, 2000, 3000);
console.log(result); // Note this if we are passing console.log before return it gives all arguments//
