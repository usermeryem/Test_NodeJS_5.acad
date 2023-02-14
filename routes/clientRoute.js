const express =require('express')
const passport= require('passport')
const { register, login } = require('../controllers/clientController')
const router= express.Router()

router.post('/register', register)
router.post ('/login', login)
router.get('/logged', 
passport.authenticate('bearer', {session: false}), 
function(req, res){
  res.json(req.client)
}
)
module.exports=router
