const express = require("express");
const app = express();
require("dotenv").config();
const port = process.env.PORT || 8000;
app.use(express.json());
// listern port
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

app.get("/", (req, res) => {
  res.send("cloudinary part working there !");
});

// db connection apply here
const dbConnection = require("./config/CloudDb");
dbConnection();
const fileUpload = require("express-fileupload");
app.use(
  fileUpload({
    useTempFiles: true,
    tempFileDir: "/tmp/",
  })
);

// cloudinary connect
const cloudinary = require("./config/CloudinarySiteServer");
cloudinary();
// routes apply here
const uploadRoutes = require("./routes/route");
app.use("/upload/routes", uploadRoutes);
