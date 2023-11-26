const mongoose = require("mongoose");

exports.connect = () => {
  try {
    mongoose.set("strictQuery", false);
    mongoose.connect(process.env.DATABASE_URL);
    console.log("Connected to Mongoose Database - Zapier Integration");
    return mongoose.connection;
  } catch (e) {
    console.log(e.message);
  }
};
