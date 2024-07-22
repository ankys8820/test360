const mongoose = require("mongoose");
const passportLocalMongoose = require("passport-local-mongoose");

const adminSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: Number,
    required: true,
  },
  department: {
    type: String,
    enum: ["startup_incubation", "intern_incubation"],
    required: true,
  },
});

adminSchema.plugin(passportLocalMongoose);
module.exports = mongoose.model("Admin", adminSchema);
