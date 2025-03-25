/* const arr = [1, 3, 5, 7, 9];

 const [first, second, ...rest] = arr;
 console.log(first, second, rest);
*/

/*
let user = {
    firstName: 'Vivek',
    lastName: 'Agarwal',
    age: 38,
    posts: [
      {title: 'Post 1', comments: 10},
      {title: 'Post 2', comments: 11}
    ]
  }
  
  const { firstName:first , lastName , age=40 , ...rest } = user; 
  console.log(first, lastName, age, rest);
  // only the deepest keys become variables
  const { posts: [{ title :t1 }, {title }] } = user;
  
  console.log(t1, title);
*/



  // a function that returns an array of a number and a function
function useState(num) {
  let count = num;
  let setCount = function () {
    console.log(`setting the count: ${count}`);
  }

  return [count, setCount]
}

// way 1
let resultArr = useState(20);
let resultCount = resultArr[0]; //20
let resultSetFunction = resultArr[1]; //

resultSetFunction(); //-> setting the count: 20

// the destructuring way, super neat
let [count, setCount] = useState(30);

setCount(); //-> setting the count: 30




// we know that the function will receive an object with keys firstName & lastName

function printFullName({ firstName, lastName }) {
  console.log(`${firstName} ${lastName}`);
}

printFullName({
  firstName: 'Vivek',
  lastName: 'Agarwal'
})

//-> Vivek Agarwal



const user = {
  id: 339,
  name: 'John',
  age: 42,
  education: {
    degree: 'Masters'
  }
};

const  { name, education: {degree}}  = user;
console.log(name, degree ); 
console.log({ name, education: {degree}})





const user2 = {
  id: 339,
  name: 'John',
  age: 42,
  education: {
    degree: {
      name: 'BCA'
    }
  }
};

const {name:fname, education: {degree: {name:degreeName}}} = user2;

console.log({name:fname, education: {degree: {name:degreeName}}}); 




const user3 = {
  id: 339,
  name: 'John',
  age: 42,
  subjects: ['HTML', 'CSS', 'Javascript'],
  education: {
    degree: {
      name: 'BCA'
    }
  }
};

const {
  name:fname1, 
  education: {degree: {name:degreeName1}},
  subjects: [sub1,,sub3]
} = user3;

console.log({
  name:fname1, 
  education: {degree: {name:degreeName1}},
  subjects: [sub1,,sub3]
})






















































