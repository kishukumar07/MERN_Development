/* These coding problems (with minimal modifications) are often asked in coding interviews. Even if you have never encountered them, give them a try. It opens up mind for some brand new information & its proved by science.
*/

//Problem 1. 
function chips() {
    console.log('sync: chips');
  }
  
  function pizza() {
    setTimeout(()=>{
      console.log('async: pizza');
    },0);
  }
  
  function main() {
    chips();
    pizza();
    chips();
    chips();
    chips();
  }
  
  main();


  // Problem 2.
  // Guess the output
  function sayGoodbye() {
    console.log("Good bye! ", this); //this will point to global object  
  }
  
  function sayHello() {
    console.log("Helloo! ", this);  //this will point to global object 
    sayGoodbye();
  }
  
  sayHello();



//   Problem 3.
// Guess the output
function main() {
  // {name: 'Vivek'}  globally  by .call 
    function sayRegularHello() {
      console.log("Regular Hello ", this);  //still .this will point global object
    }
    
    sayRegularHello();

    
    var sayArrowHello = () => {
      console.log("Arrow Hello ", this); //inside arrow this will point the parent object . 
    };

    sayArrowHello();
}

main.call({name: 'Vivek'})






// Problem 4.
// What is the output of the script?
let name = "Ilya";
console.log( `hello ${1}` ); // ?
console.log( `hello ${"name"}` ); // ?
console.log( `hello ${name}` ); // ?



// Problem 5.
// What are the values of a and x after the code below?
let a = 2;
let x = 1 + (a *= 2);

console.log(a,x);



//Problem 6. 
//what will the result be ? 
console.log((2 && 3 )); //and operator always checks for first falsy value  if not found it will return the same last thing  ~ 3 
console.log(2&&true) 
console.log(0&&2)
console.log(1&&0)
 
console.log(null || (2 && 3 ) || 4);  //or operator always checks for first truthy value  the same way this also works will return the character whatever is truthy . 

 


//Problem 7. 
// What will be the result be? 
let x1= (1&&2) ?? 3; 
console.log(x1);   

//nullish collish operator - it always checks if the left operator is undefined or null in this case it will assing or return the the right value like ..(undefined || Null) ||=  whatever ; 



// and many more ...