// //problem iw section Given an array find the unique items in the array
// // IW Problem1
// // var arr = ["Ramesh", "Suresh", "Ramesh", "Kamlesh", "Suresh", "Rupak"];
// //    let obj={};
// // let p; 
// // let i; 
// // for(i=0; i<arr.length; i++)
// // {
// //     obj[arr[i]]=1; 
// // }
// // console.log(obj);


// //object_2 notes

// //let revise spread operator
// let arr=[3,34,5,5]; 
// let copied =[]; 
// copied=[...arr]; //copying the array's element

// console.log(copied);

// //similarly we can use spread operator to copy all the key values of one object to another

// let obj1={
//     name : "nik", 
//     age : "20",

// };
//  let obj2  ={ 
//     ...obj1
//  };
// console.log("the copied obj :",obj2);


// //we can also do this 

// let obj3 ={
//     ...obj1,
//     hobby : "biking", 
//     ismarried : false,
// }; 




// console.log("The obj3 =",obj3); 



// //problem. given a string , print the number of tiems each character appears

// let str="bageshwar"; 
// let obj={}; 

// let i,key; 
// let count=0,j; 
// for(i=0; i<str.length; i++){
//  count =0; 
//     for (j=0; j<str.length; j++)
//     {
//         if (str[i]===str[j])
//             {
//                 count+=1; 
//             }

//     }


// key=str[i]; 

//     obj[key] =count;  



// }

// console.log("obj is: ",obj); 

//second method its easy


// let str = "bageshwar";
// let obj = {};

// let i, key;

// for (i = 0; i < str.length; i++) {

//     if (obj[str[i]] == undefined) {
//         obj[str[i]] = 1;

//     }
//     else {

//         obj[str[i]]++;
//     }

// }
// console.log(obj);



//problem.what is the frequency of each element (frequency mean no of times something is appearing)

// let arr = [7, 2, 7, 7, 4, 2];

//step 1. we have to declare an empty object 
//step 2 we have to assign the key pair if there the key is undifined 
//step 3 . we have to update key value by one if there's already key is present 
//step4.console.log(obj); 


// let obj = {};
// let i;
// for (i = 0; i < arr.length; i++) {
//     if (obj[arr[i]] == undefined) {
//         obj[arr[i]] = 1;
//     }
//     else {
//         obj[arr[i]]++;
//     }



// }


// console.log(obj);



//problem find the sum of whose occ. is two  i the same array 


//step 1. we have to declare a object (empty )
//assigning the value inside through accessinng array element 
// if key is not there we have to assign 
//if key is there we have to update  the key value 

//at end we have to check each element key value if is equal to 2 we have to add those key pairs 
//we can take a new variable where we add those keys which value is ==2

// let arr = [7, 2, 7, 7, 4,4, 2];
// let obj={};

// let i,sum=0;
// for(i=0; i<arr.length; i++)
// {
//     if(obj[arr[i]]==undefined)
//     {
//         obj[arr[i]]=1;
//     }
//     else
//     {
//         obj[arr[i]]++; 
//     }

// }
// console.log(obj);
// let key; 
// for(key in obj){
//     if(obj[key]>=2)
//     {
//         // we can't write sum+=obj[key] bcs it will add the key value to sum but we want to ad key so
//         // sum=sum+key; //bcs key is string and if you try to add key to sum it will br concatinated together - so we first have to  convert keys to no 
//         //using typecasting 
//         sum=sum+Number(key);
//     }
// }
// console.log(sum);





//print the element whose occ. is 1
let a = [1, 4, 4, 5, 6, 4, 4, 6, 4, 7, 8, 8, 4, 3,];

//step1. we have to declare an empty object 
//step2. we have to assign element of array one by one inside object 
//step3 .if the element (key ) is already present there then we have to updte its key value
//step 4. if not present we have to assign the key pair
//step 5 . we have to check if the key of object 's value ==1 if is equal to 1 then we have to print it 



// let obj = {};


// let i;
// for (i = 0; i < a.length; i++) {
//     if (obj[a[i]] == undefined) {
//         obj[a[i]] = 1;

//     }
//     else {
//         obj[a[i]]++;
//     }
// }

// let key;

// for (key in obj) {
//     if (obj[key] == 1) {
//         console.log(key); //we have to print the key not key value obj.a[key] will print the key value 


//     }
// }








