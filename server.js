const express = require("express");
const app = express();
require("dotenv").config();
// file upload
const fileUpload = require("express-fileupload");
// db connection apply here
const dbConnection = require("./config/CloudDb");
// cloudinary connect
const cloudinary = require("./config/CloudinarySiteServer");
// ports
const port = process.env.PORT || 8000;
// express apply here
app.use(express.json());
// listern port
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
app.get("/", (req, res) => {
  res.send("cloudinary part working there !");
});

dbConnection();

app.use(
  fileUpload({
    useTempFiles: true,
    tempFileDir: "/tmp/",
  })
);
// cloudnary 
cloudinary();
// routes apply here
const uploadRoutes = require("./routes/route");
app.use("/upload/routes", uploadRoutes);
