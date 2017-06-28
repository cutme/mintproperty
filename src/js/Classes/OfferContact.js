(function(window, document, $, mint, undefined) {
	'use strict';
	
	var OfferContact = mint.OfferContacts = function () { };

	OfferContact.prototype.init = function() {
	
		var el = document.getElementById('offerContact'),
			offerCarousel = $('.c-offer-carousel'),
			offerContact = $('.c-offer-contact'),
			offerDetails = $('.c-offer-details'),
			obj,
			w = $(window);
		
		function checkAndMove() {
			if (mint.Helper.isWindowSmallerThan(769)) {
				obj = offerContact.detach();
				offerCarousel.after(obj);
			} else {
				obj = offerContact.detach();
				offerDetails.after(obj);
			}
		}

		checkAndMove();
		
		w.on('resize', function() {
			checkAndMove();
		});
	};
		
	mint.OfferContact = new OfferContact();

}(window, document, jQuery, window.mint = window.mint || {}));

