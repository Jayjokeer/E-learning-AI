const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    firstName: {type: String},
    lastName: {type: String},
    password: {type: String},
    email: {type: String},

},{timestamps: true})

const Users = mongoose.model("Users", UserSchema);
module.exports = Users;