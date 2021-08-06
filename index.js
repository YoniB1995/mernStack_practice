const express = require('express')
const app = express();
const dotenv = require('dotenv').config();
const bodyparser = require('body-parser')
const cors = require('cors')
const PORT = process.env.PORT

app.use(cors);
app.use(bodyparser);





app.get('/',(req,res)=>{
    res.send('<h1>This is the main page</h1>')
})

app.listen(PORT,()=>{
    console.log(`Logged to http://localhost:${PORT}`)
})