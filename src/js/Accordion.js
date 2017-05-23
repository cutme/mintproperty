(function(window, document, $, mint, undefined) {
	'use strict';
	
	var Accordion = mint.Accordion = function () { };
	
	Accordion.prototype.init = function() {
		var trigger = document.querySelector('.js-accNav');
		

		$(document).on('click', '.js-accNav', function(e) {
			e.preventDefault();	
			
			var $$ = $(this);	
			
			$('.js-accNav').removeClass('is-active');
			$('.c-accordion__content').slideUp(500, function() {
				$$.addClass('is-active');
				$$.next('.c-accordion__content').slideDown();
				
				var target = $$.attr('id');
				mint.Helper.goToTarget(target);
			});			
			
			

		});
		
		
	};
	
	mint.Accordion = new Accordion();
	

}(window, document, jQuery, window.mint = window.mint || {}));


