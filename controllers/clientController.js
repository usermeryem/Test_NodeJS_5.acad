const client = require('../models/clientModel')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
exports.register = async (req, res) => {
  try {
    const find = await client.findOne({ email: req.body.email })
    if (find) {
      res.status(401).send('Email already existing')
    } else {
      const salt = await bcrypt.genSalt(10)
      req.body.password = await bcrypt.hash(req.body.password, salt)
      req.body.role = "Client"
      const newClient = await client.create(req.body)
      res.status(201).send(newClient)
    }
  } catch (error) {
    res.status(500).send(error)
  }
}
exports.login = async(req, res)=>{
  try {
    const find= await client.findOne({email: req.body.email})
    if (find!==null && bcrypt.compareSync(req.body.password, find.password)== true){
      const data = {email: find.email, id: find._id}
      const token= jwt.sign(data, 'secret', {expiresIn: '1h'})
      res.status(200).send({message:'Logged Successfully', token})
    } else {
      res.status(401).send('Check Email or password')
    }
  } catch (error) {
    res.status(500).send(error)
  }
}