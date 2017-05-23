(function(window, document, $, mint, undefined) {
	'use strict';
	
	var Slider = mint.Sliders = function () { };

	Slider.prototype.init = function() {

		var owl = document.getElementById('homeSlider');

		$(owl).owlCarousel({
			autoplay: true,
			autoplayTimeout: 8000,
			items: 1,
			lazyLoad: true,
			loop: true,
			nav: true,
			navText: ['<i class="icon-arrow-2"></i>','<i class="icon-arrow-2"></i>'],
			smartSpeed: 900
		});		
	};
		
	mint.Slider = new Slider();

}(window, document, jQuery, window.mint = window.mint || {}));

