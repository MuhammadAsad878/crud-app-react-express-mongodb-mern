const mongoose = require("mongoose");
const { Schema } = mongoose;

// Define the student schema
const studentSchema = new Schema(
  {
    rollNo: {
      type: String,
      required: true,
      unique: true,
    },
    name: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    address: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

// Create the student model
const Student = mongoose.model("Student", studentSchema);

// Export the student model
module.exports = Student;