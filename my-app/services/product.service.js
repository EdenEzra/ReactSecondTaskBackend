const Product = require("../models/product.model");


async function getAllProducts() {
    return await Product.find();
}

async function getProduct(id) {
    const product = await Product.findOne({ _id: ObjectId(id) }).lean();
    return product;
}

async function createProduct(name, description, price, pictures) {
    const findProduct = await Product.findOne({ "name": name });
    if (findProduct != null) {
        return null;
    }

    const product = await Product.create({
        name: name,
        description: description,
        price: price,
        pictures: pictures,
    });

    const response = await product.save();
    return response;
}


module.exports = {
    getAllProducts,
    getProduct,
    createProduct
}