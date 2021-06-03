const router = require('express').Router();
const { celebrate } = require('celebrate');
const controller = require('../app/adaptors/controller');
const PackController = require('../app/controllers/packs.controller');

router.get('/', controller(PackController.fetchAll));
router.get('/:id', controller(PackController.fetchOne))

module.exports = {
	baseUrl: '/packs',
	router
};