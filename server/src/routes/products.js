const router = require('express').Router();
const { celebrate } = require('celebrate');

router.get('/', (req, res)=>{
    console.log(req.body);
    return res.status(200).json('success');
});

module.exports = {
	baseUrl: '/products',
	router
};