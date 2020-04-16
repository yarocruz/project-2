for (i = 0; i < 10; i++) {
  let ind = i;
  $("#" + i).on("click", event => {
    let pcTitle = $("#title" + ind)[0].innerText;
    localStorage.setItem("title", pcTitle);
    console.log(event);
  });
}

$("#pcTitle")[0].innerText = localStorage.getItem("title");

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
