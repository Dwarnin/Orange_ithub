$(document).ready(function() {

	$('.menu__icon').on('click', function() {
		$(this).parent().find('.hamburger').toggle();
    });



});	

// $('.slider_container').Slick({
// 	infinite: true,
// 	slidesToShow: 3,
// 	slidesToScroll: 1,
// 	autoplay: true,
// 	autoplaySpeed: 1000,
// 	speed: 200,
// 	dots: true,
// 	swipeToSlide: true
// });