const express = require("express");
const routes = express.Router();
const { FileUploadController , ImageFIleController } = require("../controller/FileUploadController");
// ImageController , UploadController , VideoController ,
// start withe Image controller
routes.post('/ImageFIleController' , ImageFIleController);
routes.post("/localFileUpload", FileUploadController);
module.exports = routes;
