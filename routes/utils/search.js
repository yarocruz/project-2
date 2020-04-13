const unirest = require("unirest");
const express = require("express");
const exphbs = require("express-handlebars");
const app = express();

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

function search(value = "") {
  return new Promise((resolve, reject) => {
    const podcasts = [];

    if (value === "") {
      value = "coding";
    }

    const req = unirest(
      "GET",
      `https://listen-api.listennotes.com/api/v2/search?q="${value}"&sort_by_date=0&type=podcast&offset=0&language=English`
    );

    req.headers({
      "x-ListenApi-key": "1ce54c3a84674c4fb7adfb59a5a5b744"
    });

    req.end(res => {
      if (res.error) {
        reject;
        throw new Error(res.error);
      }
      if (res.body.results === undefined) {
        resolve(null);
      } else {
        console.log(res.body.results);
        for (i = 0; i < res.body.results.length; i++) {
          const resp = res.body.results[i];
          let pc = {
            image: resp.image,
            title: resp.title_original,
            description: resp.description_original,
            itunes: resp.itunes_id,
            RSS: resp.rss,
            link: resp.website
          };
          podcasts.push(pc);
        }
        resolve(podcasts);
      }
    });
  });
}

module.exports = { search };
