const mongoose = require('mongoose')

const connectToDB = async (req,res)=>{
    await mongoose.connect('mongodb://localhost:27017',{
    useNewUrlParser:true,
    useUnifiedTopology: true
    })
}

connectToDB().then(()=>{
    console.log('MongoDB Connected')
}).catch((err)=>{
    console.log(`Error Message - ${err.message}`)
})

const db = mongoose.connection;

module.exports = db;