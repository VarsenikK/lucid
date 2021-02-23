//carousel
// $(document).ready(function(){
// 	$('.owl-carousel').owlCarousel({
// 		 loop:true,
// 		 margin:0,
// 		 nav:true,
// 		 navText: [ '', ' ' ],

// 		 responsive:{
// 			  0:{
// 					items:1
// 			  },

// 			  1000:{
// 					items:1
// 			  }
// 		 }
// 	});
// });

// $(function() {
// 	// Owl Carousel
// 	var owl = $(".owl-carousel");
// 	owl.owlCarousel({
// 	  items: 2,
// 	  margin: 10,
// 	  loop: true,
// 	  nav: true
// 	});
//  });


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

$(document).ready(function(){
$('.owl-carousel').owlCarousel({
loop:true,
margin:0,
nav:true,
navText: [ '', ' ' ],

responsive:{
0:{
items:2
},

1000:{
items:2
}
}
});
});