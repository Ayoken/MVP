const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

const Schema = mongoose.Schema;

const schema = new Schema(
  {
    name: {
      type: String,
      required: "Enter a pack name",
    },
    description: {
      type: String,
    },
    info: {
      type: String,
    },
    status: {
      type: String,
      enum: ['active', 'disabled'],
      default: 'active',
    },
    items:[{
        type: Schema.Types.ObjectId,
        ref: "Item",
    }],
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

const Customer = mongoose.model("packs", schema);
module.exports = Customer;
