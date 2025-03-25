/*Rest and Spread
MDN- rest
 MDN - spread */

// rest operator helps collect all the arguments in an array
function doSomething(first,second, ...rest) {
  console.log(first, second, rest); // rest is guarenteed to be an array
}

doSomething('one', 'two', 'three', 'four', 'five');

// The spread operator explodes array or objects in place
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
//-> {firstName: 'Vivek', lastName: 'Agarwal', fullName: 'Vivek Ag