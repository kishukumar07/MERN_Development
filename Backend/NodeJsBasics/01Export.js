const add = (a,b)=>{
console.log(a+b); 
}
const sub = (a,b)=>{
console.log(a-b);

}
const mul = (a,b)=>{
 console.log(a*b);
 
}
const div = (a,b)=>{
 console.log(a/b);
 

}
const modulo = (a,b)=>{
console.log(a%b);

}
// module.exports = [add,sub,mul,div,modulo];   //cjs   ~ordering will materr in array format (concept of dereferencing)
module.exports = {add,sub,mul,div,modulo};   //cjs   ~ordering will not matter in obj format (no concept of index