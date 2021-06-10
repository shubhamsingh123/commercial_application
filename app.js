// Server throw a number 
// 200-> ok
// 404-> Not Found
// 401-> Unauthorized
// 500-> Internal Server Error

const express = require('express');

const mongoose = require('mongoose');

const app = express();

mongoose.connect('mongodb://localhost:27017/test', {useNewUrlParser: true, useUnifiedTopology: true }).then(()=>{
	console.log('DB Connected')
})



// port number
const port = 3000;
app.listen(port , ()=>{
	console.log(`The server is running on ${port}`)
})