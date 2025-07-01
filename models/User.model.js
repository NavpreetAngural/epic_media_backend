const {Schema , model} = require("mongoose")

const userSchema = new Schema({
  fullName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: false, // ✅ now optional for Google users
  },
  phone: {
    type: Number,
    required: false, // ✅ optional
  },
  dp: {
    type: String,
    required: false, // sometimes Google doesn't return it
  },
  city: {
    type: String,
    required: false, // ✅ optional
  },
});

module.exports = model("Users" , userSchema)