// //it is too different from any programming lang
// // declaring hundred variables for employe
// let emp1="nishat";
// let emp2="ram";
// let emp3="nitesh";
// //vs declaring array
// let emp_name= ["nishat","babulal","shyam"];
// console.log(emp_name);

// //problem1. Declare an array containing the names of your 
// //fav movies and then print it

// let fav_movie= ["The social network ", "The Founder"];
// console.log(fav_movie); 

// //problem2.we can store all type of data in one array (numbers,characters, strings, boolean data)

// let data=["string",3,45,45,true, false,'d'];  //still its going to work
// console.log(data); //you can put anything also empty string

// //problem3. how can acess any  element of array
 
// console.log(data[3]); //  index is like page no which starts from 0 so just by calling index how you acessed the fourth element of array 


// //how many elements in there a array = index+1; 

// //problem5.how many products are available in counter of amazon 
// let product =["baby","phones","speakers",];
// //is there any method to count the element or calculate the lengh of array 
// console.log("arrayname.length =",product.length); // arrayname.length  will give you the length of array 
// console.log("arrayname.length =",product.length);

// //last index=length -1



// //lets do an activity 
// let train_names=["RajdhaniExp","Duranto","garibrath","vande mathram"];
// //how many train are there 
// console.log(train_names.length); //it will give me no of trains

// //print the name of last train suppose you have lot of train
// //==>> the last train will be on last index i.e length -1
// console.log(train_names[train_names.length-1]);
// let lastindex=train_names.length-1;
// console.log(lastindex);

// //given 
// let arr=[1,2,3,4,5,6,5];
// //add 55 at the end ofthe array 
// arr[arr.length-1]=44;
// // add 45 at the last 4th array 
// let ind_no_last4 =arr.length-5; //why -5 bcs  lengh -1 islast index and you go for mor 4 backward
// arr[ind_no_last4]=45; 
// console.log(arr); 


//  // if we want to add -adding or pussing  elements to end of the array as pussing more things in your school bag
// arr.push(99); 
// // you can also puss more than one elements in array ===> push
//     arr.push(123,34,43);

// console.log(arr); 

// //if i want to remove something at the end of array==>>pop
//  arr.pop();
//  console.log(arr); 
//  //it will remove one element at once
//  arr.pop();
//  arr.pop();
//  arr.pop();
//  arr.pop();//you dont need to mention what to remove from end
//  console.log(arr); 


// //lets take an empty array and add some elements to this and print final value 
// //now mix push and pop and make a puzzle que 


// //problem8.  printing each and every element at new line - how will you do it

// //==>> run a loop where the condition will be loop_var<=index or loop_var<lastindexno(length of arr) then 
// // we have to acess each element using the loop_var

// let i; 
// indexno=arr.length-1;
// for(i=0; i<=indexno; i++ ){
//     console.log(arr[i]); //this will print all the element data of array in new line 

// }

// //do same thing with while loop 
 


// // Spread Operator(...)

// let arr1=[1,2,3,4];
// //make the copy of the array 
// //let arr2= arr1;//this is wrong here 
// let arr2=[...arr1]; //this is correct 
// console.log("arr1= :",arr1);
// console.log("arr2= :",arr2);
// console.log("if arr1==arr2",arr1===arr2); //idont know but its giving me false 



 
// //que of spread operator 

// let arr=[3,44,4];
// let data= [4,5,6]; 

// let details = ["Aman", "xyz", ...arr,...data]; 
// console.log(details); 
//  //tell what is going to be happen here
 




// //problem . given a array 
// let movie =["BATMAN","RRR", "PUSPA", "AVENGER", "GAZNI"];

// //You have to print all the movies except GAZNI AND AVENGER ---also try with while loop
// let i; 
// for(i=0; i<(movie.length-1); i++)
// {

// if(movie[i]=="GAZNI"|| movie[i]=="AVENGER")
// {
//     continue; 

// }

// console.log(movie[i]); 
// }



// // Problem1. Given 
// let name=["AMAN", "PULKIT","SHIVANSH","SUBHAM"]; 
// // print the position (starting with 1) and the Element in a Single line . 


// let  loopvariable =0; 
// index= name.length-1; 
// while(loopvariable<index)
//     { 
//         console.log(loopvariable+1+"."+name[loopvariable] ); 
//            loopvariable++; 

//     } 






// //problem. given array of number find the avg of all even number

// // let arr=[2,3,4,5,7,8,9,4,6,7]; 
// // let sum_even =0; 
// // let count_even =0; 
// // let avg =0; 
// // let loop_var; 


// // for(loop_var=0; loop_var<arr.length-1; loop_var++)
// // {
// //      if (loop_var%2=='0')
// //      {
// //      sum_even+=arr[loop_var];
// //      count_even= count_even+1; 
    
// //      }



// // }
// // avg = sum_even/count_even; 
// // console.log("avg of even in array : ",avg); 




// //given a character in lower case print the upper case 





