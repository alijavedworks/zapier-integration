require("dotenv").config();
const express = require("express");
const routes = require("./routes");
const PORT = process.env.PORT || 8001;
const app = express();
app.use(express.json({ limit: "20mb" }));
app.use("/", routes);
const mongoose = require("./config/mongoose_config");
const conn = mongoose.connect();

app.listen(PORT, () =>
  console.log(`Zapier Integration listening on port ${PORT}`)
);
exports.app = app;
