const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

const Schema = mongoose.Schema;

const schema = new Schema(
  {
    name: {
      type: String,
      required: "Enter an Item name",
    },
    description: {
      type: String,
    },
    info: {
      type: String,
    },
    nftKey:{
        type:String
    },
    counts:{
        type: Number,
        default: 10
    },
    status: {
      type: String,
      enum: ['active', 'disabled'],
      default: 'active',
    },
    price: {
      type: 'Decimal',
      default: '0',
    },
    coverImg: {
      type: String,
      allowNull: true,
    },
    shortImg:{
        type: String,
        allowNull: true
    },
    deletedAt:{
        type: Date,
        default: null
    }
  },
  {
    timestamps: true,
  }
);
schema.plugin(uniqueValidator);

const Customer = mongoose.model("items", schema);
module.exports = Customer;
