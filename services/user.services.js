const Users = require("../models/user.model");

export const createUser = async (data) => Users.create(data);
export const getAllUsers = async () => Users.find();
export const getUserById = async (id) => Users.findById(id);
export const getUserByEmail = async (email) => Users.findOne({ email });
export const updateUser = async (id, updateData) => Users.findByIdAndUpdate(id, updateData, { new: true });
export const deleteUser = async (id) => Users.findByIdAndDelete(id);
