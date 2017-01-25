$(document).ready(function(){
    $('.store-hide').hide();
    $('.social-hide').hide();
    $('#store-toggle').on('click', function(){
        $('.store-hide').slideToggle();
    });
    $('#social-toggle').on('click', function(){
        $('.social-hide').slideToggle('left');
    });
});
