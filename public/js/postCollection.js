$("#saveCollection").on("click", event => {
  const collectionData = {
    collectionTitle: $("#collection-title").val(),
    UserId: $("span").attr("data-value")
  };

  event.preventDefault();
  console.log("You clicked me!");
  console.log(collectionData);

  $.ajax("api/collections", {
    method: "POST",
    data: collectionData
  }).then(({ id: CollectionId }) => {
    console.log("Created collection data");
    const podcastData = {
      podcastTitle: $(".title").text(),
      review: $("#review").val(),
      rating: $("input:checked").attr("data-value"),
      CollectionId
    };
    $.ajax("api/podcast", {
      method: "POST",
      data: podcastData
    }).then(() => {
      console.log("Created podcast data");
    });
  });
});
