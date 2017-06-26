
(function(window, document, $, mint, undefined) {
	'use strict';


	$(document).ready(function() {
		
		mint.Helper.cookies();
		mint.Helper.fixTop();
		mint.Helper.isMobile();
		mint.Helper.language();
		mint.Menu.init();
		

		if (mint.Helper.exist('#accordion')) mint.Accordion.init('#accordion');
		if (mint.Helper.exist('#contact-map')) mint.ContactMap.init();
		if (mint.Helper.exist('#filters')) mint.Filters.init();
		if (mint.Helper.exist('#homeSlider')) mint.Slider.init();
		if (mint.Helper.exist('#locationMap')) mint.LocationMap.init();
		if (mint.Helper.exist('#masonry')) masonryInit();
		if (mint.Helper.exist('#offerCarousel')) mint.OfferCarousel.init();
		if (mint.Helper.exist('#questionForm')) mint.QuestionForm.init();
		if (mint.Helper.exist('#rentSale')) mint.Switcher.rentSale();
		if (mint.Helper.exist('#shortcuts')) mint.Accordion.init('#shortcuts');		
		if (mint.Helper.exist('#shortcuts')) mint.Shortcuts.init();
		if (mint.Helper.exist('#viewType')) mint.Switcher.viewType();


		if (mint.Helper.exist('.b-lazy')) mint.Helper.blazy();
		if (mint.Helper.exist('.mfp-image')) mint.Magnific.images();
		if (mint.Helper.exist('.mfp-video')) mint.Magnific.video();
		if (mint.Helper.exist('.nice-select')) mint.Helper.nSelect();		
	});


		
}(window, document, jQuery, window.mint = window.mint || {}));

