(function(window, document, $, mint, undefined) {
	'use strict';
	
	var Accordion = mint.Accordion = function () { };
	
	Accordion.prototype.init = function() {
		var trigger = document.querySelector('.js-accNav');
		

		$(document).on('click', '.js-accNav', function(e) {
			e.preventDefault();	
			
			var $$ = $(this);
			
			if ($$.hasClass('is-active')) {
				$('.js-accNav').removeClass('is-active');
				$('.c-accordion__content').slideUp();
			} else {
				$('.js-accNav').removeClass('is-active');
				$('.c-accordion__content').slideUp();
					$$.addClass('is-active');
					$$.next('.c-accordion__content').slideDown();
					
					//var target = '#'+$$.attr('id');
					//mint.Helper.goToTarget(target);

			}
			
					
			
			

		});
		
		
	};
	
	mint.Accordion = new Accordion();
	

}(window, document, jQuery, window.mint = window.mint || {}));


