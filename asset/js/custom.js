//Tranding Slider
$( document ).ready(function() {
    var swiper = new Swiper(".client-slider", {
      slidesPerView: 8,
      spaceBetween: 20,
	  loop: true,
	  autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
	  breakpoints: {
		// when window width is >= 320px
		320: {
		  slidesPerView: 3,
		  spaceBetween: 10,
		},
		// when window width is >= 480px
		640: {
		  slidesPerView: 2,
		},
		// when window width is >= 640px
		1140: {
		  slidesPerView: 8,
		}
	  }
    });
	
	$('a#bar').on('click', function(){
		$('.top-right ul').addClass('show');
	});
	$('#close').on('click', function(){
		$('.top-right ul').removeClass('show');
	});
	
	

});