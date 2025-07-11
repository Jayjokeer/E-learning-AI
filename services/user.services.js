const Users = require("../models/user.model");

export const createUser = async(data)=>{
    return Users.create(data);
}