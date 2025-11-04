// ============================================================================
// SECURE LOGIN SYSTEM - STARTER CODE
// ============================================================================
// Your task: Complete the TODO sections to build a secure authentication system
// 
// What you'll learn:
// - How to hash passwords securely with bcrypt
// - How to store users in MongoDB
// - How to validate user credentials
// - How to build signup and login endpoints
// ============================================================================

import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import bcrypt from "bcrypt";
import cors from "cors";

// TODO: Load environment variables from .env file
// Hint: Use dotenv.config()
// YOUR CODE HERE

// TODO: Create Express application
// Hint: Use express()
const app = // YOUR CODE HERE

// TODO: Add CORS middleware (allows test.html to work)
// Hint: Use app.use(cors())
// YOUR CODE HERE

// TODO: Add middleware to parse JSON request bodies
// Hint: Use app.use(express.json())
// YOUR CODE HERE

// ============================================================================
// STEP 1: Connect to MongoDB Database
// ============================================================================
// TODO: Connect to MongoDB using mongoose.connect()
// - Use process.env.MONGO_URI for the connection string
// - Use .then() to log success message: "✅ Connected to MongoDB"
// - Use .catch() to log error message
// YOUR CODE HERE

// ============================================================================
// STEP 2: Define User Schema (Database Structure)
// ============================================================================
// TODO: Create a user schema with two fields:
// - username: type String, required: true, unique: true
// - password: type String, required: true
// Hint: Use new mongoose.Schema({ ... })
const userSchema = // YOUR CODE HERE

// TODO: Create a User model from the schema
// Hint: Use mongoose.model("User", userSchema)
const User = // YOUR CODE HERE

// ============================================================================
// STEP 3: SIGNUP ROUTE - Create New User
// ============================================================================
// Endpoint: POST /signup
// Body: { "username": "tanay", "password": "hello123" }
app.post("/signup", async (req, res) => {
  try {
    // TODO: Extract username and password from req.body
    // Hint: Use destructuring: const { username, password } = req.body
    const { username, password } = // YOUR CODE HERE

    // TODO: Validate that username and password are provided
    // If not, return status 400 with error: { error: "Username and password are required" }
    // Hint: Use if (!username || !password) { return res.status(400).json(...) }
    // YOUR CODE HERE

    // TODO: Check if user already exists in database
    // Hint: Use User.findOne({ username })
    const existing = // YOUR CODE HERE

    // TODO: If user exists, return status 400 with error: { error: "User already exists" }
    // YOUR CODE HERE

    // TODO: Hash the password using bcrypt
    // - Use bcrypt.hash(password, 10)
    // - Store result in a variable called 'hashed'
    // - 10 is the number of salt rounds (good balance of security vs speed)
    const hashed = // YOUR CODE HERE

    // TODO: Create a new User object with username and hashed password
    // Hint: new User({ username, password: hashed })
    const user = // YOUR CODE HERE

    // TODO: Save the user to the database
    // Hint: Use await user.save()
    // YOUR CODE HERE

    // TODO: Return status 201 with success message: { message: "User created successfully" }
    // Hint: Use res.status(201).json({ ... })
    // YOUR CODE HERE

  } catch (error) {
    // Error handling is provided for you
    console.error("Signup error:", error);
    res.status(500).json({ error: "Server error" });
  }
});

// ============================================================================
// STEP 4: LOGIN ROUTE - Authenticate User
// ============================================================================
// Endpoint: POST /login
// Body: { "username": "tanay", "password": "hello123" }
app.post("/login", async (req, res) => {
  try {
    // TODO: Extract username and password from req.body
    const { username, password } = // YOUR CODE HERE

    // TODO: Validate that username and password are provided
    // If not, return status 400 with error: { error: "Username and password are required" }
    // YOUR CODE HERE

    // TODO: Find user in database by username
    // Hint: Use User.findOne({ username })
    const user = // YOUR CODE HERE

    // TODO: If user is not found, return status 400 with error: { error: "User not found" }
    // YOUR CODE HERE

    // TODO: Compare provided password with hashed password in database
    // - Use bcrypt.compare(password, user.password)
    // - Store result in a variable called 'valid'
    // - This returns true if passwords match, false otherwise
    const valid = // YOUR CODE HERE

    // TODO: If passwords don't match, return status 401 with error: { error: "Invalid password" }
    // YOUR CODE HERE

    // TODO: If everything is valid, return success message: { message: "Login successful!" }
    // Hint: Use res.json({ ... })
    // YOUR CODE HERE

  } catch (error) {
    // Error handling is provided for you
    console.error("Login error:", error);
    res.status(500).json({ error: "Server error" });
  }
});

// ============================================================================
// STEP 5: Start the Server
// ============================================================================
// TODO: Get port from environment variable or use 3000 as default
// Hint: Use process.env.PORT || 3000
const PORT = // YOUR CODE HERE

// TODO: Start the server using app.listen()
// - First argument: PORT
// - Second argument: callback function that logs:
//   "🚀 Server running on http://localhost:{PORT}"
// YOUR CODE HERE

// ============================================================================
// TESTING YOUR CODE
// ============================================================================
// Once you complete all TODOs:
// 1. Run: npm start
// 2. Open test.html in your browser
// 3. Try signing up a new user
// 4. Try logging in with correct password (should succeed)
// 5. Try logging in with wrong password (should fail)
// ============================================================================

// ============================================================================
// SECURITY QUIZ (Answer these to check your understanding)
// ============================================================================
// Q1: Why do we hash passwords instead of storing them in plain text?
// A: _______________________________________________________________

// Q2: Can you reverse a bcrypt hash to get the original password?
// A: _______________________________________________________________

// Q3: What does the number 10 in bcrypt.hash(password, 10) mean?
// A: _______________________________________________________________

// Q4: Why do we use bcrypt.compare() instead of comparing strings directly?
// A: _______________________________________________________________

// Q5: What happens if two users have the same password?
// A: _______________________________________________________________
// ============================================================================

