const express = require("express");
const mongoose = require("mongoose")
require('dotenv').config();
const cors = require("cors")

const route = require("./routes/routes")

const PORT = process.env.PORT || 5050
const app = express();
app.use(express.json());
app.use(cors())

app.use("/api/",route)



mongoose.connect(process.env.MONGODB_URL)
.then(()=>{
    console.log("db is successfully installed");
    app.listen(PORT,()=>{
        console.log(`server is runing at http://localhost:5050`)
    })
})
.catch(e=>{
    console.log(`Db ERROR ${e.message}`)
})

