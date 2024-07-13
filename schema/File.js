const mongoose = require("mongoose");
const localFileUploadSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  ImageUrl: {
    type: String,
  },
  tags: {
    type: String,
  },
  email: {
    type: String,
    required: true,
  },
});

// exports 
module.exports = mongoose.model('File' , localFileUploadSchema)
