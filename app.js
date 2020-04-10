const unirest = require("unirest");
const express = require("express");
const exphbs = require("express-handlebars");
const app = express();

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

function search() {
  const podcasts = [];

  const req = unirest(
    "GET",
    "https://listen-api.listennotes.com/api/v2/search?q=coding&sort_by_date=0&type=podcast&offset=0&len_min=10&len_max=30&genre_ids=68%2C82&language=English"
  );

  req.headers({
    "x-ListenApi-key": "1ce54c3a84674c4fb7adfb59a5a5b744"
  });

  req.end(function(res) {
    if (res.error) {
      throw new Error(res.error);
    }
    for (i = 0; i < 10; i++) {
      const resp = res.body.results[i];
      let pc = {
        image: resp.image,
        title: resp.title_original,
        desc: resp.description_original,
        itunes: resp.itunes_id,
        RSS: resp.rss,
        link: resp.website
      };
      podcasts.push(pc);
    }
    app.get("/home", function(req, res) {
      res.render("home", podcasts[0]);
    });
  });
}

search();
