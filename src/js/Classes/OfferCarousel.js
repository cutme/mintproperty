(function(window, document, $, mint, undefined) {
	'use strict';
	
	var OfferCarousel = mint.OfferCarousels = function () { };

	OfferCarousel.prototype.init = function() {
	
		var el = document.getElementById('offerCarousel');

		$('.slider-for', el).slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			prevArrow: '<i class="icon-arrow-2 slick-prev"></i>',
			nextArrow: '<i class="icon-arrow-2 slick-next"></i>',
			fade: true,
			asNavFor: '.slider-nav'
		});

		$('.slider-nav', el).slick({
			slidesToShow: 3,
			slidesToScroll: 1,
			asNavFor: '.slider-for',
			focusOnSelect: true,
			centerMode: true,
			centerPadding: 0,
			variableWidth: true,
			prevArrow: '<i class="icon-arrow-2 slick-prev"></i>',
			nextArrow: '<i class="icon-arrow-2 slick-next"></i>',
			responsive: [
		    {
		      breakpoint: 569,
		      settings: {
		      	arrows: false,
		      	slidesToShow: 4,
			  	swipeToSlide: true
		      }
		    }
		  ]
		});

		
		var bLazy = new Blazy({ 
		    container: '#offerCarousel' // Default is window
		});
		
		$(el).on('afterChange', function(event, slick, direction) {
			bLazy.revalidate();
		});			
	};
		
	mint.OfferCarousel = new OfferCarousel();

}(window, document, jQuery, window.mint = window.mint || {}));

