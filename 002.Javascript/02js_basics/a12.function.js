//function- functions are a block of code specially designed to perform a certain task an it helps in controling and manage the code 

//write 4functions to perform addition substraction , multiplication, division

//now how to solve this questions 
//first you have to solve without function 
//convert it into function
//make the function intilligent (parameters)


function sum(){
    let a=5; 
    let b=6; 
    console.log("sum=:",a+b);
}

function sub(){
    let a=5; 
    let b=6; 
    console.log("sub :",a-b);
}

function pro(){
    let a=5; 
    let b=6; 
    console.log("pro=:",a*b);
}

function div(){
    let a=5; 
    let b=6; 
    console.log("div=:",a/b);
}
//fun calling
sum();
sub();
pro();
div();





//check the no is prime or not using function 

function prime(a)
{
    let fact=0; 
    for(let i=0; i<=a; i++){

if(a%i=='0')
{
fact++; 
}
    }
if(fact==2)
{
    console.log(a,"is the prime no ");

}
else{
    console.log("it is not a prime no ");
}
}

//calling
prime(4);



//lets use return statement in function  --you can do anything with the ans of function !whatever you want 

//take two integer pass it to sum function take return sum value store it in a new variable pass the value to a even-odd function take return
///print if the sum is even or odd 



