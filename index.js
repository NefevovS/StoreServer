require("dotenv").config()
const express=require('express')
const fileUpload = require('express-fileupload')
const sequelize=require("./db")
const models=require("./models/models")
const cors=require("cors")
const router = require('./routes/index')
const errorHandler = require("./middleware/ErroHandlingMiddleware")
const path=require("path")

const PORT = process.env.PORT || 5000
const app =express();
app.use(cors())
app.use(express.json())
app.use(express.static(path.resolve(__dirname,"static")))
app.use(fileUpload({}))
app.use('/api', router)
//последний  middleware, не добавлять за ним
app.use(errorHandler)



const start=async ()=>{
    try{
        await sequelize.authenticate();
        await sequelize.sync();
        app.listen(PORT,()=>{console.log(`Server started on port ${PORT}`)})
    }
    catch (e){
        console.log(e)
    }

}

start()
