exports.signup = (req, res) => {
  res.json({
    message: "signup routes works",
  });
};

exports.signout = (req, res) => {
  // res.send("user signout");
  res.json({
    message: "User signout",
  });
};
