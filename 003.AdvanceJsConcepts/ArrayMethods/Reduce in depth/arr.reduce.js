// You are receiving data from backend in the following format: 
let developers_array = [
    {
        first: "John",
        last: "Doe",
        dept: "FE",
        commits: 10
    },
    {
        first: "Jane",
        last: "Doe",
        dept: "BE",
        commits: 15
    },
    {
        first: "James",
        last: "bond",
        dept: "BE",
        commits: 8
    }
];


// Problem1 ...The OutPut i want ....  
//   {
//     BE: ["Jane", "James"]
//     FE: ["John"]
//   }


let reducedArr = developers_array.reduce((acc, item) => {
    item.dept === "BE"
        ? acc.BE.push(item.first)
        : acc.FE.push(item.first)
    return acc;
}, {
    BE: [],
    FE: []
})

console.log(reducedArr)


// Problem 2. write reduce function that returns the total number of commits by all the developers

let reducedArr_2 = developers_array.reduce((acc, item) => {
    sum += item.commits;
    return sum;
}, sum = 0)

console.log(reducedArr_2);




//problem3.Write the function getAverageAge(users) that gets an array of objects with property age and returns the average age.


const users = [
    john = { name: "John", age: 25 },
    pete = { name: "Pete", age: 30 },
    mary = { name: "Mary", age: 29 }
]

getAvgAge(users);

function getAvgAge(users) {
    let sum = users.reduce((acc, el) => {
        return s += el.age;
    }, s = 0)
    console.log(sum / users.length);
    return sum;
}


//Problem4. Let’s say we received an array of users in the form {id:..., name:..., age:...}. Create a function groupById(arr) that creates an object from it, with id as the key, and array items as values....

let users_2 = [
    { id: 'john', name: "John Smith", age: 20 },
    { id: 'ann', name: "Ann Smith", age: 24 },
    { id: 'pete', name: "Pete Peterson", age: 31 },
];

groupById(users_2); 

/*
// after the call we should have: ---
usersById = {
  john: {id: 'john', name: "John Smith", age: 20},
  ann: {id: 'ann', name: "Ann Smith", age: 24},
  pete: {id: 'pete', name: "Pete Peterson", age: 31},
}
*/

function groupById(arr){

let reducedArr_3 = arr.reduce((acc,item)=>{
    //logic here....
acc[`${item.id}`]  = item; 
// console.log(acc)
return acc; 
},
{})

console.log(reducedArr_3); 
return reducedArr_3; 
}



