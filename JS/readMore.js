// hide invisible content
$(document).ready(function() {
    $(".invisible-content").hide();

//
    $(document).on('click', '#readBtn', function(){
        let moreLessButton = $('.invisible-content').is(":visible") ? 'Read More' : 'Read Less';
        $(this).text(moreLessButton);
        $(this).parent('.box').find('.invisible-content').toggle();
        $(this).parent('.box').find('.visible-content').toggle();
    });
});
