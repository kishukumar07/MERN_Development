// going to take the value from the input tag when the user the form in that case 


// first thing i have to catch the form 
let myFormEl =document.querySelector("form"); //tag selector 

// when the user submit the form i have to get the data
myFormEl.addEventListener("submit" ,function(event) { 
    // you  always have to do one thing whenever working with the form
event.preventDefault(); //this will stop the top referesing 
    // console.log("check"); 

    // now i have to somehow take the data from the input tag
        // --first i have to catch the input tag  
        let taskInput =document.getElementById("task"); //task is the id of input tag in .html 
        //catching the select tag by its id priority 
        let  prioritySelect =document.querySelector("#priority"); //dont write only priority ~#priority  
        let globalArr=[]; 
        // whenver the event occurs we have to console a object(bcs storing inputs in data is viable with increasing the no of input tags ) 
  let obj ={
    task : taskInput.value, //.value is used for acessing the data of input tag 
   priority : prioritySelect.value,
     }; 
//   console.log(obj); 
  //   you can see we are getting the input what we entered
//   whenever someone submit this form  we are storing the inputs in the arr
globalArr.push(obj); 
//   you can see we are getting the input what we entered
console.log(globalArr); //if you entered the submit 3 times the all 3 runs of input will pushed on arr



// now whenever someone submit the form we have to append the inputs in the tbody

let tbody =document.querySelector("tbody"); //tbody cught
// now creating the format 
tbody.innerHTML =""; //this will delete all the previous elements of the tbody bfr i run the loop for the next time..  
for(let i=0; i<globalArr.length; i++){
    let tr = document.createElement("tr");
  // inside tr we have to creat td
    let td1 =document.createElement("td"); 
    let td2 =document.createElement("td"); 

td1.innerText = globalArr[i].task; //assigning
td2.innerText = globalArr[i].priority;

    tr.append(td1,td2); 
     
    tbody.append(tr); 

}

});