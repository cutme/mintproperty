(function(window, document, $, mint, undefined) {
	'use strict';
	
	var Menu = mint.Menu = function () { };

	Menu.prototype.init = function() {

		var el = document.getElementById('mobileMenu'),
			body = document.getElementsByTagName('body');
		
		$(el).on('click', function(e) {
			e.preventDefault();

			$(body).toggleClass('mobile-menu no-scroll');
		});
	};
		
	mint.Menu = new Menu();

}(window, document, jQuery, window.mint = window.mint || {}));

