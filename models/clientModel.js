const mongoose = require('mongoose')
const Schema = mongoose.Schema
const clientSchema = new Schema({
  lastName: {
    type: String,
    required: [true, 'Name is required']
  },
  firstName: {
    type: String,
    required: [true, 'Last Name is required']
  },
  email: {
    type: String,
    required: [true, 'email is required']
  },
  password: {
    type: String,
    required: [true, 'password is required']
  },
  role: {
    type: String,
    required: [true, 'role is required']
  }
},
  {
    timestamps: true,
    versionKey: false
  }
)
const client = mongoose.model('client', clientSchema)
module.exports = client
