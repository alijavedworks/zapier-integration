const express = require("express");
const { AddEmail } = require("../controllers/email_controller");
const router = express.Router();

router.post("/add-email", AddEmail);

module.exports = router;
