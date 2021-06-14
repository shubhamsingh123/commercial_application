// Server throw a number 
// 200-> ok
// 404-> Not Found
// 401-> Unauthorized
// 500-> Internal Server Error
require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
const cors = require('cors');
const app = express();
const authRoutes = require('./routes/auth');

//DB Connection

mongoose.connect(process.env.DATABASE , {useNewUrlParser: true, useUnifiedTopology: true }).then(()=>{
	console.log('DB Connected')
})

// Middleware

app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());


// My Routes
app.use('/api' , authRoutes)

// Port
const port = process.env.PORT || 3000;

// Starting a server
app.listen(port , ()=>{
	console.log(`The server is running on ${port}`)
})