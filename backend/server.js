const express = require('express')
const app = express();
require('dotenv').config();
const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI).then(()=>{
    app.listen(process.env.PORT,()=>{
        console.log("MongoDB connected successfully Server is running on port:", process.env.PORT );
    })
}).catch((error)=>{console.log(error);})



