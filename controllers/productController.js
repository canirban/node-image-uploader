const Product = require("../models/Product");
const { StatusCodes } = require("http-status-codes");

const createProduct = (req, res) => {
  res.status(200).json("working");
};
const getAllProducts = (req, res) => {
  res.status(200).json("working");
};

module.exports = { createProduct, getAllProducts };
