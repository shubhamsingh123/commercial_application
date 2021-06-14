var express = require('express');
var router = express.Router();
const {signOut , signUp} = require('../controllers/auth');


router.post('/signup' , signUp);
router.get('/signout' , signOut);



module.exports = router;