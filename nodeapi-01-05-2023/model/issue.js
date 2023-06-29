const mongoose = require("mongoose");

const userIssueSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    default: "open",
  },
  postDate: {
    type: Date,
    default: Date.now(),
  },
  lastUpdate: {
    type: Date,
  },
  userID: {
    type: mongoose.Schema.Types.ObjectId,
  },
  user_EmployID: {
    type: Number,
  },
 
});

module.exports = mongoose.model("issue", userIssueSchema);
