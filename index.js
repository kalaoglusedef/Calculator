$(".btn").click(function () {
  var text = $("#conclusion").text();

  text += $(this).data("index");

  $("#conclusion").text(text);
});
