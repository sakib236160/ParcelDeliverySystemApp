const express = require("express");
const { registerUser, loginUser } = require("../controllers/auth");
const router = express.Router();

// REGISTATION

router.post("/register", registerUser);

// LOGIN IT
router.post("/login", loginUser);

module.exports = router;
