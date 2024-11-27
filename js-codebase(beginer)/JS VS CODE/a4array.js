//que of spread operator 

let arr=[3,44,4];
let data= [4,5,6]; 

let details = ["Aman", "xyz", ...arr,...data]; 
console.log(details); 
 //tell what is going to be happen here
 




//problem . given a array 
let movie =["BATMAN","RRR", "PUSPA", "AVENGER", "GAZNI"];

//You have to print all the movies except GAZNI AND AVENGER
let i; 
for(i=0; i<(movie.length-1); i++)
{

if(movie[i]=="GAZNI"|| movie[i]=="AVENGER")
{
    continue; 

}

console.log(movie[i]); 
}