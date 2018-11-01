$(document).ready(function(){
  currClass = "";
  var num_blocks;
  for (num_blocks = 1; num_blocks <= 3; num_blocks++) {
    var elem = document.getElementById("block"+ num_blocks +"text");
    elem.classList.toggle("toggle");
  }


});

function toggleText(clicked_id) {
  // alert(currClass);
  if (currClass != "") {
    var prev_element = document.getElementById(currClass+"text");
    prev_element.classList.toggle("toggle");
  }

  var element = document.getElementById(clicked_id+"text");
  element.classList.toggle("toggle");
  currClass = clicked_id;
}
