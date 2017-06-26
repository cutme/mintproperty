(function(window, document, $, mint, undefined) {
	'use strict';
	
	var Slider = mint.Sliders = function () { };

	Slider.prototype.init = function() {

		var el = document.getElementById('homeSlider');
		
		$(el).slick({
			autoplay: true,
			autoplaySpeed: 8000,
			dots: true,
			speed: 600,
			prevArrow: '<i class="icon-arrow-2 slick-prev"></i>',
			nextArrow: '<i class="icon-arrow-2 slick-next"></i>'
		});
		
		var bLazy = new Blazy({ 
		    container: '#homeSlider' // Default is window
		});
		
		$(el).on('afterChange', function(event, slick, direction){
			bLazy.revalidate();
		});			
	};
		
	mint.Slider = new Slider();

}(window, document, jQuery, window.mint = window.mint || {}));

