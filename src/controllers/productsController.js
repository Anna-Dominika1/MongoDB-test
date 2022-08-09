const { Product } = require("../models");

exports.getAll = async (req, res, next) => {
  try {
    // Знайти всі продукти
    const allProduct = await Product.find();
    res.json(allProduct);
  } catch (error) {
    next(error);
  }
};

exports.search = async (req, res, next) => {
  try {
    const { title } = req.query;
    // Знайти продукти по назві
    const searchProducts = await Product.find({
      title: {
        $regex: title,
      },
    });
    res.json(searchProducts);
  } catch (error) {
    next(error);
  }
};

exports.create = async (req, res, next) => {
  try {
    const { title, description, imageUrl, price, category } = req.body;
    const newProduct = await Product.create(req.body);
    res.status(201).json(newProduct);
    // Створити новий продукт
  } catch (error) {
    next(error);
  }
};

exports.getById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const products = await Product.findById(id);
    res.json(products);
    // Знайти продукт по id
  } catch (error) {
    next(error);
  }
};

exports.update = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { title, description, imageUrl, price, category } = req.body;
    // Оновити існуючий продукт
    const product = await Product.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.json(product);
  } catch (error) {
    next(error);
  }
};

exports.delete = async (req, res, next) => {
  try {
    const { id } = req.params;
    // Видалити існуючий продукт
    const product1 = await Product.findByIdAndDelete(id);
    res.json(product1);
  } catch (error) {
    next(error);
  }
};
