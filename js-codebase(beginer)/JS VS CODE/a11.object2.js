//problem6.js ~something different  how you can save or store the details of 500 employes of a company 


let emp_1 ={name:"chuunu" , age:  29, salery : 30000  }; 
let emp_2 ={name:"payal" , age:  36, salery : 23000 }; 
let emp_3 ={name:"nishat" , age:  26, salery : 30000  }; 
let emp_4 ={name:"kirti" , age:  23, salery : 39000  }; 
let emp_5 ={name:"rambhaju" , age:  90, salery : 35000  }; 
let emp_6 ={name:"sharma" , age:  55, salery : 100000  }; 
let emp_7 ={name:"gyan" , age:  46, salery : 87000}; 
let emp_8 ={name:"roshan" , age:  24, salery : 30000000  }; 
// .
// .
// .
// .
// .

//hint .. do you remember the attandence register case  did you built separate resister for each  roll no .. or you built only one resister ...
//so dont yoy think you just have to creat only one variable employe and put all the ppl details inside it ,,
//uptill now we saw concept of arrays inside object 
//this concept will goes like : OBJECTS INSIDE ARRAY  --what is the benifits benifits...suppose your boss asked you to give me the name of those employe whose sallery is more than 30thousand 
//dont you think i should run a loop unless i gothrough each objects and find one by one ...


let emp_details500 =[
    {name:"chuunu" , age:  29, salery : 30000  },
    {name:"payal" , age:  36, salery : 23000 }, 
    {name:"nishat" , age:  26, salery : 30000  },
    {name:"kirti" , age:  23, salery : 39000  },                  //this is now a array so it having index concept 
    {name:"roshan" , age:  24, salery : 30000000  },
    //.
    //.
    //.
    //. and many more emp_details

];

//this is the way how our data is present on internet or we can say in database;


//now how can you acess the 3rd object of array ~ arrayname[indexno here it is 2 for 3rd object]   ----emp_details500[2];
console.log(emp_details500[2],"\n");


//now how you can print all emp details ~by running loop form 0th index till last index 

let loop_var; 
for (loop_var=0; loop_var<=emp_details500.length-1; loop_var++){
console.log(emp_details500[loop_var]);
}





//what if you have to print sallery of 5th employe ~ emp_details[4]["sallery"] or emp_details[4].salery

console.log("he sallery of 4th emp:",emp_details500[3].salery);

//what if you have to get the sallery of all employe ~using for loop and change index no from 0th till last in console statement 



// let i;
// for(i=0; i<emp_details500.length; i++)
// {
//     console.log(emp_details500[i].salery);
// }


//how to get employee name whose sallery more than 30 thousand ~ just by putting if condition in previous loop that checks if sallery is more than 30 thousand then 
//print the name of emp 


let i;
for(i=0; i<emp_details500.length; i++)
{
    if (emp_details500[i].salery >30000)
    { 
        // console.log(emp_details500[i].name); //dot notation
        console.log(emp_details500[i]["name"]);//bracket notations NOTE " write under "" 
    }

   
}






//proble.js ~  given
let product = [

{name:"samsung34 " , rating : 3.2 , price : 12000 },
{name:"macbook " , rating :4, price :180000  },
{name:"gold " , rating : 5 , price : 120000 },
{name:"lenovopideapad" , rating :5 , price : 48000 },

]; 

//print the name of those products whose  rating is more than 4.0 or equal to it
let x; 
for (x=0; x<product.length; x++){

if(product[x]["rating"]>=4.0)
{
    console.log(product[x].name);
}


}




//problem8.js !! ~    you are given two array  the first array contain the name of product and their price is stored in the second array
//you have to print their name and price together  in one statement 
 
let products =["samsung34" ,"mackbook" , "gold" , "lenovoideapad"]; 
let price =[12000, 18000, 120000, 48000]; 


//output be like 
// {name:"samsung34 " , price : 12000 },
// {name:"macbook " , price :180000  },
// {name:"gold " ,  price : 120000 },
// {name:"lenovopideapad" , price : 48000 },

//==>>
//lets make story first


