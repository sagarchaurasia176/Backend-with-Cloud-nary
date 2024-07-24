const cloudinary = require("cloudinary").v2;
require("dotenv").config();

const File = require("../schema/File");
const { error } = require("console");
// config the api here
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRECT_KEY,
});

// 1st () check that the value is includ in the arr or not
const isFileType = (type, supportTypes) => {
  return supportTypes.includes(type);
};

async function uploadFileToCloudinary(file, folder) {
  const options = { folder };
  return await cloudinary.uploader.upload(file.tempPath, options);
}

// exports the video controller apply here
exports.VideoController = async (req, res) => {
  try {
    const { name, tag } = req.body;
    // fetch the file first here
    const file = req.files.VideoUrl;
    // check supported versions
    // const supportTypes = ["mp4", "mp3", "mov"];
    const fileType = file.name.split(".").pop().toLowerCase();

    // check the fileType first
    if (!isFileType(fileType, supportTypes)) {
      return res.status(400).json({
        success: false,
        message: "video is not uploaded at the server point",
        error: error.message,
      });
    }
    //upload to the cloud
    const response = await uploadFileToCloudinary(file, "DataImg");
    return res.status(200).json({
      success: true,
      data: passToDb,
      ImageUrl: response.secure_url,
      //   data: passToDb,
      message: "File upload successful",
    });
    // catch apply
  } catch (er) {
    return res.status(400).json({
      success: false,
      message: "video not uploaded",
      error: error.message,
    });
  }
};
