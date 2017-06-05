(function(window, document, $, mint, undefined) {
	'use strict';
	
	var Shortcuts = mint.Shortcutss = function () { };

	Shortcuts.prototype.init = function() {

		var body = document.getElementsByTagName('body'),
			btn_top = $('.c-shortcuts-btn--trigger'),
			shortcuts = document.getElementById('shortcuts'),
			trigger = $('.js-shortcuts-trigger');

		trigger.on('click', function(e) {
			e.preventDefault();
			btn_top.toggleClass('is-fixed');
			
			$(shortcuts).toggleClass('is-visible');			
			$(body).toggleClass('no-scroll');
		});
	};
		
	mint.Shortcuts = new Shortcuts();

}(window, document, jQuery, window.mint = window.mint || {}));

