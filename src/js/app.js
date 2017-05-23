
(function(window, document, $, mint, undefined) {
	'use strict';


	$(document).ready(function() {
		
		mint.Helper.exist('.b-lazy') && mint.Helper.blazy();
		
		mint.Helper.exist('#masonry') && masonryInit();
		mint.Helper.exist('.nice-select') && mint.Helper.nSelect();
		mint.Helper.exist('#accordion') && mint.Accordion.init();
		mint.Helper.exist('#gallery') && mint.Magnific.images();
		mint.Helper.exist('#homeSlider') && mint.Slider.init();
		mint.Helper.exist('#shortcuts') && mint.Shortcuts.init();
		//mint.Helper.exist('#form') && mint.Form.init();

	});


		
}(window, document, jQuery, window.mint = window.mint || {}));

