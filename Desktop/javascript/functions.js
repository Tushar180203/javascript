
// Function Declarations
function fun(name) {
    return `${name}`;
}
    
console.log(fun("tushar"));

// Function Expressions
const print = function(name) {
    return `${name}!`;
}; 
console.log(print("sher"));


// Default Parameters
function func(name="sher") {
    return name };
console.log(func());
 //Allows you to set default values if no argument is passed
//revents undefined values.


// Closure
function closure() {
    let count = 0;
    return function() {
    count++;
     return count;
    };
}
const count= closure();
console.log(count());
console.log(count());
console.log(count());


// Lexical Scope
function uperKafunction() {
    let baharHun = 'I am baharhun!';
    function anderWalaFunc() {
        console.log(baharHun);
    }
    anderWalaFunc();
}
console.log(uperKafunction());

// Immediately Invoked Function Expressions (IIFE)
(function() {
    console.log('sher');
})();//Wrapped inside () and executed with ().


// Function Hoisting
Function(); // This works because of hoisting

function Function() {
    console.log('bulaya uper hai per declare mujhe niche kiya h');
}