const mongoose = require("mongoose");
const MONGO_URI= process.env.MONGO_URI;

function mongoConnection (){ 
     mongoose.connect(MONGO_URI).then(console.log("DB connected"))
    };


module.exports = {
    mongoConnection
}