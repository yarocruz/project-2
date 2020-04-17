// Requiring path to so we can use relative routes to our HTML files
const { search } = require("./utils/search");
const db = require("../models");

module.exports = app => {
  app.get("/", (req, res) => {
    // This route for now is testing the handlebars files\
    search(req.query.searchValue).then(podcasts => {
      res.render("home", { podcasts: podcasts });
    });
  });

  app.get("/collections/:id", (req, res) => {
    // This route for now is testing the handlebars files
    db.Collection.findOne({
      where: {
        id: req.params.id
      },
      include: [db.Podcast]
    }).then(dbCollection => {
      const oneCollection = dbCollection.toJSON();
      res.render("oneCollection", { oneCollection });
    });
  });

  app.get("/collections", (req, res) => {
    // This route for now is testing the handlebars files
    db.Collection.findAll({
      include: [db.User]
    }).then(dbCollections => {
      const collections = dbCollections.map(collection => collection.toJSON());
      //console.log(collections);
      res.render("collections", { collections });
    });
  });

  app.get("/addCollectionForm", (req, res) => {
    // This route for now is testing the handlebars files
    res.render("addCollectionForm");
  });

  app.get("/signin", (req, res) => {
    // This route for now is testing the handlebars files
    res.render("signin");
  });

  app.get("/signup", (req, res) => {
    // This route for now is testing the handlebars files
    res.render("signup");
  });
  // ---------------------------------------------------------------------
};
