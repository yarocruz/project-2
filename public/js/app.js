var unirest = require("unirest");

function search() {
  const images = [];
  const titles = [];
  const desc = [];
  const itunes = [];
  const RSS = [];
  const links = [];

  var req = unirest(
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
      images.push(resp.image);
      titles.push(resp.title_original);
      desc.push(resp.description_original);
      itunes.push(resp.itunes_id);
      RSS.push(resp.rss);
      links.push(resp.website);
    }
  });
}

search();
