const product= require('../models/productModel')
exports.addProduct= async (req, res)=>{
  try {
    await product.create(req.body)
    res.status(201).send('New Product Added')
  } catch (error) {
    res.status(500).send(error)
  }
}

exports.deleteProduct= async (req, res)=>{
  try {
    const deleted= await product.findByIdAndDelete(req.params.id)
    res.status(200).send(`${deleted.name} Deleted successfully`)
  } catch (error) {
    res.status(500).send(error)     
  }
}

exports.getProduct= async (req, res)=>{
  try {
    const prdt= await product.findById(req.params.id)
    res.status(200).send(prdt)
  } catch (error) {
    res.status(500).send(error)  
  }
}
exports.getProducts= async (req, res)=>{
  try {
    const prdts= await product.find()
    res.status(200).send(prdts)
  } catch (error) {
    res.status(500).send(error)  
  }
}
exports.updateProduct = async (req, res)=>{
  try {
    await product.findByIdAndUpdate(req.params.id, req.body)
    res.status(200).send('Successfully updated')
  } catch (error) {
    res.status(500).send(error) 
  }
}