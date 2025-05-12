const express = require('express');
const Student = require('./models/student');
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

app.use(async (req, res, next) => {
    try{

    let std =  new Student({
        rollNo: "3213",
        name: "John Doe",
        age: 25,
        email: "abc1@gmail.com",
        address: "123 Main St",
    });

    await std.save();
    console.log(std);


    

    res.json({
        message: "Welcome to the CRUD API"
    });
    } catch(err){
        console.log(err);
        res.status(500).json({
            message: "Internal Server Error"
        });
    }
});



// server 
app.listen(PORT, async ()=>{
     await mongoose.connect(MONGODB_URI);
    console.log('Connected to MongoDB');
    console.log(`Server is running on port ${PORT}`);
});