const express= require('express')
const morgan= require('morgan')
const cors=require('cors')
const bodyParser=require('body-parser')

const app=express()
app.use(morgan('combined'))
app.use(cors())

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))

require('./DataBase/Connect')
require('./passport-strategies/bearer')
app.use('/clients', require('./routes/clientRoute'))
app.use('/products', require('./routes/productRoute'))
app.use('/orders', require('./routes/orderRoute'))
const port=1000
app.listen(port, ()=>{console.log(`App is listening on port ${port}`);})

