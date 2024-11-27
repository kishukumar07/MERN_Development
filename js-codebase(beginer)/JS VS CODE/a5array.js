// Problem1. Given 
// let name=["AMAN", "PULKIT","SHIVANSH","SUBHAM"]; 
// print the position (starting with 1) and the Element in a Single line . 


// let  loopvariable =0; 
// index= name.length-1; 
// while(loopvariable<index)
//     { 
//         console.log(loopvariable+1 , " . ", name[loopvariable] ); 
//         loopvariable++; 
//     } 






// problem. given array of number find the avg of all even number

// let arr=[2,3,4,5,7,8,9,4,6,7]; 
// let sum_even =0; 
// let count_even =0; 
// let avg =0; 
// let loop_var; 


// for(loop_var=0; loop_var<arr.length-1; loop_var++)
// {
//      if (loop_var%2=='0')
//      {
//      sum_even+=arr[loop_var];
//      count_even= count_even+1; 
    
//      }



// }
// avg = sum_even/count_even; 
// console.log("avg of even in array : ",avg); 


//problem iw. you are given a array and you have to print the maximum
let array = [1,4,7,5,98,53,100]; 
// let varx=0;  //we have to put lowest possible no(-infinity) with 0 it doesnt going to be work with array
let varx=-Infinity; 
let i=0;
index=array.length-1;
for(i=0; i<=index;  i++)
{
if(varx<array[i])
{
    varx=array[i];
}

}
console.log(varx);


//problem.find minimum possible no
