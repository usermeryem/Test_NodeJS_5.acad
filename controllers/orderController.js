const client = require('../models/clientModel')
const order= require('../models/orderModel')
const product = require('../models/productModel')

exports.addOrder= async (req, res)=>{
  try {
    let findClient= await client.findById(req.params.clientId)
    let ord= new order({
      client: findClient.email,
      ProductList: [],
      TotalPrice: 0
    })
    await ord.save()  
    res.status(201).send('New Order added Successfully')
  } catch (error) {
    res.status(500).send(error)
  }
}

exports.addPrdctToOrder= async(req, res)=>{
  try {
    let ord= await order.findById(req.params.id)
    let pdrt= await product.findById(req.params.productId)  
    ord={$push:{ProductList: req.params.productId}}
    ord.TotalPrice+=pdrt.price*req.body.qunt
    pdrt.quantity-=req.body.qunt
    ord.save()
    res.status(200).send('The order list was updated')    
  } catch (error) {
    res.status(500).send(error)
  }
}
exports.getOrder= async (req, res)=>{
  try {
    const showOne= await order.findById(req.params.id).populate('ProductList')
    res.status(200).send(showOne)
  } catch (error) {
    res.status(500).send(error)
  }
}
exports.getOrders= async (req, res)=>{
  try {
    const showAll= await order.find()
    res.status(200).send(showAll)     
    
  } catch (error) {
    res.status(500).send(error)
  }
}
