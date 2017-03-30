$(document).ready(function(){
  $('.geopattern').each(function(){
    $(this).geopattern($(this).data('pattern-id'));
  });
});

function toggleForked(){
  if ($('.fork-switch').prop('checked')) {
    $('#forked').removeClass('hidden');
  } else {
    $('#forked').addClass('hidden');
  }
}