function setText(param) {
  var text = $("#conclusion").text();
  text += param;
  $("#conclusion").text(text);
}
function sonucbul() {
  var conclusionText = $("#conclusion").text();
  var sonuc = eval(conclusionText);
  $("#conclusion").text(sonuc);
}
function dele() {
  $("#conclusion").empty();
}

function dlt() {
  var text = $("#conclusion").text();
  var sliceText = text.slice(0, -1);
  $("#conclusion").text(sliceText);
}

$(".btn").click(function () {
  setText($(this).data("index"));
});
$("#allDelete").click(function () {
  dele();
});

$("#delete").click(function () {
  dlt();
});

$("#equals").click(function () {
  sonucbul();
});

$(document).keyup(function (event) {
  if (event.keyCode === 96 || event.keyCode === 48) {
    setText("0");
  }
  if (event.keyCode === 97 || event.keyCode === 49) {
    setText("1");
  }
  if (event.keyCode === 98 || event.keyCode === 50) {
    setText("2");
  }
  if (event.keyCode === 99 || event.keyCode === 51) {
    setText("3");
  }
  if (event.keyCode === 100 || event.keyCode === 52) {
    setText("4");
  }
  if (event.keyCode === 101) {
    setText("5");
  }
  if (event.keyCode === 102 || event.keyCode === 54) {
    setText("6");
  }
  if (event.keyCode === 103 || event.keyCode === 55) {
    setText("7");
  }
  if (event.keyCode === 104 || event.keyCode === 56) {
    setText("8");
  }
  if (event.keyCode === 105 || event.keyCode === 57) {
    setText("9");
  }
  if (event.keyCode === 111) {
    setText("/");
  }
  if (event.keyCode === 106) {
    setText("*");
  }
  if (event.keyCode === 107) {
    setText("+");
  }
  if (event.keyCode === 109) {
    setText("-");
  }
  if (event.keyCode === 53) {
    setText("%");
  }
  if (event.keyCode === 190) {
    setText(".");
  }
  if (event.keyCode === 13) {
    sonucbul();
  }
  if (event.keyCode === 46) {
    dele();
  }
  if (event.keyCode === 8) {
    dlt();
  }
});
