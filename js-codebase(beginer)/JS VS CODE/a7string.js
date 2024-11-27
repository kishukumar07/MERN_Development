//Problem1.Given a string count the number of words (be carefull its word not character) in that string
let sen="Bruce wayne is the BATMAN"; 
console.log(sen.length); 
//word =space no+1
let count=0; 
let i; 
for ( i=0; i<sen.length; i++)
{
  if (sen[i]==' ')  //just predecting space 
    {
    count+=1; 
  }

}
count=count+1; //bcs word_count =Space count  +1
console.log("The no of words is : ",count); 

//this will not correct bcs what if string is nul -it will going to be print 1 

let sen1=""; 
 
//word =space no+1
let wrd=0; 
let j; 
for ( j=0; j<sen.length; j++)
{
  if (sen1[j]==' ')  //just predecting space 
    {
    wrd+=1; 
  }

}

//checking condn that if length !='0 then it will going to print count+1 else print count
if (sen1.length!='0')
{
console.log("The no of words is : ",wrd+1); 
}
else{
    console.log ("The no of words is :",wrd);
}


//now this is the best code

//problem2.Given an array of the string count the averall total number of characters

let  arr=["RAM","RAJU","PAPU","HIMESH"]; 

let l; 
let char_count=0; 
let len=arr.length;
for(l=0; l<len; l++)
{

    char_count+=arr[l].length; //this will count the length of lth element and adding it to a variable 

    

}
console.log("characters is",char_count); 