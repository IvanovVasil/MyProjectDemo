// adding hover effect to the images
$(function() {
    $('figure').mouseover(function() {
        $(this).find(".hoverable").show();
      });
      
      $('figure').mouseout(function() {
        $(this).find(".hoverable").hide();
      });
});