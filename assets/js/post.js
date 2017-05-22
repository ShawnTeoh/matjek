$(document).ready(function(){
  $('figure.highlight').each(function(x, r){
    if ($(r).find('table').length < 1){
      $(r).find('pre').css('padding', '5px');
    }
  });
});