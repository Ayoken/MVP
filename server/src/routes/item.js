const router = require('express').Router();
// const { celebrate } = require('celebrate');
const controller = require('../app/adaptors/controller');
const ItemController = require('../app/controllers/item.controller');

router.get('/', controller(ItemController.fetchAll));
router.get('/:id', controller(ItemController.fetchOne));

module.exports = {
	baseUrl: '/items',
	router
};