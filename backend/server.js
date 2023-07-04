require('dotenv').config();

const express = require('express')

const mongoose = require('mongoose')

const cors = require('cors')

const routes = require("./routes/UserRoutes")

const app = express()

app.use(express.json())

app.use('/api',routes)

mongoose.connect(process.env.MONGO_URI)
.then(()=>{
    app.listen(process.env.PORT,() =>{
        console.log("DB Connected && Listening port 8000");
    })
})