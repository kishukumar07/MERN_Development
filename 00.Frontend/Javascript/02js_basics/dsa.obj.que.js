//dsa.wish que :how many wish can be created within a given string
//step 1 .string==>object key value pair 
//step 2 .now we have to find the minimum of key value it will be the no of  time we can creat wish 


// let str="wishawish"; 
// let obj={}; 
// for(let i=0; i<str.length; i++){
//     if(obj[str[i]]===undefined){
//         obj[str[i]]=1; 
//     }
//     else{
//         obj[str[i]]++
//     }

// }

// let min =Infinity; 
// for(let key in obj){

//     if(obj[key]<min && key=='w'||key=='i'||key=='s'||key=='h' ){
//         min=obj[key];  
//     }
// }
// console.log("the no of wish: ", min ); 






//SkyLine city 
//if the building is greater than both surrounding buildings it will get 2 points
//if the building is greater than any one of the surrounding building it will get 1 point
//if the building is not greater than any of the surrounding building it will not get any point thatmean it will get zero points

//you have to print the points on the judgement 
 //input 1. 2                            //output
      //      1 4 3 2 7                  // 0 2 1 0 1  
// let buildings=[1,4,3,2,7]


//there are two edge cases  i=0 and i=N-1


 
let N=5; 

for(let i=1; i<=N; i++){
      let bag=''; 
      for(let j=0; j<N; j++){
          if(i==1||i==N){
             bag+="*"+" "; 
          }
      }

      console.log(bag); 
}











