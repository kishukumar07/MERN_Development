//problem1 . return true if the no is even return false if the no is odd
function evenodd(n){
if(n%2==0)
{
    return true; 
}
else {
    return false; 
}

}
//calling 

let p=evenodd(18); 
console.log(p);


//problem2.  using the above function , count even numbers bw 1 and 50 
function evenodd(n){
    if(n%2==0)
    {
        return true; 
    }
    else {
        return false; 
    }
    
    }
let num=50;
    let count=0; let i; 
    for (i=0; i<=num; i++)
    {
        if(evenodd(i)==true)
        {
            count++
        }
    }

    console.log(count);



    //problem3.  using the above function , count odd numbers bw 1 and 50 
function evenodd(n){
    if(n%2==0)
    {
        return true; 
    }
    else {
        return false; 
    }
    
    }
let num1=50;
    let count1=0; let j; 
    for (j=0; j<=num1; j++)
    {
        if(evenodd(j)==false)
        {
            count1++
        }
    }

    console.log(count1);


        //problem4.  using the above function , print all the odd numbers bw 1 and 50 
function evenodd(n){
    if(n%2==0)
    {
        return true; 
    }
    else {
        return false; 
    }
    
    }
let num2=50;
let bag=" ";    
let k; 
    for (k=0; k<=num2; k++)
    {
        if(evenodd(k)==false)
        {
            
        bag+=k+" "; 
        }
    }
    console.log(bag);



//problem5. write a function to reverse a string 

function rev(string){
    let bag2 =" "; 
    let m; 
    for (m=(string.length-1) ; m >=0; m--)
    {
        bag2+= string[m]; 
    }

    return bag2; 
}

//calling 
let str ="niket";

console.log(rev(str));



//problem.6 check weather the given string is palindrome or not 

function rev1(pstr){

    let n; 
    let bag3=""; 
    for(n=pstr.length-1; n>=0; n--){
        bag3=bag3+pstr[n]; 
    }
    let new_str=bag3;
    return new_str; 
    
}
let old_str="madam"; 
let new_one=rev1(old_str);

console.log(new_one);
if(new_one==old_str)
    {
        console.log("yes its a palindrome ");
    } 
    else 
    {
        console.log("no");
    }





















//






