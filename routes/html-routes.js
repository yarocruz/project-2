// Requiring path to so we can use relative routes to our HTML files
const path = require("path");
const { search } = require("./utils/search");

const axios = require("axios");

// Requiring our custom middleware for checking if a user is logged in
const isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = app => {
  app.get("/", (req, res) => {
    // This route for now is testing the handlebars files\
    search(req.query.searchValue).then(podcasts => {
      res.render("home", { podcasts: podcasts });
    });
  });

  app.get("/collections", (req, res) => {
    // This route for now is testing the handlebars files
    axios
      .get("http://localhost:8080/api/collections")
      .then(response => {
        //console.log(response.data);
        const result = response.data.map(collection => {
          return collection;
        });
        res.render("collections", { collection: result });
      })
      .catch(error => {
        // handle error
        console.log(error);
      });
  });

  app.get("/addCollectionForm", (req, res) => {
    // This route for now is testing the handlebars files
    res.render("addCollectionForm");
  });

  app.get("/oneCollection", (req, res) => {
    // This route for now is testing the handlebars files
    res.render("oneCollection");
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
  app.get("/login", (req, res) => {
    // If the user already has an account send them to the members page
    if (req.user) {
      res.redirect("/members");
    }
    res.sendFile(path.join(__dirname, "../public/login.html"));
  });

  // Here we've add our isAuthenticated middleware to this route.
  // If a user who is not logged in tries to access this route they will be redirected to the signup page
  app.get("/members", isAuthenticated, (req, res) => {
    res.sendFile(path.join(__dirname, "../public/members.html"));
  });
};
