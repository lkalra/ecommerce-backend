const { User } = require('../model/User');

exports.fetchAllUsers = async (req, res) => {
  try {
    const user = await User.find({});
    res.status(200).send({
      success: true,
      message: "All Users List",
      user,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      error,
      message: "Error while getting all Users",
    });
  }
};

exports.fetchUserById = async (req, res) => {
  const { id } = req.params;
  console.log(id)
  try {
    const user = await User.findById(id);
    res.status(200).json(user);
  } catch (err) {
    res.status(400).json(err);
  }
};

exports.updateUser = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await User.findByIdAndUpdate(id, req.body, { new: true });
    res.status(200).json(user);
  } catch (err) {
    res.status(400).json(err);
  }
};