$(function() {
	// Owl Carousel
	var owl = $(".owl-carousel");
	owl.owlCarousel({
	  items: 3,
	  margin: 10,
	  loop: true,
	  nav: true
	});
 });


$(document).ready(function() {
  $(".menuToggle").click(function() {
    $(this).toggleClass("active");
    $('.menu').slideToggle(300, function(){
      if($(this).css('display') === "none"){
        $(this).removeAttr('style');
      }
    });
  });
});

