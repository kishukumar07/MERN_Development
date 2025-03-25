
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







