//psc section 
////problem 1.js
//you are given an array whose size is stored in a variable N 
//the array is stored in a variable with name arr
//for eg. the value stored in variable is 7 and the arr =[1,1,3,3,6,5,8]; since there is two unique element 
//6 & 8; 
// Then the required output will be 6+8 =14 , which is the desired output


//steps required first we have to fillter out those element which's frequency is one (unique)!for this
//we required an object (blanck) {by checking the condition if the 
//obj.a[i]== undefined if yes then obj.a[i]==1; else {obj.a[i]++} }
//so this will add key value pairs 
//now we have to check if the key value is equal to one we have to +=it in new variable  
// //at end we have to print it

// arr = [1, 1, 3, 3, 6, 5, 8];
// let objj = {};
// for (let i = 0; i < arr.length; i++) {
//     if (objj[arr[i]] === undefined) { //you can not write obj.arr[i]
//         objj[arr[i]] = 1;
//     } else {
//         objj[arr[i]]++;
//     }
// }
// console.log(objj); 
// let sum=0; 
// let key; 
// for(key in objj)
// {
//     if (objj[key]==1 )
//     {sum+=Number(key)}; //here now you are adding numbers (key is string }
// //or sum=sum+(+key); //it will also convert it to a number

// }
// console.log(sum); 





//Problem. What is the Good string 
//Deletion of character to make them nice
//lets call a string good if its length is even and every character in odd position of this string is different 
// from the next line character( the first character is different from the second , the third is different from the
//forth and so on ...

//For eg.. "good" ,"string" and "xyyx" are good strings  while "bad" , "aa" , "and" and "aabc" are not good 
//Note that empty string is considered good

//sample input: the first line contains one integer n , the no of character in string s
//the second line contains the string s, consisting of exactly n lowercase latin latters 

//you are given a string , you have to delete a minimum no of character so it become good string. 




//logic: there are two cases 1. if the bad strng has even length eg.. "aabc" so we just have to delete the characters from
//here 
//2. if there are string having odd length but no "abc" there we simply remove the character 
let s = "aabcd"
n = s.length - 1;
let arr = [];


for (let i = 0; i <= n; i++) {
    if (arr.length % 2 == 0 || arr[arr.length - 1] != s[i]) {
        arr.push(s[i]);
    }


}

if (arr.length % 2 == 1) {
    arr.pop();
}
console.log(s.length - arr.length);
console.log(arr.join(""));







