// this file will teach you how can you deal with the return value (boolean ) in hof Array.filter
 let arr =[
    {
         name: "Anlit",
        course: "web101", 
     },
     {
        name: "Banuu",
        course: "web201", 
     },
     {
        name: "Ankush",
        course: "web201", 
     },
     {
        name: "Tushar",
        course: "web101", 
     },
 ]; 

// we have four students data and we have to fillter it in the basis of the two course (web101 &web201) 
// CASE.1
let filtered =arr.filter(function(element){
   return true;

})
console.log(filtered); 
// you can see this is printing all the data bcs we the filter function is returning true  this mean all the element to return 


//CASE.2
let filtered1 =arr.filter(function(element){
   return false;

})
console.log(filtered1); 
//now it is not returning anything so console will not print anything 


// the filter hof _ is preety much similar to Array.map but it has two thing in these filter method  you either have to return true  or to return false (bollean value return)  and its a kind of loop it runs as a loop to each and every element of the dataarray 



//CASE.3
let filtered3 =arr.filter(function(element){
   if(element.course ==="web201"){
      return true; 
   }
   else{
      return false; 
   }

})
console.log(filtered3); //this will only print those objects or element of the array where the object will meets the if condition 



// it creates a new array and put element there 