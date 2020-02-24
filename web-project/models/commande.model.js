const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let CommandeSchema = new Schema({
  date_commande: { type: Date, default: Date.now },
  articles: [{ type: Schema.Types.ObjectId, ref: "Article" }]
});

module.exports = mongoose.model("Commande", CommandeSchema);
