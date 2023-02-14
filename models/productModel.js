const mongoose= require('mongoose')
const Schema= mongoose.Schema
const productSchema= new Schema({
  name: {
    type: String, 
    required: [true, 'name is required']
  },
  description: {
    type: String,
    required: [true, 'description is required']
  },
  quantity: {
    type: Number,
    required: [true, 'quantity is required']
  },
  price: {
    type: Number,
    required: [true, 'price is required']
  }
},
{
  timestamps: true,
  versionKey: false
})
const product= mongoose.model('product', productSchema)
module.exports= product