const { error } = require("console");
const File = require("../schema/File");
const cloudinary = require("cloudinary").v2;

//ImageFIleController
exports.FileUploadController = async (req, res) => {
  try {
    const file = req.files.file;
    let path =
      __dirname + "/files/" + Date.now() + `.${file.name.split(".")[1]}`;
    file.mv(path, (err) => {
      console.log(err);
    });
    res.status(200).json({
      success: true,
      message: "Local file stored succesfuly",
    });
  } catch (er) {
    res.status(400).json({
      success: false,
      message: "Local file not stored succesfuly",
    });
    console.log("error", er);
  }
};
