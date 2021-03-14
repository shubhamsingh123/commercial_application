require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");

const app = express();

// Connect to mongoose
mongoose
  .connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => console.log("MONGODB CONNECTED ..."))
  .catch((error) => console.log(error));

const port = process.env.PORT || 3000;

app.listen(port, console.log(`The server is running on ${port}`));
