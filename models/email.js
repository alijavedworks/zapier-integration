const mongoose = require("mongoose");
const email = mongoose.Schema({
  from: {
    type: String,
  },
  subject: {
    type: String,
  },
});

exports.email = mongoose.model("email", email);
