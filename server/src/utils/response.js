'use strict'

const resFailed = (res, code, message, data=null, meta=null) => {
	let statusCode = code || 500;
	let response = {
		code: statusCode,
		message: message || 'Server Error, Try Again!!',
		data
	};
	if(code > 500){
		console.log(meta);
	}
	return res.status(statusCode).json(response);
};

const resSuccess = (res, code, message, data) =>{
	let statusCode = code || 200;
	let response = {
		code: statusCode,
		message: message || 'success',
		// meta: 'success',
		data
	};
	return res.status(statusCode).json(response);
};

module.exports = {
	resFailed,
	resSuccess
};
