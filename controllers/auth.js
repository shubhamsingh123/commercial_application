exports.signUp = (req , res) =>{
	console.log("REQ BODY" , req.body);
	res.json({
		message : "signUp works !!!"
	})
};

exports.signOut = (req , res) => {
	res.send({
		message : 'User SignOut'
	});
};
