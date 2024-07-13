const express = require("express");
const routes = express.Router();
const { FileUploadController } = require("../controller/FileUploadController");
// ImageController , UploadController , VideoController ,
// start withe Image controller
routes.post("/localFileUpload", FileUploadController);
module.exports = routes;
