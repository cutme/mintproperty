(function(window, document, $, mint, undefined) {
	'use strict';
	
	var Accordion = mint.Accordion = function () { };
	
	Accordion.prototype.init = function(el) {
		var trigger = document.querySelector('.js-accNav');
		

		$(el).on('click', '.js-accNav', function(e) {
			e.preventDefault();	
			
			var $$ = $(this),
				nav = $('.js-accNav', el),
				content = $('.js-accContent', el);			
			
			if ($$.hasClass('is-active')) {
				nav.removeClass('is-active');
				content.slideUp();
			} else {
				nav.removeClass('is-active');
				content.slideUp();

				$$.addClass('is-active');
				$$.next(content).slideDown();					
			}
		});		
	};
	
	mint.Accordion = new Accordion();
	

}(window, document, jQuery, window.mint = window.mint || {}));


