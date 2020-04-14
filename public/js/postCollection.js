const collectionData = {
  title: $(".title").value(),
  collectionTitle: $(".collection-title").value(),
  review: $(".review").value()
};

$("#saveCollection").on("click", event => {
  event.preventDefault();
  console.log("You clicked me!");
  $.ajax("api/collections", {
    method: "POST",
    data: collectionData
  }).then(() => {
    console.log("Created data");
  });
});
