//map-Hof 

let arr =[1,2,3,4,5];


let i; 
let new_arr = [];

for (i=0; i<arr.length; i++)
{
    new_arr.push(arr[i]*i); 
}
console.log(new_arr); 
//the same thig is done in three lines of code 

let new_arr2; 
new_arr2 = arr.map(function(element , index){
return element*index; 
})

console.log(new_arr2); 



//map is always going to return a new array; 

//what if we have to print a array that stores only even no's element  //filte(hof)

let j;

p=[];
for (j=0; j<arr.length; j++)
{
    if (arr[j]%2=='0'){
        p.push(arr[j]);
    }
}
console.log(p);

let  a=[]; 
a=arr.filter(function(element,index){
    return element%2=='0'; 
})
console.log(a);



//forEach(HOf)


let bag=" ";
let pq; 
for (pq=0; pq<arr.length; pq++)
{
    bag+=arr[pq]+" "; 

}
console.log(bag); 





let pri=" "; 
pri =arr.forEach(function(element, index){
 return element; 
})
console.log(pri); 