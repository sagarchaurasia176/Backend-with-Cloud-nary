// Require the Cloudinary library
const cloudinary = require("cloudinary").v2;
require("dotenv").config();

const CloudinarySiteServer = () => {
  try {
    cloudinary.config({
      CLOUD_NAME: process.env.CLOUD_NAME,
      API_KEY: process.env.API_KEY,
      API_SECRECT_KEY: process.env.API_SECRECT_KEY,
    });
  } catch (er) {
    console.log("connection not working in cloud part");
  }
};

module.exports = CloudinarySiteServer;
