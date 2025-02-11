// //we can declare strings with bot single and double quotes; 
// let str1= 'hello'; 
// let str2 ="hello"; 

// //lets know how many character (or length of the string ) in str1 -- d
// console.log(str1.length);

// //why do we need length property in string 
// //for conditions like 

// let pswrd=" abc123"; 

// if(pswrd.length>='8')
// {
//     console.log("pasword created");
// }
// else
// {
//     console.log("use maximum 8 characters "); 

// }



// //prob. given a string and have to print each character in new line 
// let str3="hello" ,i;
// console.log(str3.length); 
// for(i=0; i<=str3.length-1; i++)  

// {
//     console.log(str3[i]); //you can acess the characters using index no 
// }


// //strings are imutable.
// str3[2]="4"; 
// console.log(str3); 


// how can i change any character inside a string just by coping them to a new string
// let str4 ="pello"; 
// let str5 =""; 


// let i; 

// for(i=0; i<str4.length; i++)
// {
//     if(str4[i]==='p')
//     {
//         str5+='h';  //you can only concatinate you cant assing a new value to a string its wrong to write str5[i]="g"; 
//     }
//     else 
//     {
//      str5+=str4[i];
//     }
// }
// console.log("previous string :",str4);
// console.log("updated string : ",str5); 




//adding a new character in end of  str 5

// console.log(str5 +"c"); 
// //adding a new character in the first of str5
// console.log("d"+str5); 


//problem . given array of names print the second character of each name in a new line 
// let name =["shyam", "niket", "Nishat","kirti"]; 

// let ij; 
// for(ij=0; ij<name.length ; ij++){
// console.log(name[ij][1] );  //here i is index no of element which is loop var and 1 is the 2nd character index no a name  
// }

//given array of names count the number of names starting with n or N
// let name =["shyam", "niket", "Nishat","kirti"]; 
// let p,count =0; 
// for(p=0; p<name.length; p++)
// {

//     if(name[p][0]=='N'||name[p][0]=='n')
//     {
//         count+=1; 
//     }


// }
// console.log("no : ", count);

