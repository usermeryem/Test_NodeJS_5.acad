const express= require('express')
const { addOrder,  getOrder, getOrders,  addPrdctToOrder } = require('../controllers/orderController')
const router= express.Router

router.post('/addOrder/:clientId', addOrder)

router.put('/addPrdctToOrder/:id/:productId', addPrdctToOrder)
router.get('/getOrder/:id', getOrder)
router.get('/getOrders', getOrders)

module.exports= router