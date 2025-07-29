const User = require("../models/User");

// Deleting user

 const deleteUser = async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.status(201).json("The User Has been Deleted");
  } catch (error) {
    res.status(500).json(error);
  }
};

// Get all user

 const getAllUsers = async (req, res) => {
  try {
    const users = await User.find.sort({ createdAt: -1 });
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json(error);
  }
};


module.exports = {getAllUsers,deleteUser}