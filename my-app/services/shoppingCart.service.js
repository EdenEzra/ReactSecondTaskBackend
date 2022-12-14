const ShoppingCart = require("../models/shoppingCart.model");
const productService = require("../services/product.service");
const ObjectId = require('mongoose').Types.ObjectId;

async function getActiveShoppingCart() {
    let shoppingCart = await ShoppingCart.findOne({ active: true }).populate('products.product').lean().exec();    

    if(!shoppingCart)
     shoppingCart = await createShoppingCart()

    return shoppingCart;
}

async function addProductToShoppingCart(productId) {
    let shoppingCart = await ShoppingCart.findOne({active:true }).populate('products.product');
    if (!shoppingCart) {
        shoppingCart = await createShoppingCart(productId);
        return shoppingCart
    } else {
        const shoppingCartId = shoppingCart._id;
        let product = await productService.getProduct(productId);
        shoppingCart.products.push({ product: productId });
            
        shoppingCart.totalPrice = shoppingCart.totalPrice + product.price;

        const savedCart = await shoppingCart.save();
        return await ShoppingCart.findOne({ active: true }).populate('products.product').lean().exec();
    }

}

async function removeProductFromShoppingCart(productId) {
    const cart = await ShoppingCart.findOne({ active: true });
    cart.products = cart.products.filter(product => product.product != productId);
    const productPrice = (await productService.getProduct(prodId)).price;
    cart.totalPrice = cart.totalPrice + productPrice;

    await cart.save();
    return await ShoppingCart.findOne({ active: true }).populate('products.product').lean().exec();

}

async function deleteShoppingCart(id) {
    const filter = { _id: ObjectId(id) };
    const update = { active: false };
    return await ShoppingCart.findOneAndUpdate(filter, update);
}

async function createShoppingCart(productId) {
    const productPrice = await productService.getProduct(productId).price;

    const shoppingCart = await ShoppingCart.create({
        created: new Date(),
        totalPrice: productPrice
    })
    if(productId)
    shoppingCart.products.push({ product: ObjectId(productId) });

    return await shoppingCart.save();
}


async function getProducts() {
    const shoppingCartProducts = await ShoppingCart.findOne({ active: true }).populate('products.product');
    return shoppingCartProducts.products;
}

module.exports = {
    getActiveShoppingCart,
    addProductToShoppingCart,
    deleteShoppingCart,
    createShoppingCart,
    removeProductFromShoppingCart,
    getProducts
}