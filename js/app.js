var color = $(".selected").css("background-color")

//when clicking on control list items
$(".controls").on("click", "li", function(){
  //Deselct sibling elements
  $(this).siblings().removeClass("selected");
  //Select clicked element
  $(this).addClass("selected");
  //cach current color
  color = $(".selected").css("background-color")
});

//When new color button is pressed
$("#revealColorSelect").click(function(){
  //Show color Select or hide color Select
  changeColor();
  $("#colorSelect").toggle();
});

//update the new colour span
function changeColor() {
  var r = $("#red").val();
  var g = $("#green").val();
  var b = $("#blue").val();
  $("#newColor").css("background-color", "rgb(" + r + "," + g + "," + b + ")");
};

//When color sliders change
$("input[type=range]").on("input", changeColor);

//When add colour is pressed
$("#addNewColor").click(function() {
  var $newColor = $("<li></li>");
  $newColor.css("background-color", $("#newColor").css("background-color"));
  //append the colour to the controls ul
  $(".controls ul").append($newColor);
  //select the new colour
  $newColor.click();
});

//on mouse events on the canvas
$("canvas")[0]
  //Draw lines
