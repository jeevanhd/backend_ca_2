const express = require("express");
const router = express.Router();

router.post("/login", (req, res) => {
  const { email, password } = req.body;
  try {
    if (email.length == 0) {
      return res.status(400).send({ message: "invalid email", success: false });
    }
    if (password.length == 0) {
      return res.status(400).send({ message: "invalid password", success: false });
    }

    return res
      .status(200)
      .send({ message: "Email and Password verified", success: true });
  } catch (error) {
    return res.status(500).send({ message: "internal server error", success: false });
  }
});

module.exports = router
