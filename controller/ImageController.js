const cloudinary = require("cloudinary").v2;
require("dotenv").config(); // Ensure you load environment variables
const File = require("../schema/File");
// Apply the cloud configurations
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRECT_KEY,
});

// Check if file type is supported
function isFileType(type, supportTypes) {
  return supportTypes.includes(type);
}

// Upload file to Cloudinary
async function uploadFileToCloudinary(file, folder) {
  const options = { folder };
  return await cloudinary.uploader.upload(file.tempFilePath, options);
}

// Image upload controller
exports.ImageController = async (req, res) => {
  try {
    const { name, email, tags } = req.body;
    const file = req.files.imgFiles;
    // Check for supported file types
    const supportTypes = ["jpg", "png", "jpeg"];
    const fileType = file.name.split(".").pop().toLowerCase();

    if (!isFileType(fileType, supportTypes)) {
      return res.status(400).json({
        success: false,
        message: "Image type not supported",
      });
    }

    // Upload file to Cloudinary
    const response = await uploadFileToCloudinary(file, "DataImg");

    // Uncomment and modify if you want to save file details to the database
    const passToDb = await File.create({
      name,
      tags,
      email,
      ImageUrl: response.secure_url,
    });

    return res.status(200).json({
      success: true,
      data: passToDb,
      ImageUrl: response.secure_url,
      //   data: passToDb,
      message: "File upload successful",
    });
  } catch (er) {
    return res.status(400).json({
      success: false,
      message: er.message,
    });
  }
};
