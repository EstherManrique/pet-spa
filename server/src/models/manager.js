const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Store = require('./store');

const managerSchema = new Schema({
  name: String,
  userName: String,
  password: String,
  storeId: {
    type: Schema.ObjectId,
    ref: "Store",
  }
},
  {
    timestamps: true,
    versionKey: false
  }
);

module.exports = mongoose.model('Manager', managerSchema);