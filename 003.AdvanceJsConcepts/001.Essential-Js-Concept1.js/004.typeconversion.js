
/*💡 There are only six ***falsey*** values in JavaScript: `undefined` , `null` , `NaN` , `0` , `""` (empty string), and `false`. Anything that is not falsey it truthy.
*/

// The easiest way to verify:
let a = null;

if (a) {
  console.log(`${a} is Truthy.`)
} else {
  console.log(`${a} is Falsey.`)
}

//? null is Falsey.


/*
These kind of questions are very common for the entry level technical interviews. Try to answer if the following values are truthy or falsey:
1
""
"null"
"0"
[]
{}
*/



// Type conversions

/*
### String conversion
We can also call the `String(value)` function to convert a value to a string.
*/
let original = true;
let converted = String(original);

/*
### Numeric conversion

- We can use the `Number(value)` function to explicitly convert a `value` to a number
- Non valid strings passed into `Number` returns `NaN`
*/
// **Edge cases:** 

console.log(Number(undefined)) //NaN

console.log(Number(null)) // 0

console.log(Number(true)) // 1

console.log(Number(false)) //0 

console.log( Number(123) ) // becomes 123 

//no to string .
console.log(String(0)) // 0
console.log(typeof(String(1))); 

/* ParseInt 
MDN
The parseInt method parses a value as a string and returns the first integer. If it finds anything other than a number or empty spaces first, it returns NaN
*/
parseInt('400 Rs.') //becomes 400
parseInt('Rs. 400') // becomes NaN



/*Technique most used in the industry (coercion technique)
Put a + Mathematical operator in front of a number & it will convert value to a number automatically. If the string represents a non number, NaN is returned.
console.log(+"123")
*/
console.log(+"123")  //123 
console.log(+(undefined)) //NaN 

console.log(+(null)) // 0

console.log(+(true)) // 1

console.log(+(false)) //0 

console.log(+(123) ) // becomes 123 

/*
## Boolean Conversion

The `Boolean` function converts falsey values to `false` and the rest of the values to `true`

```jsx
*/
console.log(Boolean("ABC")); // true
console.log(Boolean("")); // false


/*
Boolean conversion technique most used in the industry (coercion technique, double negation)

```jsx
*/

console.log(!!("ABC")); // true
console.log(!!("")); // false

/*
> do not be scared by the heavy word coercion. It simply means automatic type conversion
>
*/



