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


// The OutPut i want ....  
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

















