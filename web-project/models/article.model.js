const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let ArticleSchema = new Schema({
  prix_HT: { type: Number, required: true },
  taux_tva: Schema.Types.ObjectId,
  qts: Number //quandtite de stock
});

module.exports = mongoose.model("Article", ArticleSchema);
