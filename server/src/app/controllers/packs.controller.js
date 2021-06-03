const { resSuccess } = require("../../utils/response");
const models = require("../models");
var limit = 10;
var offset = 0;
var page = 1;

let PackController = {
    fetchAll: async (req, res) => {
        let total = await models.Pack.countDocuments({});
        page = Number(req.query.page) || page;
        limit = Number(req.query.limit) || limit;
        let pages = Math.ceil(total / limit);
        offset = limit * (page - 1) || 0;
        let exculde = "__v";
        const packs = await models.Pack.find({})
        .select(exculde)
        .limit(limit)
        .skip(offset)
        .lean()
        .sort({ createdAt: -1 });
        return resSuccess(res, 200, 'success', { packs, total, pages, page });
    },
    fetchOne: async (req, res) => {
        const packID = req.params.id;
        const pack = await models.Pack.findOne({_id: packID}).lean();
        return resSuccess(res, 200, 'success', pack);
    },
}

module.exports = PackController;