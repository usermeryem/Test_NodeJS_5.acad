const mongoose = require('mongoose')
const Schema = mongoose.Schema
const orderSchema = new Schema({
  TotalPrice: {
    type: Number,
    required: [true, 'Price is required']
  },
  ProductList: [
    { type: String}
  ],
  client: {
    type: String
  }
},
  {
    timestamps: true,
    versionKey: false
  })
const order= mongoose.model('order', orderSchema)
module.exports=order