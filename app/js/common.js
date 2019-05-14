$(document).ready(function() {

	$('.menu__icon').on('click', function() {
		$(this).parent().find('.hamburger').toggle();
    });



});	

$('.slider_container').slick({
	infinite: true,
	slidesToShow: 1,
	slidesToScroll: 1,
	// autoplay: true,
	// autoplaySpeed: 1000,
	// speed: 200,
	swipeToSlide: true
	// asNavFor: '.slider_nav'
});
// $('.slider_nav').slick({
//   slidesToShow: 3,
//   slidesToScroll: 1,
//   asNavFor: '.slider-for',
//   centerMode: true,
//   focusOnSelect: true
// });