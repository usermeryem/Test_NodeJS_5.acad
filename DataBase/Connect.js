const mongoose= require('mongoose')
mongoose.set('strictQuery', false)
mongoose.connect('mongodb://127.0.0.1:27017/ProjectNode').then(()=>{console.log(`DataBase Connected`);})