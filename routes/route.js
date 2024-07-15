const express = require("express");
const routes = express.Router();
const {FileUploadController , ImageUploadController} = require("../controller/FileUploadController");

// ImageController , UploadController , VideoController ,
// start withe Image controller
routes.post('/FileUploadController' , FileUploadController)
routes.post('/Image' , ImageUploadController)
// routes.post('/ImageUpload' , ImageUpload);
module.exports = routes;
