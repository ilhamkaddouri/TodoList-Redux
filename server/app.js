const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
require('dotenv').config()

const app = express()

const todoRouter = require('./routes/todo')
app.use(cors())
app.use(express.json())
app.use('/todos', todoRouter)

const DB = process.env.DATABASE.replace(
    '<password>',
    process.env.DATABASE_PASSWORD
  );

mongoose.connect(DB,{
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(()=> console.log('connection')).catch((err)=>console.log(err))


app.listen(5000,()=>{
    console.log('lol todolist app')
})