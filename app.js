const express = require("express");
const mongoose = require("mongoose");

const app = express();

// map global promise - get rid of warning
mongoose.Promise = global.Promise;

// Connect to mongoose
mongoose
  .connect("mongodb://localhost/vidjot-dev", {
    useMongoClient: true,
  })
  .then(() => console.log("mongodb connect ..."))
  .catch((error) => console.log(error));

const port = 3000;

app.listen(port, console.log(`The server is running on ${port}`));
