const authService = require("./auth.service");

async function register(req, res) {
  try {
    const user = await authService.register(req.body);

    return res.status(201).json(user);
  } catch (error) {
    return res.status(400).json({
      error: error.message
    });
  }
}

async function login(req, res) {
  try {
    const result = await authService.login(req.body);

    return res.status(200).json(result);
  } catch (error) {
    return res.status(401).json({
      error: error.message
    });
  }
}
async function me(req, res) {
  return res.status(200).json({
    user: req.user
  });
}

module.exports = {
  register,
  login,
  me
};