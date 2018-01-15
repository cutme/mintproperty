(function(window, document, $, mint, undefined) {
	'use strict';
	
	var Switcher = mint.Switcher = function () { };

	Switcher.prototype.rentSale = function() {

		var el = document.getElementById('rentSale'),
			btn = $('.js-btn', el),
			body = document.getElementsByTagName('body'),
			filters = document.getElementById('filters');
		
		// Set type of filter
		
		function changeType() {
			var target = '';

			if (window.location.hash) {
				target = window.location.hash;
			} else {
				target = '#rent';
			}

			$(body).removeClass('type-rent type-sale').addClass( 'type-' + target.substring(1, target.length) );
			$(filters).addClass('is-visible');
			$(el).addClass('is-visible');
		}
		
		if (window.location.hash) {
			$(window).on('hashchange', function() {
				changeType();
			});
		}

		btn.on('click', function(e) {
			e.preventDefault();
			
			var $$ = $(this),
				target = $$.data('type');			
			
			if (window.location.hash) {
				window.location.hash = target;
				changeType();

			} else {
				//alert(target);
				$(body).removeClass('type-rent type-sale').addClass( 'type-' + target );
			}

			
		});
		
		changeType();
	};

	Switcher.prototype.viewType = function() {

		var el = document.getElementById('viewType'),
			btn = $('.js-btn', el),
			results = document.getElementById('results');

		btn.on('click', function(e) {
			e.preventDefault();

			var $$ = $(this),
				target = $$.data('type');

			btn.removeClass('is-active');
			$$.addClass('is-active');

			$('.js-view', results).removeClass('is-active');

			$('#'+target).addClass('is-active');

			if (target === 'mapHolder') {
				mint.MapMarkers.init();
			}

		});
	};
		
	mint.Switcher = new Switcher();

}(window, document, jQuery, window.mint = window.mint || {}));

