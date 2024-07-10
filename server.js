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

