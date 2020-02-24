const Depot = require("../models/depot.model");

exports.create_depot = function(req, res, next) {
  let depot = new Depot({
    nomDepot: req.body.nomDepot,
    articles: req.body._id_article,
    qtl: req.body.qtl
  });

  depot.save(function(err) {
    if (err) {
      return next(err);
    }
    res.send("depot was create and succcessfull");
  });
};

exports.article_add_depot = function(req, res, next) {
  Depot.findByIdAndUpdate(
    req.params.id,
    { $push: { articles: req.body._id_article } },
    function(err, post) {
      if (err) res.send(err);
      res.json(post);
    }
  );
};
