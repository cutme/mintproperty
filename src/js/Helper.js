(function(window, document, $, mint, undefined) {
	'use strict';

	var Helper = function() {
        return {
        	exist: exist,
        	blazy: blazy,
        	goToTarget: goToTarget,
        	nSelect: nSelect
        };
    };

	function blazy() {

		var bLazy = new Blazy({
			breakpoints: false,	
			success: function(element){
			    setTimeout(function(){					
					var parent = element.parentNode.parentNode;
					parent.className = parent.className.replace(/\bis-hidden\b/,'');
			    }, 200);
	        }
	   });
	}

    function exist(o) {
		return ($(o).length > 0) ? true : false;
	}
	
	function goToTarget(target) {
		var $viewport = $('body, html'), 
			o = $('#'+target).offset().top;		

		$viewport.animate({
			scrollTop: o
		}, {
			easing: 'easeOutCubic',
			duration: 500
		});
	}
	
	function nSelect() {
		$('.nice-select').niceSelect();
	}
	
	mint.Helper = new Helper();

}(window, document, jQuery, window.mint = window.mint || {}));