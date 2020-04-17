// *********************************************************************************
// collection-api-routes.js - this file offers a set of routes for displaying and saving collection data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Requiring our models
var db = require("../models");

// Routes
// =============================================================
module.exports = app => {
  // GET route for getting all of the collections
  app.get("/api/collections", (req, res) => {
    db.Collection.findAll({
      include: [db.Podcast]
    }).then(dbCollection => res.json(dbCollection));
  });

  // Get route for retrieving a single collection
  app.get("/api/collections/:id", (req, res) => {
    db.Collection.findOne({
      where: {
        id: req.params.id
      }
    }).then(dbCollection => res.json(dbCollection));
  });

  // POST route for saving a new collection
  app.post("/api/collections", (req, res) => {
    db.Collection.create(req.body).then(dbCollection => res.json(dbCollection));
  });
  app.post("/api/podcast", (req, res) => {
    db.Podcast.create(req.body).then(dbPodcast => res.json(dbPodcast));
  });

  // DELETE route for deleting a collection
  app.delete("/api/collections/:id", (req, res) => {
    db.Collection.destroy({
      where: {
        id: req.params.id
      }
    }).then(dbCollection => res.json(dbCollection));
  });
};
