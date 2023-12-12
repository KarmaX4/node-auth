const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');
const jwtMiddleware = require('../middlewares/authMiddleware');

router.get('/',jwtMiddleware.verifyToken ,productController.getAllProducts);
router.post('/', jwtMiddleware.verifyToken, productController.createProduct);


module.exports = router;
