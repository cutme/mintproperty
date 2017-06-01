(function(window, document, $, mint, undefined) {
	'use strict';

	var Helper = function() {
        return {
        	cookies: cookies,
        	exist: exist,
        	blazy: blazy,
        	goToTarget: goToTarget,
        	language: language,
        	mapstyle: mapstyle,
        	nSelect: nSelect
        };
    };
    
    function mapstyle() {
    	var mapStyle = [{"featureType":"water","elementType":"geometry.fill","stylers":[{"color":"#d3d3d3"}]},{"featureType":"transit","stylers":[{"color":"#808080"},{"visibility":"off"}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"visibility":"on"},{"color":"#b3b3b3"}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#ffffff"}]},{"featureType":"road.local","elementType":"geometry.fill","stylers":[{"visibility":"on"},{"color":"#ffffff"},{"weight":1.8}]},{"featureType":"road.local","elementType":"geometry.stroke","stylers":[{"color":"#d7d7d7"}]},{"featureType":"poi","elementType":"geometry.fill","stylers":[{"visibility":"on"},{"color":"#ebebeb"}]},{"featureType":"administrative","elementType":"geometry","stylers":[{"color":"#a7a7a7"}]},{"featureType":"road.arterial","elementType":"geometry.fill","stylers":[{"color":"#ffffff"}]},{"featureType":"road.arterial","elementType":"geometry.fill","stylers":[{"color":"#ffffff"}]},{"featureType":"landscape","elementType":"geometry.fill","stylers":[{"visibility":"on"},{"color":"#efefef"}]},{"featureType":"road","elementType":"labels.text.fill","stylers":[{"color":"#696969"}]},{"featureType":"administrative","elementType":"labels.text.fill","stylers":[{"visibility":"on"},{"color":"#737373"}]},{"featureType":"poi","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"poi","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"road.arterial","elementType":"geometry.stroke","stylers":[{"color":"#d6d6d6"}]},{"featureType":"road","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{},{"featureType":"poi","elementType":"geometry.fill","stylers":[{"color":"#dadada"}]}];
	    return mapStyle;
    }

	function blazy() {

		var bLazy = new Blazy({
			breakpoints: false,	
			success: function(element){
			    setTimeout(function(){					
					var parent = element.parentNode.parentNode;
					parent.className = parent.className.replace(/\bis-hidden\b/,'');
					parent.parentNode.className = parent.parentNode.className.replace(/\bis-loading\b/,'');
			    }, 200);
	        }
	   });
	}
	
	function cookies() {

		var el = document.getElementById('cookies'),
			accept = $('.js-accept', el),
			close = $('.js-close', el);
	    
	    if (Cookies.get('mintproperty-cookies') != 1) {
	       $(el).removeClass('move-out');
	    }
	    
	    accept.on('click', function(e){
	        e.preventDefault();
	        Cookies.set("mintproperty-cookies", 1, { expires: 356, path: '/' });
	        $(el).addClass('move-out');
	    });
	    
	    close.on('click', function(e){
	        e.preventDefault();
	        $(el).addClass('move-out');
	    });
	}

    function exist(o) {
		return ($(o).length > 0) ? true : false;
	}
	
	function goToTarget(target, offset) {
		var $viewport = $('body, html'), 
			o = $(target).offset().top,
			offset = offset || 0;		

		$viewport.animate({
			scrollTop: o + offset
		}, {
			easing: 'easeOutCubic',
			duration: 500
		});
	}
	
	function language() {
		$(document).on('change', '#language', function() {
			var url = $('option:selected', '#language').val();
			
			if (url) window.location = url;
		});
	}

	function nSelect() {
		$('.nice-select').niceSelect();
	}
	
	mint.Helper = new Helper();

}(window, document, jQuery, window.mint = window.mint || {}));