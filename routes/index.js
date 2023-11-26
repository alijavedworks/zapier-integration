const express = require("express");
const router = express.Router();

const email_routes = require("./email");

router.get("/", (req, res) => {
  res.send("Hello, this is the root path!");
});

router.use("/email", email_routes);

module.exports = router;
