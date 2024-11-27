// //some times its too confusion if we acessing element of a array as marks of eng .. we dont wo which is
// //the marks of eng 
// let marks = [22, 55, 67, 87];
// let sub = ["eng", " math", "sci", "sst"];


// console.log("marks of eng :", marks[1]);

// //how what if i dont know wether the marks is arranged respectively or not

// //so to replace this confusion we define object - it is a data structure that stores data in form of key and value (orientation )
// //object- it gives us  a very well structure of storing data ,

// let marks1 = {
//     eng: 22,
//     math: 55,
//     sci: 67,
//     sst: 87,

// };
// console.log(marks1); //this prints the whole object

// //in object there is no concepet of index like array  but there is concept of key 
// //acessing an element in array with index no 
// console.log(marks[2]);
// //acessing an element in object with key ~just replace  index no with key but here key must be under ""
// console.log(marks1['eng']); //this is the bracket notation of printing any key value through its key 

// console.log(marks1.eng); //dot notation 

// //here its too simple to understand bcs every thing is well structured 


// //we can declare an array inside an object 
// //let asume a person recording his work culture and he has 4 thing in his hobby key  

// let culture = {
//     name: "mukul",
//     age: 56,
//     hobby: ["books ", "coding ", " biking "],
// };


// //so what if i have to know his 2nd hobby 
// console.log(culture["hobby"][1]);
// //or 
// console.log(culture.hobby[1]);

// //is like you want to printing an element of a array inside a object




// //how will you update something inside a object 

// //let assume we have to update the value of a key already present there inside object ~ objectname["key name "] = " new value here"; 
// // ~objectname.key  =  key value ;
// //just think as you assining a value in a object key 

// culture["name"] = "raju";
// culture.age = 34;
// // culture["num"][0]=23;//you cant add a  array 
// // culture["num"][1]=24; //you cant add a array ~theow error 
// //but you cannot update/add array element inside object 
// culture["hobby"][1] = 24;


// console.log(culture);


// //not if you want to add a new key and a variable you can assume a new 

// culture["passion"] = "programming";
// culture.nation = "indian ";

// //if there is no key you updating it will define a new key 


// //lets delete a object key [it will auto be deleted at last no index required]

// delete culture["age"];
// delete culture.name;

// console.log(culture);



// //object inside object (nested  ~a better approach for storing things 
// let customer = {
//     name: " niket_sahu",
//     city: " ranchi",
//     pincode: " 834001",
//     address: {
//         locality: "pritampura",
//         areano: "landmark01",
//         house: "4334",
//     }
// };


// console.log(customer);
// //how can i acess the locality only ~ custiomer["address"][locality]
// console.log(customer.address.locality);
// console.log(customer["address"]["locality"]); 





// //how will you print all the keys of element 4 (address ) line by line 
// // for in loop 



let customer = {
    name: " niket_sahu",
    city: " ranchi",
    pincode: " 834001",
    address: {
        locality: "pritampura",
        areano: "landmark01",
        house: "4334",
    }
};


let i; 
for(i in customer ) 
{
 console.log(customer[i]); //no double quotes it will run , with quote it will give error
}









