exports.signUp = (req , res) =>{
	res.json({
		message : "signUp works !!!"
	})
};

exports.signOut = (req , res) => {
	res.send({
		message : 'User SignOut'
	});
};
