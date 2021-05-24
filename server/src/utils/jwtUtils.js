var jwt =  require('jsonwebtoken');
const models = require('../app/models');
const { config } = require('../config');

module.exports.getToken = async (data) =>{
	// console.log(user)
	var token = jwt.sign(data, config.JWT_SECRET, {
		expiresIn: 86400 // expires in 24 hours
	})
	if(data.owner){
		console.log(data.owner);
		await models.JwtToken.deleteMany({owner: data.owner});
		await models.JwtToken.create({owner:data.owner, token});	
	}
	var data = {
		"token":token,
		"token_type":"jwt",
		"expiresIn":86400
	}
	return data
};


module.exports.decodeToken = async (token) => {
    try{
        const decoded = jwt.verify(token, config.JWT_SECRET);
        return decoded
    }catch(e){
        console.log(e);
        return { error:true, message: e.message}
    }
}