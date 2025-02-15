# MongoDB Advanced Queries

## CRUD - MongoDB CRUD Operations
A **database** is a software that is highly optimized to perform **CRUD** (Create, Read, Update, Delete) operations efficiently.

## Users Collection Schema
Example document structure:
```json
{
  "name": "John Doe",
  "city": "Pune",
  "age": 30,
  "country": "India"
}
```
### Query Example: Filtering by City
```javascript
// Filtering on server-side (Less efficient)
const data  = UserModel.find();
const city = req.query.city;
const specific_data = data.filter((user) => user.city === city);
res.send(specific_data);

// Filtering on database-side (More efficient)
const data = UserModel.find({ city: req.query.city });
res.send(data);
```
### Why the Second Method is Better?
1. Reduces data transfer between the database and the server.
2. Reduces server load since filtering happens at the database level.

---

## MongoDB Documents and Data Types
```json
{
  "name": "John",
  "age": 30,
  "adult": true,
  "hobbies": ["reading", "coding"],
  "more_info": { "profession": "developer" },
  "followers": [{ "name": "Alice" }, { "name": "Bob" }]
}
```

---

## Query Examples
### 1. Find a Hero with Health 40
```javascript
db.heros.find({ health: 40 }).pretty();
```
### 2. Find a Hero with Favorite Color 'Red' and Age 44
```javascript
db.heros.find({ "metadata.age": 44, "metadata.favouriteColor": "red" }).pretty();
```
**Note:** The order of fields matters in MongoDB queries.

### 3. Find a Hero with Favorite Color 'Red'
```javascript
db.heros.find({ "metadata.favouriteColor": "red" }).pretty();
```
### 4. Find Heroes Younger Than 45
```javascript
db.heros.find({ "metadata.age": { $lt: 45 } }).pretty();
```
### 5. Find Heroes with Specific Powers
```javascript
// Exact order matters
// Returns Batman
db.heros.find({ "powers": ["intelligence", "money"] }).pretty();

// Returns no output as order is different
db.heros.find({ "powers": ["money", "intelligence"] }).pretty();
```
### 6. Find Heroes with 'Intelligence' Power Only
```javascript
db.heros.find({ "powers": ["intelligence"] }).pretty(); // Returns Spider-Man
```
### 7. Find Heroes with 'Money' and 'Intelligence' (Order Independent)
```javascript
db.heros.find({ "powers": { $all: ["money", "intelligence"] } }).pretty();
```
### 8. Find Heroes with 'Money' Power
```javascript
db.heros.find({ "powers": { $all: ["money"] } }).pretty(); // Returns Iron Man & Batman
```
### 9. Find Heroes with Villain 'Hela'
```javascript
db.heros.find({ "villains.name": "Hela" }).pretty(); // Returns Thor, Dr. Strange
```

---

## Query Operators
| Operator  | Description |
|-----------|-------------|
| `$eq`  | Matches values equal to a given value |
| `$gt`  | Matches values greater than a given value |
| `$lt`  | Matches values less than a given value |
| `$gte` | Matches values greater or equal to a given value |
| `$lte` | Matches values less or equal to a given value |
| `$in`  | Matches any of the values in an array |
| `$ne`  | Matches values not equal to a given value |
| `$nin` | Matches none of the values specified in an array |

### Example: Find Heroes Aged Below 50
```javascript
db.heroes.find({ "metadata.age": { $lt: 50 } }).pretty();
```
### Example: Find Heroes with Health 33, 40, or 60
```javascript
db.heroes.find({ "health": { $in: [33, 60, 40] } }).pretty();
```

---

## Array Queries
### 1. Find Heroes with Powers 'Robot' and 'Money'
```javascript
db.heroes.find({ powers: ["robot", "money"] }).pretty();
```
**Note:** Order must match exactly.

### 2. Find Heroes Whose Power Includes 'Magic'
```javascript
db.heroes.find({ "powers": "magic" }).pretty();
```

## Array Operators
| Operator     | Description |
|-------------|-------------|
| `$all` | Matches arrays containing all specified values |
| `$size` | Matches arrays of a specific size |
| `$elemMatch` | Matches documents with array elements matching specific conditions |

### Example: Find Heroes with Powers 'Money' and 'Intelligence' (Any Order)
```javascript
db.heroes.find({ "powers": { $all: ["money", "intelligence"] } }).pretty();
```

---

## Projection (Selecting Specific Fields)
Projection reduces data transfer by including or excluding specific fields.

| Value | Effect |
|-------|--------|
| `1`   | Include field |
| `0`   | Exclude field |

### Example: Show Only 'Name' and 'Powers' Fields
```javascript
db.heroes.find({}, { name: 1, powers: 1 }).pretty();
```

---

## MongoDB CRUD Recap
| Operation | Method |
|-----------|---------|
| **Create** | `save()` or `insertOne()` |
| **Read** | `find()`, `findOne()` |
| **Update** | `updateOne()`, `updateMany()`, `findOneAndUpdate()` |
| **Delete** | `deleteOne()`, `deleteMany()` |

---

## Connecting to MongoDB with Mongoose
```javascript
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/my_database', { useNewUrlParser: true });
```

## Schema Example
```javascript
const postSchema = new mongoose.Schema({
  title: String,
  content: String,
  author: String,
  date: { type: Date, default: Date.now }
});
```

## Express Routes for CRUD Operations
### Create (POST /posts)
```javascript
app.post('/posts', (req, res) => {
  const newPost = new Post(req.body);
  newPost.save((err, post) => res.send(err || post));
});
```
### Read (GET /posts)
```javascript
app.get('/posts', (req, res) => {
  Post.find((err, posts) => res.send(err || posts));
});
```
### Update (PUT /posts/:id)
```javascript
app.put('/posts/:id', (req, res) => {
  Post.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, post) => res.send(err || post));
});
```
### Delete (DELETE /posts/:id)
```javascript
app.delete('/posts/:id', (req, res) => {
  Post.findByIdAndDelete(req.params.id, (err) => res.send(err || `Post deleted`));
});
```
---

By applying these advanced MongoDB queries, you can optimize data retrieval and improve application performance.

