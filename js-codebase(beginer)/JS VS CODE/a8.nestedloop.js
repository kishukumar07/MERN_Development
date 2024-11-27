// first plant the first farm 
// then plant the 10 farm 

//make a loop condition for single reppeatation activity then make loop for 10 or whatever repeatation 
//put the single repeatation code under the 10 or whatever repetation loop 
//pdf notes downloaded 


//problem print month no , day no

// let day = 0;
// let month;
// let date;

// for (month = 1; month <= 12; month++) {



//     if (month == '2') {
//         day = 28;
//     }

//     else if (month == '4' || month == '6' || month == '9' || month == '11') {
//         day = 30;
//     }
//     else {
//         day = 31;
//     }


//     for (date = 1; date <= day; date++) {
//         console.log(date + "-" + month);

//     }
// }








//problem . print the given prime no from one till the given number

//hint prime no have only two factors 
//logic only num%num=='0' or num %1=='0'  baki num % other num bw 0 to 10 !='0'
//step. count factor if it has only 2factor it is a prime no 


// let count=0; 
// let range=15; 
// let i,j ; 


// for(i=1; i<=range; i++)
// { 



//     for (j=0; j<=i; j++)
//     {
//         if(i%j=='0')
//         {
//             count+=1; 


//         }

//     } 
//     if(count==2)
//         { 
//             console.log(i);
//         }






//     count =0; 
// }







//print * in rectangular pattern 
//**********
//*        *
//*        *
//*        *
//*        *
//*        *
//*        *
//*        *
//*        *
//*        *
//**********

//dont  see the que in one go 

// let farm, seed, bag = "";

// for (farm = 1; farm <= 10; farm++) {

//     let bag ="";


//     for (seed = 1; seed <= 10; seed++) {
//         if (farm == 1 || farm == 10) {
//             bag += "*";
//         } else {
//             if (seed == 1 || seed ==10) {
//                 bag += "*";
//             }
//             else {
//                 bag += " ";
//             }
//         }
//     }
//     console.log(bag);
// }





