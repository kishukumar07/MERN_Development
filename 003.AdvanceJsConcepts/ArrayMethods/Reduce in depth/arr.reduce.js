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
    sum +=item.commits; 
    return sum;
}, sum=0)

console.log(reducedArr_2) ;











