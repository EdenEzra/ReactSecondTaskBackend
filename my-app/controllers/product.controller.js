const productService = require("../services/product.service")

async function getAllProducts(req, res) {
    try {
        const products = await productService.getAllProducts();
        res.json({ success: true, data: products });

    }
    catch (ex) {
        res.status(400);
        res.json({ success: false, error: ex.message });
    }
}


async function createProduct(req, res) {
    try {
        
        const { name, description, price, pictures } = req.body
        const response = await productService.createProduct(name, description, price, pictures);
        if (response == null) {
            res.json({ success: true, message: "Created failed" });
        }
        else {
            res.json({success:true,data:response});
        }

    }
    catch (ex) {
        res.status(400);
        res.json({ success: false, error: ex.message });
    }
}


module.exports = {
    getAllProducts,
    createProduct

}