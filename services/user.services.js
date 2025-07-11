const Users = require("../models/user.model");

const createUser = async (data) => Users.create(data);
const getAllUsers = async () => Users.find();
const getUserById = async (id) => Users.findById(id);
const getUserByEmail = async (email) => Users.findOne({ email });
const updateUser = async (id, updateData) => Users.findByIdAndUpdate(id, updateData, { new: true });
const deleteUser = async (id) => Users.findByIdAndDelete(id);

module.exports = {
  createUser,
  getAllUsers,
  getUserById,
  getUserByEmail,
  updateUser,
  deleteUser,
};