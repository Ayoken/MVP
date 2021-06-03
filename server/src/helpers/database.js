/* eslint-disable no-undef */
const mongoose = require('mongoose');
const configs = require('../config');
const mongoUrl = configs.MONGOURL;

const load = async() => {
	try{
		// mongoose.set('debug', true);
		await mongoose.connect(mongoUrl, {
			useNewUrlParser: true,
			useCreateIndex: true, 
			useUnifiedTopology:true,
			useFindAndModify:false
		}).then(() => {
			console.log('Server Database Connected');
		});
	}
	catch(err){
		// Promise.reject(err);
		console.log(err);
		return process.exit();
	}
};
module.exports.load = load;