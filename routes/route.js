const express = require("express");
const routes = express.Router();
const { FileUploadController } = require("../controller/FileUploadController");

const { ImageController } = require("../controller/ImageController");
// ImageController , UploadController , VideoController ,
// start withe Image controller
routes.post("/FileUploadController", FileUploadController);
routes.post("/UploadImage", ImageController);
// routes.post('/ImageUpload' , ImageUpload);
module.exports = routes;
