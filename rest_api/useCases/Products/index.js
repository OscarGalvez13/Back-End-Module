const Product = require("../../models/products").model;

const get = async (limit) => {
  console.log("limit", limit);
  const allProducts = await Product.find({}, null, { limit: limit }).exec();
  return allProducts;
};

const getById = async (productId) => {
  const product = await Product.findById(productId).exec();
  return product;
};

const create = async (productData) => {
  const { name, price } = productData;

  const product = new Product({ name, price });

  const savedProduct = await product.save();

  return savedProduct;
};

const del = (productId) => {
  return Product.findByIdAndDelete(productId).exec();
};

const update = (productId, productData) => {
  const { name, price } = productData;
  return Product.findByIdAndUpdate(productId, { name, price }).exec();
};
