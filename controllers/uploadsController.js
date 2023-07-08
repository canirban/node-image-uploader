const { StatusCodes } = require("http-status-codes");
const { BadRequestError } = require("../errors");
const cloudinary = require("cloudinary").v2;
const fs = require("fs");
const path = require("path");
const uploadProductImage = async (req, res) => {
  if (!req.files) throw new BadRequestError("No file provided");

  const image = req.files.image;
  if (!image.mimetype.startsWith("image"))
    throw new BadRequestError("Please upload a image");

  if (image.size > 1854230)
    throw new BadRequestError("Please upload image smaller than 1MB");
  const result = await cloudinary.uploader.upload(image.tempFilePath, {
    use_filename: true,
    folder: "imgs",
  });
  fs.rmSync(path.join(__dirname, "../tmp"), { recursive: true, force: true });
  res.status(StatusCodes.CREATED).send();
};

module.exports = { uploadProductImage };
