$(document).ready(function(){
  $('.geopattern').each(function(){
    $(this).geopattern($(this).data('pattern-id'));
  });
});