exports.getProfile = async (req, res) => {
  console.log(req.user);
  res.json({ user: req.user });
};
