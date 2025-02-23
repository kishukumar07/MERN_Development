// 1. Switch to or create a database
use myDatabase;

// 2. Create a collection and insert 10 documents
db.users.insertMany([
    { name: "Amit Sharma", age: 25, location: "Delhi", skills: ["JavaScript", "MongoDB"] },
    { name: "Priya Singh", age: 30, location: "Mumbai", skills: ["Python", "SQL"] },
    { name: "Raj Patel", age: 28, location: "Ahmedabad", skills: ["Java", "Spring Boot"] },
    { name: "Simran Kaur", age: 26, location: "Chandigarh", skills: ["Node.js", "React"] },
    { name: "Arjun Verma", age: 32, location: "Bangalore", skills: ["C++", "Algorithms"] },
    { name: "Neha Joshi", age: 27, location: "Hyderabad", skills: ["Django", "Flask"] },
    { name: "Vikram Choudhary", age: 35, location: "Jaipur", skills: ["Machine Learning", "AI"] },
    { name: "Rohan Gupta", age: 24, location: "Pune", skills: ["HTML", "CSS"] },
    { name: "Anjali Mishra", age: 29, location: "Kolkata", skills: ["Data Science", "Big Data"] },
    { name: "Suresh Reddy", age: 31, location: "Chennai", skills: ["Golang", "Kubernetes"] }
]);

// 3. Create a compound index on age and location
db.users.createIndex({ age: 1, location: 1 });

// 4. Use explain() to analyze the performance of a query using the compound index
db.users.find({ age: { $gte: 28 }, location: "Mumbai" }).explain("executionStats");

// 5. Create a single field index on the "name" field (not included in the compound index)
db.users.createIndex({ name: 1 });

// 6. Compare query performance using the single field index vs. compound index
db.users.find({ name: "Priya Singh" }).explain("executionStats");
db.users.find({ age: { $gte: 28 }, location: "Mumbai" }).explain("executionStats");

// 7. Drop the single field index
db.users.dropIndex("name_1");

// 8. Create a multi-key index on the "skills" array field
db.users.createIndex({ skills: 1 });

// 9. Use explain() to analyze the performance of a query using the multi-key index
db.users.find({ skills: "Python" }).explain("executionStats");
