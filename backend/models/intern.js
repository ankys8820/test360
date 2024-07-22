const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const passportLocalMongoose = require("passport-local-mongoose");

const internSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  whatsapp: {
    type: Number,
    required: true,
  },
  collegeName: {
    type: String,
    required: true,
  },
  semester: {
    type: String,
    required: true,
  },
  state: {
    type: String,
    required: true,
  },
  internship: {
    type: String,
    required: true,
  },
  availability6Months: {
    type: Boolean,
    required: true,
  },
  paidInternship: {
    type: Boolean,
    required: true,
  },
  source: {
    type: String,
    required: true,
  },
  isVerified: {
    type: Boolean,
    defaul: false,
  },
  emailToken: {
    type: String,
  },
});

internSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model("Intern", internSchema);
