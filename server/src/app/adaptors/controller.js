const { resFailed } = require('../../utils/response');

const controller = (controller) => {
	return async (req, res, next) => {
		try{
			await controller(req, res, next);
		}catch(err){
			console.log(err);
			return resFailed(res, null, 'Server Error', 500, err);
		}
	};
};

module.exports = controller;