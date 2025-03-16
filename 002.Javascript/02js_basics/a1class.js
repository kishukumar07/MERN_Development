// // NOTES OF JAVA SCRIPT

// replit things
// //index.js is a default file it will directly run when we run code of node index.js file it will directly be printed on console pannel  
// //whatever  i write in new file on replit  it will be printed through shell just we have to write --- node filename.js --and hit enter  
// //variable can be acessable ..

// 1. VARIABLES

// let x = 5; //here let /var is used to declare a variable
// console.log(x); //here console.log is used to print the value of variable

// var X = 9; //java script is a case sensitive language
// console.log(X);

// x = 29; //this will update the previous value of x
// console.log(x);

// //we can use both let and var to declare a variable  bcs let and var is same  and we can also declare variable with const but it will be constant variable

// const p = 0; //here p is a constant variable and it cannot be changed eg p=4; it will throw error

// let name = "niket"; // we have to use double quote to declare a string 
// var alphabet = 'a';// we have to use single quote to declare a character 
// console.log(alphabet);
// console.log(name);

// let p = 244;
// console.log(typeof (p)); //here we can use typeof(variable_name) to check the type of variable 

// let name = 'f';
// console.log(typeof (name));//here we can use typeof(variable_name) to check the type of variable 


// let a = 3, b = 4, c = 6;//here how  we can declare multiple variables in one line 
// console.log(a, b, c); //here how we can print multiple variables in one line 


// //# lets learn some rules of declaring a variable

// // 1.it can not start with a Number

// // 2.variable name cannot start with symbols except $ and _.

// //3. variable should not have any whitespace like (variable name ). instead  of whitespace we can use a capital letter or we can use a underscore  like this .. (variable_name ~snake_case_naming_convention ) or (variableName ~camel case naming convention  ).

// //4. variable name should not be keywords name or inside " " like things . {keywords-the words which is reserved in java script}

// //5.variable name should be selfexplainatory - using comments comments for defining that why is this variable declared


// let num1 = 34,
//   num2 = 34;
// console.log("the sum of num 1 & num2 is ", num1 + num2);
// console.log("the  sub of num1 and num2 is ", num1 - num2);
// console.log("the product of num1 and num2 is ", num1 * num2);
// console.log("the  quotient of num1 and num2 is ", num1 / num2);
// //some modulous challange
// console.log(num1 % num2);
// console.log("10%2 =", 10 % 2);
// console.log("the reminder of 0 %  3 :", 0 % 3);
// console.log("the reminder of 3 %0 : ", 3 % 0);
// //exponintiation  operator(**) - tell me how you calculate the power :  ~2**6 = 2^6

// console.log("2**6 = ", 2 ** 6);

// //now find the squareRoot of 16 how could you do it
// let p = 16;
// console.log("root 16 = ", p ** (1 / 2)); //  squire_root x= x^(1/2)   haah!!
// //lets find cube root
// console.log(" cube root of 900 is : ", 900 ** (1 / 3)); //the cube root mean power is 1/3 i.e..0.333

// //let perform "string1"+"sring2" - if i will perform additon operator then the strings gets joined together

// let first_name = " suhani";
// let last_name = "gadhed ";
// console.log("first_name + last_name = ", first_name + last_name);


// //number+number= number(process addition )
// // string+string= new string (process cocatination `joining together)
// // string+number= new string (process cocatination `joining together)
// console.log("number+string  will result like : ", "niket" + 34);




// //solve
// let a = 12,
//   b = 12,
//   c = "24";
// let sum = a + b + c;
// console.log(sum);

// //boolean datatype
// let emp_name = "ram",
//   age = 45,
//   ismarried = false;
// console.log(typeof ismarried);

// //jsut console.log thing
// console.log("hii");
// console.log("the ram said");
// //the same  output is possible using one console log with new line character
// console.log("hii \n the ram said ");
// console.log("hii ", "\n", " the ram said ");
// //lets use the contatination for getting the right output
// console.log("hii" + "\n" + "the ram said");
// //lets understand the  use of separators , it will provide space at the output
// console.log(1020);
// console.log(10, 20);






// //you have to do algorithm and dryrun 
// //algorithm mean? - instructions (stepthat are takento solve a given problem )
// //let add two number
// //step 1.declaring first variable
// //step2.declare second variable 
// //step3.console.log the sum of above data 
// // let convert our steps into code instructions like 
// let a = 3;
// var g = 4;
// console.log(a + b);
// //but if there is a large or a complex problem we might have consused sometime if we directly writting the code so first we have to write down all the instrustions (steps) in our notebook so we will not fail while writting.
// //whenever you are going to solve any problem first write alogorithm necessery in the note so not to forget while  solving a code , and then we have to write code.
// //dryrun ..?mean - running the code in paper before running on computer (recheck by running in the paper )



// //using relational opperator
// // this can be used only for Numbers
// // 1.<
// // 2.<=
// // 3.>
// // 4.>=
// // there are four types of relational operator

// //rhaul look at a sale that if he buys more than 3999 rupee he will find 10 %discount , and he bought things worth 4000 print if he is elegible for the discount or not .

