const User = require("../models/user");

exports.signup = (req, res) => {
  const user = new User(req.body);
  user.save((err, user) => {
    if (err) {
      return res.status(400).json({
        err: "NOT ABLE TO SAVE USER IN DB",
      });
    } else {
      res.json({
        name: user.name,
        email: user.email,
        id: user._id,
      });
    }
  });
};

exports.signout = (req, res) => {
  // res.send("user signout");
  res.json({
    message: "User signout",
  });
};
