## Agenda of this File

This is the second part of the fullstack CRUD project. All the code is copied from part one.{"https://github.com/kishukumar07/MERN_Development/blob/main/Full_Stack_CRUD_Project.js/FullstackCrud1/readme.md"} We will continue from here.

1st : we will learn how to usecse and implement    
       relationships, then we will move onto the frontend part.



what will the usecase of relationShip --> 
   not anyone can modify or get anyones data previously any use can modify the whole data
   lets take an eg.. if there is two user and if user1 created their note should user2 able to update and delete their note>>>???

   ==>"What can we do? We need some types of relations between users and their notes so that access to the routes for their notes can be verified." 
   thats the basic purpose of notes collection and user relationship..


  --for this we need id 
  --we know notes collection is dependent upon userscollection....
--thats mean userid should be present inside notes collection 


//modifying notes schema and adding authorID   

this is very headache task right to add authorid every time while creating the notes  
You Remember -- JWT can also be used for transfering data while implementing relationships .

 

Now tell what is that one thing that is connecting the user and the note...
1. my request is passing through middleware /Auth  
2. auth middleware is using jwt  &jwt can be used for transfering data ... 
can i transfer the user Id from user using jwt  to notes ???
and there wi'll be a relationship formed?? dont have to worry about anything  all the things should be care by the jwt ....



i>Payload will be used for transfering the data  at generating jwttoken 

you'll get the  payload at the auth middleware decodedtoken 

you can manipulate req.body.authid:user._id 
 

 need to update schema asper relationship /here notes schema is modified  & as u manipulated the req.body THE JWT will auto going to add userid to the notesmodel (we dont need to add it by ourself JWT will'be there )....