(function(window, document, $, mint, undefined) {
	'use strict';
	
	var Menu = mint.Menu = function () { };

	Menu.prototype.init = function() {

		var el = document.getElementById('mobileMenu'),
			body = document.getElementsByTagName('body'),
			pagePos;
		
		$(el).on('click', function(e) {
			e.preventDefault();

			if ($('.mobile-menu').length === 0 ) pagePos = $('body').scrollTop();

			$(body).toggleClass('mobile-menu no-scroll');

			if ($('.mobile-menu').length === 0 ) $(body).scrollTop(pagePos);
		});
	};
		
	mint.Menu = new Menu();

}(window, document, jQuery, window.mint = window.mint || {}));

