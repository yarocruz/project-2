$("#saveCollection").on("click", event => {
  const collectionData = {
    podcastTitle: $(".title").text(),
    collectionTitle: $("#collection-title").val(),
    review: $("#review").val(),
    rating: $("input:checked").attr("data-value")
  };

  event.preventDefault();
  console.log("You clicked me!");
  console.log(collectionData);
  $.ajax("api/collections", {
    method: "POST",
    data: collectionData
  }).then(() => {
    console.log("Created data");
  });
});
