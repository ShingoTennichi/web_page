//  *================ Navbar switch ==================== * //
$('.toggle-button').click(function() {
    $(this).toggleClass('fa-times');
    $('.toggle-menu').toggleClass('active');
});
$(window).scroll(function() {
    $('toggle-menu').removeClass('active');
});


var prev = 0;
var $window = $(window);
var nav = $('.nav');
console.log($window)

// $window.on('scroll', function(){
//     var scrollTop = $window.scrollTop();
//     nav.toggleClass('hidden', scrollTop > prev);
//     prev = scrollTop;
// });