(function(window, document, $, mint, undefined) {
	'use strict';

	var Helper = function() {
        return {
        	cookies: cookies,
        	exist: exist,
        	blazy: blazy,
        	fixTop: fixTop,
        	goToTarget: goToTarget,
        	iosFix: iosFix,
        	isMobile: isMobile,
        	isWindowSmallerThan: isWindowSmallerThan,
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
	    	setTimeout(function() {
				$(el).removeClass('move-out');
	    	}, 2000);
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
    
    function fixTop() {
		var topbar = $('.c-top'),
			pos = topbar.position(), 
			b = document.getElementsByTagName('body'),
			c = $('.c-container');

		$(window).on('scroll', function() {
		
			if ($(b).scrollTop() >= pos.top + 40) { 
				topbar.addClass('stay');
				$(c).addClass('padding-top');
			} else {
				topbar.removeClass('stay');
				$(c).removeClass('padding-top');
			}
		});
	}
	
	function goToTarget(target, offset) {
		var $viewport = $('body, html'), 
			o = $(target).offset().top;
			
		//offset = offset || 0;		

		$viewport.animate({
			scrollTop: o + offset
		}, {
			easing: 'easeOutCubic',
			duration: 500
		});
	}
	
	function iosFix() {

		var documentHeight = document.body.scrollHeight,
			windowHeight = window.innerHeight,
			container  = $('.ios-height');	
	
		function documentHigherThanWindow() {
			documentHeight = document.body.scrollHeight;
			windowHeight = window.innerHeight;
	
			return documentHeight <= windowHeight;
		}
		
		function setFullHeight() {
			container.height(windowHeight);
		}

		if (navigator.userAgent.match(/(iPhone|iPod|iPad)/i)) {		

			
			if (documentHigherThanWindow()) setFullHeight();
			
			window.addEventListener("orientationchange", function() {
				
				//document.documentElement.innerHTML = document.documentElement.innerHTML;
				container.attr('style', '');

					if (documentHigherThanWindow()) setFullHeight();

			
			}, false);

		} else {
			$('html').addClass('set-min-height');
		}

	}
	
	function isMobile() {
		if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4))) {
			$('html').addClass('mobile');
		} else {
			$('html').addClass('desktop');
		}
	}
	
	function isWindowSmallerThan(resBorder) {
        return window.innerWidth < parseInt(resBorder, 10);
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