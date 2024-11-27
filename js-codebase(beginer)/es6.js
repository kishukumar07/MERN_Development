//es6= 1.spread operator 
//2. rest operator
//3. ternary operator
//4. hof
//5. let ,const ,var



//arrow function only here !!
//how you are going to print the sum of two numbers using functions
// function sum(a,b){
//     let sum = a+b;
// return sum; 
// } 

// console.log(" sum is ", sum(4,6));


//let do the same thing with arrow function 
// let sum = (a,b)=> {
//     let sum = a+b;
// return sum ; 
// } 
// console.log(" sum is ", sum(4,6));






//problem 1. write a function to calculate the sum of all even elements of array ...

// let arr=[1,3,4,5,6,7,8,9,10]; 


//lets do with conventianal method first


// function sm(a){
//     let sum =0; 
//     let i=0;
    
//     for (i=0; i<a.length; i++){
//         if(a[i]%2==0)
//         {
//             sum+=a[i]; 
//         }
//     }   
//     return sum; 
// }
// console.log(sm(arr)); 




//now let make the same que full with ecma script 

// let sum =function(...arr)
// {
// let add=0; 
//    arr.forEach(function(element, index ){
//        element%2==0? add+=element: ""; 
//     });
// console.log(add); 

// }
// sum(1,2,3,4,5,6,7,8); 

//let convert it into a arrow function by just removing function key word and adding => next to the parameter
// let sum =(...arr)=>
// {
// let add=0; 
//    arr.forEach((element, index )=>{
//        element%2==0? add+=element: ""; 
//     });
// console.log(add); 

// }
// sum(1,2,3,4,5,6,7,8); 






//this should be your priority while writing the code..
//your code should be neet and clean and as short as  possible (use es6)



//assignment que of object method 
//you are given an object which contain a key data containing string values 
//implement the following object methods for implement the problem
//reverse all the strings (use es6 )
//sample input :-
// 5
//Niket nishat ravan savita hardeep


let obj ={
    name : ["niket", "nishat", "ravan","savita", "hardeep"],

  rev : function(){
    let ar=[];
 
let i,j; 

for(i=0; i<=this.name.length-1; i++)

{
  let bag=" ";
  for(j=this.name[i].length-1; j>=0; j--)
  {
bag+=this.name[i][j]; 

  }
ar.push(bag); 

}

console.log(ar.join(" ")); 


  } 


}


obj.rev();