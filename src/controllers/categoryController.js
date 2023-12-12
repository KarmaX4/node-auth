const Category = require('../models/category');

const getAllCategories = async (req, res, next) => {
  try {
    const categories = await Category.find();
    res.status(200).json({ categories });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllCategories,
};
