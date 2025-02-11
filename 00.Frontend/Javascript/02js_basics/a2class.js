//while loop problem 
//printing series



//  let num=10; 
//  let i=1; 
//  while(i<=10)
//  {
//     console.log(i); 
//     i++; 

//  }




//problem2.odd series till no x
// let num=10;
// let i=1;
// while(i<=10)
// {
//     if(i%2=='1')
//     {console.log(i);

//     }
//     i++; 
// }




//problem 3. print the sum of all the multiple of 3 till 0 to given no 

// let num=15; 
// let multiple =0;
// let i=0; 
// while(i<=num)
// {
//     if (i%3=='0')
//     {
//         multiple= multiple+i; 

//     }
//     i++; 
// }
// console.log("multiple's sum =", multiple);


//problem 4. print the average of even numbers from one to 100 ; 


// let num=100; 
// i=1;
// let sum_even_mul = 0; 
// count =0; 
//  let avg ;

// while(i<=num)
// {
//     if(i%2=='0')
//     {
//         sum_even_mul+=i; 
//         count+=1; 
//     }
//     i++;
// }

// avg =(sum_even_mul/count); 
// console.log("the avg of sum of evens till 100 is : ", avg); 



//using continue statement under while loopwill become endless loop 
//?? bcs continue will send the control at end of the loop and the updation of variable 
//is will stop and the loop variable be constant 



// let p=0; 
// while(p<10)
//     {
      
//         console.log(p);// if this cde is her i't is under a  infinite loop
// if (p==4)
// {
//     continue; 
//      }


//      //console.log(p); //if this code is here before condn iwill also be skiped 
//         p++;
//     }
      
    


//problem. //series printing while loop till no 
// let num=10;
// let i=1; 
// while(i<11)
// {
//     console.log(i);
// i++;
// }


//problem2 horizontally print
// let num =10;
// let i=1; 
// let str=" ";

// while(i<=10)
// {
//     str=str+i; 
// i++; 
// }
// console.log(str); 


//problem3. printing 10 to 1 horizontally 
// let num=10; 
// let i=10; 
// let str=" "; 


// while(i>0)
// {
//     str=str+i; 
//     i--; 
// }
// console.log(str); 



//prolem printing series of odd no till 20 in horizontall manner


// let num=20 ;
// let i=1;
// let str =" "; 

// while(i<=20)
// {
//     if(i%2=='1')
//     {
//         str+=" "+i; 


//     }
//     i++; 
// }
// console.log(str); 




//problem. 1_*2_*3_*4_*

// let num=4; 

// let str=" ";
// let loop_var=1; 
// while(loop_var<=4)
// {
//     str= str+loop_var+"_*"; 
// loop_var++;
// }

// console.log(str); 




//probelem. the sum of those number which is divisible by 2 or 5 bw the range of 15; 

// let range =15; 
// let i=1; 
// let sum = 0;

// while (i<=range)
// {
//     if(i%2=='0'|| i%5=='0')
//     {
//         sum=sum+i; 

//     }
//     i++;
// }
// console.log(sum); 






//problem. factorial of number


// let num = 5;
// let fact =1;  
// loop_var = num; 

// while(loop_var>0)
// {
//     fact= fact*loop_var; 
//     loop_var--; 

// }
// console.log("the fact of num : ", num, " is : ", fact ); 





//problem. calculaing the avg of even no till a range of 50 (including range )

// let avg=0; 
// let range=6; 
// let i=0; // if here i will take value of loop var 0 it  will qualify the if condition and make count always one extra
// let count=0; 
// let sum=0; 

// while(i<=range){

//     if(i%2=='0')
//     {
//         sum =sum+i;
//         count =count +1; 

//     }

//     i++; 
// }
// count =count-1; 
// console.log("sum =",sum); 
// console.log("count =",count); 
// avg= sum/count; 
// console.log(" the avg of even sum till ", range , " is: ", avg );



//problem . till 15 print the sum of those no which is divisible by 2or 5 (or multiple of 2,5)
// let range =15; 
// let i=1; 
// let sum = 0;

// while (i<=range)
// {
//     if(i%2=='0'|| i%5=='0')
//     {
//         sum=sum+i; 

//     }
//     i++;
// }
// console.log(sum); 



