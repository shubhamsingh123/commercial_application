// Server throw a number 
// 200-> ok
// 404-> Not Found
// 401-> Unauthorized
// 500-> Internal Server Error

const express = require('express');

const mongoose = require('mongoose');

const app = express();

app.get('/' , (req , res)=> {
	res.send('Creating the server and managing the server');
});

app.get('/about' , (req , res)=>{
	res.send('ABOUT');
});

app.get('/signin' , (req , res)=>{
	res.send('SIGN_IN');
});

app.post('/signup' , (req , res)=>{
	res.send('SIGN_UP');
});

app.put('/signout' , (req , res)=>{
	res.send('SIGN_OUT')
})

// port number
const port = 3000;
app.listen(port , ()=>{
	console.log(`The server is running on ${port}`)
})