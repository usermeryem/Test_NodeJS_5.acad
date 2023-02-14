const express= require('express')
const { addProduct, deleteProduct, getProduct, getProducts, updateProduct } = require('../controllers/productController')
const router= express.Router
router.post('/addProduct', addProduct)
router.delete('/deleteProduct/:id', deleteProduct)
router.get('/getProduct/:id', getProduct)
router.get('/getProducts', getProducts)
router.put('/updateProduct/:id', updateProduct)
module.exports= router
