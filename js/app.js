var color = $(".selected").css("background-color")

//when clicking on control list items
$(".controls li").click(function(){
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
  $("#colorSelect").toggle();
});

//When color sliders change
  //update the new colour span

//When add colour is pressed
  //append the colour to the controls ul
  //select the new colour

//on mouse events on the canvas
  //Draw lines
