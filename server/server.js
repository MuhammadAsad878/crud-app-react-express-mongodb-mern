const express = require('express');
const mongoose = require('mongoose'); 
const cors = require('cors');
// const dotenv = require('dotenv');

const app = express();
// dotenv.config();
const PORT = process.env.PORT || 3000;
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/crud-app';

// Middlewares
app.use(cors());  // to allow cross-origin requests
app.use(express.urlencoded({ extended: true })); // to parse URL-encoded data
app.use(express.json()); // to parse JSON data





// server 
app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
});