/*
There are three scopes. Look at the screenshot and try to make a sense of it.


Javascript is a **two-pass** system. The code is processed (or compiled or parsed) first. In this first phase, the scopes are set up and the grammar of your code is validated. Then in the second phase, the code is executed. 

Javascript organizes scopes with **functions** and **blocks**. In the processing phase, the scope for every identifier (variable) is set.

In a lexically scoped language (which Javascript is), all of the identifiers & scopes that we dealing with, are determined in the first pass (compile-time). The decisions that I make about scope are author time decisions. When I write a function & put a variable there, it means that the variable is always gonna be scoped to that function. The place where the variable "**sits**" physically in your code and the variables that **"surrounds"** it physically is **important**. 

Another, important thing about lexical scopes is that if the compiler cannot find a variable's declaration within the scope, it looks up to its parents and ancestor's scope.

In a non-strict environment, if a variable is used and never declared, JS auto declares it in the global scope. it's a bad part of JS. We should always operate in strict mode.

*/

// rest operator helps collect all the arguments in an array
function doSomething(first, second, ...rest) {
    console.log(first, second, rest); // rest is guarenteed to be an array
  }
  
  doSomething('one', 'two', 'three', 'four', 'five');



//The spread operator explodes array or objects in place .
let arr = [1, 3, 5, 7, 9];
console.log(...arr); //-> 1 3 5 7 9

let user = {
  firstName: 'Vivek',
  lastName: 'Agarwal'
}

console.log({
  ...user,
  fullName: `${user.firstName} ${user.lastName}`
});
//-> {firstName: 'Vivek', lastName: 'Agarwal', fullName: 'Vivek Agarwal'}
