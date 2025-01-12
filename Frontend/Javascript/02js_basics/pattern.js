//dsa.wish que :how many wish can be created within a given string
//step 1 .string==>object key value pair 
//step 2 .now we have to find the minimum of key value it will be the no of  time we can creat wish 


let str="wishawish"; 
let obj={}; 
for(let i=0; i<str.length; i++){
    if(obj[str[i]]===undefined){
        obj[str[i]]=1; 
    }
    else{
        obj[str[i]]++
    }

}

let min =Infinity; 
for(let key in obj){

    if(obj[key]<min && key=='w'||key=='i'||key=='s'||key=='h' ){
        min=obj[key];  
    }
}
console.log("the no of wish: ", min ); 



