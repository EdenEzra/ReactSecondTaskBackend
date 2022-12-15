const router = require("express").Router();
const orderController = require("./my-app/controllers/order.controller");
const productController = require("./my-app/controllers/product.controller");
const shoppingCartController = require("./my-app/controllers/shoppingCart.controller");

router.post('Order/createOrder', orderController.createOrder)
router.get('Product/getAllProducts', productController.getAllProducts)
router.post('Product/createProduct', productController.createProduct)
router.get('ShoppingCart/getActiveShoppingCart', shoppingCartController.getActiveShoppingCart)
router.post('ShoppingCart/addProductToShoppingCart', shoppingCartController.addProductToShoppingCart)
router.post('ShoppingCart/removeProductFromShoppingCart', shoppingCartController.removeProductFromShoppingCart)
router.post('ShoppingCart/deleteShoppingCart', shoppingCartController.deleteShoppingCart)
router.post('ShoppingCart/createShoppingCart', shoppingCartController.createShoppingCart)
router.get('ShoppingCart/getProducts', shoppingCartController.getProducts)
