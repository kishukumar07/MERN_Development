const mongoose=require('mongoose'); 


//connecting the database
main=async ()=>{
    try{
        const connection = await mongoose.connect("mongodb://127.0.0.1:27017/learningMongoose"); 
        console.log("Connected to the Database");

//   await UserModel.insertMany([{name:'archi',age:'23',city:"Ranchi"},{name:'sejal',age:'24',city:"Delhi"}])

//incase of insertOne we have to use this constructor function(UserModel) 

const user =new UserModel({ //constructor object
   name:"Niket",
   age:"233",
   city :"Ranchi"
})
await user.save(); //this will insert the single constructor obj inside database learning mongoose  


console.log("inserted the data"); 

        connection.disconnect()
        console.log("Disconnected"); 
    }
   catch{
    console.log("failed to connect")
    console.log(err); 
   }
}

main()

//structuring the database  
//Schema <=Model <=Document

//Schema
const userSchema =mongoose.Schema({
    name:{type:String,require:true}, //validation 
    age:Number,
    city:String
})


// creating Model with the help of schema
const UserModel = mongoose.model("collectionname_user", userSchema); 
