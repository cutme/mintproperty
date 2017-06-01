window.paceOptions = {
  elements: {
    selectors: ['img']
  }
};

(function(window, document, $, mint, undefined) {
	'use strict';


	$(document).ready(function() {
		
		mint.Helper.cookies();
		mint.Helper.language();
		mint.Helper.exist('.b-lazy') && mint.Helper.blazy();

		
		mint.Helper.exist('#contact-map') && mint.ContactMap.init();
		mint.Helper.exist('#filters') && mint.Filters.init();
		mint.Helper.exist('#locationMap') && mint.LocationMap.init();
		mint.Helper.exist('#masonry') && masonryInit();
		mint.Helper.exist('#accordion') && mint.Accordion.init();
		
		
		mint.Helper.exist('#homeSlider') && mint.Slider.init();
		mint.Helper.exist('#offerCarousel') && mint.OfferCarousel.init();
		//mint.Helper.exist('#offersOnMap') && mint.OffersOnMap.init();
		mint.Helper.exist('#questionForm') && mint.QuestionForm.init();
		mint.Helper.exist('#shortcuts') && mint.Shortcuts.init();
		
		
		
		mint.Helper.exist('.mfp-image') && mint.Magnific.images();
		mint.Helper.exist('.mfp-video') && mint.Magnific.video();
		
		mint.Helper.exist('.nice-select') && mint.Helper.nSelect();
		mint.Helper.exist('#rentSale') && mint.Switcher.rentSale();
		mint.Helper.exist('#viewType') && mint.Switcher.viewType();
	});


		
}(window, document, jQuery, window.mint = window.mint || {}));

