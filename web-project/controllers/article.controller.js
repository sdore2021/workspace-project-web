const Article = require("../models/article.model");

exports.article_create = function(req, res, next) {
  let article = new Article({
    prix_HT: req.body.prix_HT,
    qts: req.body.qts,
    taux_tva: req.body.taux_tva
  });

  article.save(function(err) {
    if (err) {
      return next(err);
    }
    res.send("article was created and save in database");
  });
};

exports.getArticleAll = function(req, res) {
  Article.find(function(err, article) {
    if (err) return next(err);
    res.send(article);
  });
};

exports.getArticle = function(req, res) {
  Article.findById(req.params.id, function(err, article) {
    if (err) return next(err);
    res.send(article);
  });
};

exports.deleteArticle = function(req, res) {
  Article.findByIdAndDelete(req.params.id, function(err, article) {
    if (err) res.send(err);
    res.json(article);
  });
};
