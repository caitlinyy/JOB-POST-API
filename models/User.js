import mongoose from "mongoose";

import validator from "validator";

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please provide your name'],
    minLength: 3,
    maxLength: 20,
    trim: true,
  },
  email: {
    type: String,
    validate: {
      validator: validator.isEmail,
      message: "Please provide valid email"
    },
    require: [true, 'Please provide your email'],
    unique: true,
  },
  password: {
    type: String,
    require: [true, 'Please provide your email'],
    minLength: 6,
  },
  location: {

  },

})

//mongodb创建user collection
export default mongoose.model('User', UserSchema)