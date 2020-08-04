jQuery(document).ready(function($)  {
    $('.banner_slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: '.thumbnail-slider'
});
    $('.thumbnail-slider').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  asNavFor: '.banner_slider',
  dots: false,
  arrows: true,
  centerMode: true,
  focusOnSelect: true
});
});