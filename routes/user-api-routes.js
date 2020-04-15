// *********************************************************************************
// user-api-routes.js - this file offers a set of routes for displaying and saving user data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Requiring our models
const db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {
  // GET route for getting all of the users
  app.get("/api/users", (req, res) => {
    // Here we add an "include" property to our options in our findAll query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.Collection and db.Reviews
    db.User.findAll({
      include: [db.Collection, db.Review]
    }).then(dbUser => res.json(dbUser));
  });

  // Get route for retrieving a single user
  app.get("/api/users/:id", (req, res) => {
    // Here we add an "include" property to our options in our findOne query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.Collection and db.Reviews
    db.User.findOne({
      where: {
        id: req.params.id
      },
      include: [db.Collection, db.Review]
    }).then(dbUser => res.json(dbUser));
  });

  // POST route for saving a new user
  app.post("/api/users", (req, res) => {
    db.User.create(req.body).then(dbUser => res.json(dbUser));
  });

  // DELETE route for deleting users
  app.delete("/api/users/:id", (req, res) => {
    db.User.destroy({
      where: {
        id: req.params.id
      }
    }).then(dbUser => res.json(dbUser));
  });
};
