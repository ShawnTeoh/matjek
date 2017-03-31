$(document).ready(function(){
  $('.user-intro h4').removeClass('hidden');
  $("#js-rotating").Morphext({
    animation: "flip",
    separator: ",",
    speed: 2000
  });
});