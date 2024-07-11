const express = require('express')
const routes = express.Router();
const {ImageController , UploadController , VideoController , localFileUpload} = require('../controller/MainController');

// start withe Image controller
routes.post('/ImageController' , ImageController)
module.exports = routes;






