const shoppingCartService = require("../services/shoppingCart.service")

async function getActiveShoppingCart(req, res) {
    try {
        res.json({ sucess: true, data: await shoppingCartService.getActiveShoppingCart() });

    } catch (ex) {
        console.error(ex.stack)
        res.status(400).json({ success: false, error: ex });
    }
}

async function addProductToShoppingCart(req, res) {
    try {
        const response = await shoppingCartService.addProductToShoppingCart(req.body.productId,req.body.count);
        res.json({ success: true, data: response });
    } catch (ex) {
        console.error(ex.stack);
        res.status(400).send(ex);
    }

}

async function removeProductFromShoppingCart(req, res) {
    try {

    } catch (ex) {
        console.error(ex.stack);
        res.status(400).json({ success: false, error: ex });
    }
    const response = await shoppingCartService.removeProductFromShoppingCart(req.body.productId,req.body.count);
    res.json({ success: true, data: response });
}

async function deleteShoppingCart(req, res) {
    const response = await shoppingCartService.deleteShoppingCart(req.body.Id);
    res.json({ success: true, message: "Deleted successfully" });
}

async function createShoppingCart(req, res) {
    const productId = req.body;
    const response = await shoppingCartService.createShoppingCart( productId);
    res.json({ success: true, data: response });
    
}

async function getProducts(req, res) {
    const response = await shoppingCartService.getProducts();
    res.json({ success: true, data: response });
}

module.exports = {
    getActiveShoppingCart,
    addProductToShoppingCart,
    deleteShoppingCart,
    createShoppingCart,
    removeProductFromShoppingCart,
    getProducts
}
