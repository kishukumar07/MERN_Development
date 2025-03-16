/*IN PREVIOUS CLASS WE LOOKED ABOUT HOW SYNCRONOUS CODE WORKS ONLY WE DID'NT LOOKED ANYTHING ABOUT ASYNCRONOUS CODE   -SO IN THIS CLASS WE ARE GOING TO LOOK AT HOW ASYNCRONOUS PROGRAM WORKS ? 

 The three ways of asyncronous code we learned till now 
1.setTimeout 2.setInterval 3.Promises(fetch)

this is the part of webApi or the Window-object  not (javascript ) 
given by the browser 
There execution also going to depend on the browser. 

Note:- as soon as javascript encounters any async code they are given to the web not stored in call stack (js like  hey it is your code you understand browser)

Flow:_
1. first  whatever syncronous/asyncronous they are going into the call stack  if this is asyncronous code it goes from call stack into web api(its going to check if the time is over or not) now from web api it goes into eventQueue and from event queue/callbackQ [it is constantly checking if the callstack is empty or not] it[the function inside the setTimeout] again goes into call stack and then removed . 
THIS WHOLE CONCEPT IS KNOWN AS{'EVENT-LOOP' }
THE MOST IMPORTANT CONCEPT OF JAVASCRIPT. 
*/

const APIURL ="xyz"; 
 
console.log("ABC");   //sync  

func1();            //sync 

setTimeout(function(){
    console.log("Timer");       //async
},2000); 

fetch(APIURL)
.then((Response)=>{     
    return Response.json(); 
})
.then((data)=> {
    console.log(data);      //async
})
.catch((err)=>{
console.log(err); 
})

 
function func1(){
    console.log("EFG"); 
}

console.log("1");               //sync
setTimeout(function(){
    console.log("2");             //async
},0)//0milisecond                //this is still going to printed at last  
console.log("3");         //sync 


 
//a small que for you  interview 
for(var i=0 ; i<5; i++){ //dont use let -0,1,2,3,4
    // console.log(i); //going to print 0->4 ~syncronous 
    setTimeout(()=>{   //async
 console.log(i);  //five time five will be printed  
    },2000);    ///the console line executed after 2 second 
}
 //five time five will be printed why?  inside for loop there are 5 setTime out is going to be created  does normal js executes setTimeout __no <<the web_api  and here starts the event loop: untill the call stack will be complete empty the  ..  it will not goint to the call stcak and  after the for loop executed completely the value of i  will be 5 this is the time when the call stack is empty now for all the setTimeout the value of i is 5 and now it gonna be executed .. so it will print 5 times 5



/*we saw the working of async code for setTimeout but now we have to look for one more type of async code 
-Promise  are little bit different they dont directly go into event queue  what happens is for promises they  go into "microTaskQueue" and micro task queue has more  priority as comp to the event queue (here noted one point event queue checks two things call stack as well as microtaskqueue */
/*micro task queue only checks is the call stack is empty if yes then only it put things(fetch) into the call stack*/

