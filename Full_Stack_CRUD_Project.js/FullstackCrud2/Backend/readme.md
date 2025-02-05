# 📝 Notes App - Backend  
A **secure and scalable** Notes-Taking App built with **Node.js, Express, MongoDB, and JWT Authentication**. This backend ensures **user authentication, authorization, and data security**, forming a strong foundation for the full-stack application.  

## 🚀 Features  
- **User Authentication** (Signup/Login) with **bcrypt password hashing**.  
- **JWT Authentication & Middleware** for secure route access.  
- **CRUD Operations** for managing user-specific notes.  
- **User-Note Relationship** – Only the note owner can modify or delete their notes.  
- **Proper Error Handling & Security** – Unauthorized access prevention.  

## 🏗️ Project Structure  
```
Backend/
│── controllers/
│   ├── note.route.js        # Handles Notes API Routes
│   ├── user.routes.js       # Handles User Authentication Routes
│
│── middleware/
│   ├── authmiddleware.js    # Middleware for JWT authentication
│
│── model/
│   ├── note.model.js        # Mongoose Schema for Notes
│   ├── user.model.js        # Mongoose Schema for Users
│
│── db.js                    # MongoDB connection setup
│── script.js                 # Main server entry point
│── .env                      # Environment variables
│── package.json              # Dependencies & Scripts
│── readme.md                 # Project Documentation
```

## 🛠️ Installation & Setup  
1. **Clone the Repository**  
   ```bash
   git clone [Your Repo Link]
   cd Backend
   ```

2. **Install Dependencies**  
   ```bash
   npm install
   ```

3. **Set Up Environment Variables**  
   Create a `.env` file and add:  
   ```
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   ```

4. **Run the Server**  
   ```bash
   npm start
   ```

## 🔗 API Endpoints  
### User Authentication  
- `POST api/users/register` – Register a new user  
- `POST api/users/login` – Login and receive JWT  

### Notes Management  
- `GET  api/ ` – Get all notes (Authenticated users only)  
- `POST /api/notes/create` – Create a new note (Authenticated users only)  
- `PUT /api/notes/update/id` – Update a note (Only the owner)  
- `DELETE /api/notes/delete/id` – Delete a note (Only the owner)  

## 🛠 Tech Stack  
- **Backend:** Node.js, Express.js  
- **Database:** MongoDB (Mongoose ORM)  
- **Security:** JWT, bcrypt  

## 🎯 Next Steps – Frontend Integration  
Now that the backend is complete, the next phase is building the **React.js frontend** to provide a seamless user experience.  

📌 **Follow the updates and check the frontend development progress soon!**  

🚀 **Feel free to contribute, suggest improvements, or share your feedback!**  

#FullStackDevelopment #MERN #NodeJS #MongoDB #JWT #WebDevelopment #API