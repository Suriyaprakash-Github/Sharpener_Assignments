//call Function
// let Student = {
//   age: 20,
// };
// function addAge(a) {
//   return this.age + a;
// }
// console.log(addAge.call(Student, 10));

// Apply Function
// let Student = {
//   age: 20,
// };
// function addAge(a, b, c) {
//   return this.age + a + b + c;
// }
// let a = [20, 25, 30];
// console.log(addAge.apply(Student, a));

//Bind Function
// let Student = {
// age: 20,
// };
// function addAge(a, b, c) {
// return this.age + a + b + c;
// }
// var x = 20,
// y = 25,
// z = 30;
// let binds = addAge.bind(Student);
// console.log(binds(this.x, this.y, this.z));

// let Student = {
//   age: 20,
// };
// function printAge() {
//   return this.age;
// }
// console.log(printAge.call(Student));

//Currying:

let multiply = function (x, y) {
  console.log(x * y);
};
let multiplyByTwo = multiply.bind(this, 2);
multiplyByTwo(100);
