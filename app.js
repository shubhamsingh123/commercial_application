require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");

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

app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());

const port = process.env.PORT || 3000;
// const port = 3000;

app.listen(port, console.log(`The server is running on ${port}`));
