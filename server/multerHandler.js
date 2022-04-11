const multer = require("multer");

const multerHandler = async (req, res) => {
  try {
    res.status(200).json({
      status: "success",
      message: "File created successfully!!",
      url: req.files[0].filename,
    });
  } catch (error) {
    res.json({
      error,
    });
  }
};

module.exports = multerHandler;
