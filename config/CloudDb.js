const mongosse = require("mongoose");
require("dotenv").config();

// ways to call the function here

const dbConnection = () => {
  mongosse.connect(process.env.Mongo_DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }).then(()=>{
      console.log("db connected succesfully")
  }).catch((er)=>{
      console.log("connection issues");
      console.error(er)
      process.exit(1);
  });
};
module.exports = dbConnection;