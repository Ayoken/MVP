const { resSuccess } = require("../../utils/response");
const models = require("../models");
var limit = 10;
var offset = 0;
var page = 1;

let ItemController = {
    fetchAll: async (req, res) => {
        let total = await models.Item.countDocuments({});
        page = Number(req.query.page) || page;
        limit = Number(req.query.limit) || limit;
        let pages = Math.ceil(total / limit);
        offset = limit * (page - 1) || 0;
        let exculde = "__v";
        const items = await models.Item.find({})
        .select(exculde)
        .limit(limit)
        .skip(offset)
        .lean()
        .sort({ createdAt: -1 });
        return resSuccess(res, 200, 'success', items);
    },
    fetchOne: async (req, res) => {
        const itemID = req.params.id;
        const item = await models.Item.findOne({_id: itemID}).lean();
        return resSuccess(res, 200, 'success', item);
    },
}

module.exports = ItemController;