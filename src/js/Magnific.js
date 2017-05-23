(function(window, document, $, mint, undefined) {
	'use strict';

	var Magnific = mint.Magnific = function () { };

	Magnific.prototype.images = function() {

		$('.mfp-image').magnificPopup({
			gallery: {
				enabled: true,
				tPrev: 'Previous (Left arrow key)',
				tNext: 'Next (Right arrow key)',
				tCounter: '',
				arrowMarkup: '<span class="mfp-arrow mfp-arrow-%dir%"></span>'
			},
			
			image: {
				tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
				titleSrc: function(item) {
					var title = item.el.find('.c-Magnific__title').text();
					return title;
			},
			
			markup: '<div class="mfp-figure">'+
			            '<div class="mfp-close"></div>'+
			            '<div class="mfp-img"></div>'+
			          '</div>'
			},
			
			closeBtnInside: false,
			closeMarkup: '<button title="%title%" type="button" class="mfp-close icon-close"></button>',
			delegate: '',
			type: 'image',
			fixedContentPos: true,
			
			mainClass: 'mfp-with-zoom mfp-img-mobile',
			zoom: {
				enabled: true,
				duration: 300,
				opener: function(element) {
					return element.find('img');
				}
			}
		});
	};
	
	mint.Magnific = new Magnific();

}(window, document, jQuery, window.mint = window.mint || {}));