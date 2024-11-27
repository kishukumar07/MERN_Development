//inbuild function but before this lets know about documentation
//documentations - it is the best notes to learn anything  eg..react doc /python documentation () ~the developers wrote this
//readme file is documentations for the project there 
//go for mdn if you want to learn about a topic in java script just go there--the notes you printed of js is from mdn




//the teacher suggested to read the documentations to understand all the  inbuilt functions bcs they gave only few  examples ..
// you dont need to remember all functions 

//methods is just a fancy name of functions





//INBULT FUNCTION
//functions that are predeclared in java script  


//1.       typeof() 
let z=true; 
console.log(    typeof(z)  );

//2.      Number("4");  
let str ="34";
console.log( typeof(     Number(str)      )    );
//i can only convert numeric string to numbers only haah

//3.      .toString()
let x=45; 
console.log( typeof(      x.toString()       )    );
//array's inbuilt function 
//push() 
//pop()
//shift()
//unshift()
//join()  ~array to string without bag 
//split() ~string to array            
//indexOf()
//lastIndexOf()
//slice()
//splice()
//etc... everythinng is important 

//lets know some sting's methods

//toUpperCase()
let str6="kishu";
console.log(str6.toUpperCase()); 

//toLowerCase()
let str8="KISHU"; 
console.log(str8.toLowerCase());

//includes() 
let sentence="hii my name is kishu and i am a boy";
console.log( "is the word boy is present : ",sentence.includes("boy"));


//startsWith()
console.log(sentence.startsWith("the")); 
console.log(sentence.startsWith("hii")); 
console.log(sentence.startsWith("Hii")); 

//endsWith()
console.log(sentence.endsWith("oy"));
console.log(sentence.endsWith(""));//think logically -true 
console.log(sentence.endsWith(" "));//think logically -falsse




//some basic mathemetical function 
 let y=34; 

console.log(Math.log10(x)); 
console.log(Math.log2(x));

let p=23.432; 
console.log(Math.floor(p)); 
console.log(Math.ceil(p)); 

let r=16; 
console.log(Math.sqrt(r)); 



//mimic  mean- copying

//problem. mimic the functionality of split function 
let str5="hello there is a snake";
console.log(str5.split(" ")); 
//lets think the logic first: therer is a word and then a whitespace it predicts the white space and put that word as element of array 
//again there is a word then a space it predicts and assign those word to element of array 
//conclusion1. when there is no space ~converting into word
//conclusion2. when there is space ~ pussing those word into array 
//conclusion3. we need arr.push()
//on basis of those 3 conclusion lets build a story 


function mySplit(str){
    let arr=[];
    let word="";
    for (let i=0;i<=str.length-1;i++){
      if(str[i]!=" "){
        word+=str[i];
      } else {
        arr.push(word);
        word="";
      }
    }
    arr.push(word);
    console.log(arr);
  }
  
  mySplit("I am BATMAN");




  //problem .you have to mimic the array.lastIndexOf() 
let a=[3,2,4,5,7,6,2]; 
console.log(a.lastIndexOf(2)); 

// i did it
function mylastIndexOf(num){
    let l; 
    for(l=a.length-1; l>=0; l--)
    {
    if(a[l]==num)
        {
        console.log(l); 
        break; 
       }
    
    }
}
//caling

mylastIndexOf(7);






