// let p_amount = 4000;
// let m_purc = 3999;
// console.log(m_purc < p_amount);

// //using comparison operator




// // 1.== (check only vlaue of variable )
// // 2.!= //it is opposite of double equal to 
// // 3.=== (compare value along with datatype)
// // 4.!== //it is opposite of tripple equal to 



// //think is this true or false
// console.log("10" == 10); //double == will check only value 

// console.log("10" === 10); //=== will check both value and data type 

// //let think 

// console.log(5 >= "6");
// console.log(6 >= "6");








// //conditional opperator

// // Rahul purchased a bsket of worth 4000 . and if there is a discont of 10 % in mall if he buys more than 3999  so if he is ellegible print eligible else not elegible

// //step1. declaring the purchace variable and mimum purchace price
// //step2. comparing both
// // printing

// let p_amt = 4000;
// let min_amt = 3999;
// if (p_amt > min_amt) {
//   console.log("eligible ");
// } else {
//   console.log("not eligible ");
// }

// //same que along with if he is eligible print the new bill amount

// if (p_amt > 3999) {
//   console.log("the new bill is :", 4000 - (p_amt * (10 / 100)));
// }





// //if elseif --traffic light (more than one conditions)
// //step1 . declaring lights , colour 
// //step 2. compaing if light is equal to that colour
// //step3. taking  actions according to this 

// let colour = "green";
// if (colour == "greeen") {
//   console.log("you can go now ");

// }

// else if (colour == "red") {
//   console.log("stop here ");

// }
// else {
//   console.log("you have to wait");
// }



// //budget>=2000 :- go for kfc 
// //budget>= 1000= :- dhaba
// //budget>=100 :- vendor 
// //buget >= 10 : - eclairs
// //budget ==0 :-  "ghar pe rho "


// let budget = 400;

// if (budget >= 2000) {
//   console.log("lets kfc");

// }
// else if (budget >= 1000) {
//   console.log("  let's dhaba ");

// }
// else if (budget >= 100) {
//   console.log(" let's go for vendor");
// }

// else if (budget >= 10) {
//   console.log("eclairs");

// }
// else {
//   console.log("ghr pe rhoo");
// }



// //every time while using if else ladder we have to write conditions on desending order


// //problem1. if a number is divisible by 3 print the multiple of 3
// let num = 33;
// let l = num / 3;
// if (l == '0');
// {
//   console.log("it is multiple of 3");
// }
// console.log("it is not multiple of 3");




// //problem .given stored username and password you have to enter the username and password and if is same you have to print logginsucessfull otherwise wrong credentials 

// //storded username and password
// let database_user = "abc@gmail.com";
// let database_pass = "jhk1234";



// //entering the username and password
// var user_id = "abc@gmail.com";
// let user_pass = "jhk1234";

// //checking first username then password
// if (user_id == database_user) {
//   //if username is correct -checking password
//   if (user_pass == database_pass) {
//     console.log("login sucessfull!!");

//   }

//   else {
//     console.log("wrong input");
//   }

// }
// else {
//   console.log("wrong cretdentials");
// }





// //logical and ternary operator

// //logical operator -  && /|| / ! 

// solving login problem using ternary operator



// //stored data base =
// let data_user = "abc@gmail.com";
// let data_pass = "1234";

// // entering the data
// let user_id = " abc@gmail.com";
// let user_pass = "1234";

// (user_id == data_user) && (user_pass == data_pass) ? console.log("loggin sucessfull ") : console.log(" invaild credentials");


// //problem4  chunnu father gave a offer to chunnu he will be gifted a bike if he will take marks more than 80 and he will complete his assignments 
// let chunnu_marks = 89;
// let bet_marks = 80;
// let didassignment = "false";


// (chunnu_marks >= bet_marks && didassignment == "true") ? console.log("he got bike ") : console.log("he didnt got bike ");

// //problem4 modified .  chunnu father gave a offer to chunnu he will be gifted a bike if he will take marks more than 80 or he will complete his assignments 
// let chunnu_marks = 89;
// let bet_marks = 80;
// let didassignment = "false";


// (chunnu_marks >= bet_marks || didassignment == "true") ? console.log("he got bike ") : console.log("he didnt got bike ");




// //problem statement you have to enter your gender and age and the software will tell you if you are elegible for marriage
// solve using conditional statement like if elseif ladder




// //nested conditions with tarnary operator
// //problem statement you have to enter your gender and age and the software will tell you if you are elegible for marriage 

// //rule  fix age
// let fixmale_age = 21;
// let fixfemale_age = 18;
// let gen1 = 'm';
// let gen2 = "f";
// //input assume a person enters 
// let gender = "f", age = 2;

// ((gender == gen1 && age > 21) || (gender == gen2 && age > 18)) ? console.log("you are elegible") : console.log("you are not elegible");


// //puzzere problem  find output dry run 
// 1. console.log((10>20 && 20>5  ) &&  ( !true || !false ) ||    !(10>20 && 20<10 || 15>=15 ) ); 
// 2. console.log(!2==2 || 2==2); 
// console.log("the value of !2= ",!2);






