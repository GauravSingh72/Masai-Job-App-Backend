const mongoose = require("mongoose");

const jobSchema = new mongoose.Schema({
  company: String,
  postedAt: Date,
  city: String,
  location: String,
  role: String,
  level: String,
  contract: String,
  position: String,
  language: String,
}); 

module.exports = mongoose.model("Job", jobSchema);
