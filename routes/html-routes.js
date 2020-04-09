// Requiring AXIOS to make requests to LISTEN NOTES API
const axios = require("axios");
// Requiring path to so we can use relative routes to our HTML files
var path = require("path");

// Requiring our custom middleware for checking if a user is logged in
var isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = app => {
  app.get("/", (req, res) => {
    // If the user already has an account send them to the members page
    if (req.user) {
      res.redirect("/members");
    }
    res.sendFile(path.join(__dirname, "../public/signup.html"));
  });

  // ----------------------------------------------------------------------
  // TEST ROUTES FOR NOW - THIS CAN BE CHANGED LATER WHEN WE START GETTING RID OF AUTH SAMPLE PROJECT
  app.get("/home", (req, res) => {
    axios({
      method: "get",
      url:
        "https://listen-api.listennotes.com/api/v2/best_podcasts?genre_id=107&page=2&region=us&safe_mode=0'",
      headers: { "X-ListenAPI-Key": "1ce54c3a84674c4fb7adfb59a5a5b744" }
    }).then(response => {
      console.log(response.data.podcasts);
      let hbsObject = {
        podcasts: response.data.podcasts
      };
      //console.log(podcasts.results);
      res.render("home", hbsObject);
    });
  });

  app.get("/collections", (req, res) => {
    // This route for now is testing the handlebars files
    res.render("collections");
  });

  app.get("/addCollectionForm", (req, res) => {
    // This route for now is testing the handlebars files
    res.render("addCollectionForm");
  });

  app.get("/oneCollection", (req, res) => {
    // This route for now is testing the handlebars files
    res.render("oneCollection");
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
