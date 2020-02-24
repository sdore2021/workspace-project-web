const Client = require("../models/client.model");

exports.client_create = function(req, res, next) {
  let client = new Client({
    nom_client: req.body.nom_client,
    taux_remise: req.body.taux_remise,
    commande: req.body._id_commande
  });
  client.save(function(err) {
    if (err) {
      return next(err);
    }
    res.send("client created and command succcessfull");
  });
};

exports.client_add_commade = function(req, res, next) {
  Client.findByIdAndUpdate(
    req.params.id,
    { $push: { commande: req.body._id_commande } },
    function(err, post) {
      if (err) res.send(err);
      res.json(post);
    }
  );
};

exports.getClientAll = function(req, res) {
  Client.find(function(err, client) {
    if (err) return next(err);
    res.send(client);
  });
};

exports.getClient = function(req, res) {
  Client.findById(req.params.id, function(err, client) {
    if (err) return next(err);
    res.send(client);
  });
};

exports.deleteClient = function(req, res) {
  Client.findByIdAndDelete(req.params.id, function(err, client) {
    if (err) res.send(err);
    res.json(client);
  });
};
