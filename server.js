const express = require("express");
require('dotenv').config();
const {mongoConnection} = require("./db");

const app = express();
const PORT = process.env.PORT;


app.listen(PORT, async()=>{
    await mongoConnection()
    console.log(`server running on port ${PORT}`);
})