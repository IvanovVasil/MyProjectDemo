// adding button to scroll to the top of the page
$(window).scroll(function() {

    if($(this).scrollTop() > 200) {
      $('#toTheTop').show();
    } else {
      $('#toTheTop').hide();
    }
  });
  
  $('#toTheTop').click(function() {
    $('html, body').animate({
      scrollTop: 0}, 'slow');
    });

//adding image tooltip On mousemove
$('span'). mousemove(function(e) {

  let y = e.pageY - this.offsetTop;
  let x = e.pageX - this.offsetLeft;
  $('.bulgaria').css({
    'left' : x + 'px',
    'top' : y + 'px'
  });
});