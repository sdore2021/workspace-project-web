const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let DepotSchema = new Schema({
  nomDepot: String,
  articles: [{ type: Schema.Types.ObjectId, ref: "Article" }],
  qtl: Number
});

module.exports = mongoose.model("Depot", DepotSchema);
