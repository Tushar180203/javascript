// var x = 5;
// var y = 6;
// var z = x + y;
// console.log(z);

// let x = 5;
// let y = 6;
// let z = x + y;
// console.log(z);

const x = 5;
const y = 6;
const z = x + y;
console.log(z);

// const x=4;
// console.log(x);

 // `let` allows reassignment and blocked spope , caanot be redeclared
  // `const` cannot be reassigned and blocked scope and cannot be redeclared
  //var is function scoped can be redeclared


//   JavaScript moves variable declarations to the top of their scope during compilation.

// var is hoisted with undefined.
// let and const are hoisted but remain in the Temporal Dead Zone (TDZ).

// console.log(x); // undefined
// var x = 5;

// console.log(y); // ReferenceError (TDZ)
// let y = 10;