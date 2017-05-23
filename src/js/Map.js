(function(window, document, $, mint, undefined) {
	'use strict';
	

	function initialize() {
	
		var map, overlay,
			lat = 50.0559333,
			lng = 19.9592909;
	
		function CustomMarker(latlng, map, args) {
			this.latlng = latlng;	
			this.args = args;	
			this.setMap(map);	
		}
		
		CustomMarker.prototype = new google.maps.OverlayView();
		
		CustomMarker.prototype.draw = function() {
				
				var self = this;
				
				var div = this.div;
				
				if (!div) {
				
					div = this.div = document.getElementById('pin');
			
					if (typeof(self.args.marker_id) !== 'undefined') {
						div.dataset.marker_id = self.args.marker_id;
					}
					
					google.maps.event.addDomListener(div, "click", function(event) {
						alert('You clicked on a custom marker!');			
						google.maps.event.trigger(self, "click");
					});
					
					var panes = this.getPanes();
					panes.overlayImage.appendChild(div);
				}
				
				var point = this.getProjection().fromLatLngToDivPixel(this.latlng);
				
				if (point) {
					div.style.left = (point.x - 100) + 'px';
					div.style.top = (point.y - 70) + 'px';
				}
			};
		
		CustomMarker.prototype.remove = function() {
				if (this.div) {
					this.div.parentNode.removeChild(this.div);
					this.div = null;
				}	
			};
		
		CustomMarker.prototype.getPosition = function() {
			return this.latlng;	
		};
		
		var mapStyle = [{"featureType":"water","elementType":"geometry.fill","stylers":[{"color":"#d3d3d3"}]},{"featureType":"transit","stylers":[{"color":"#808080"},{"visibility":"off"}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"visibility":"on"},{"color":"#b3b3b3"}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#ffffff"}]},{"featureType":"road.local","elementType":"geometry.fill","stylers":[{"visibility":"on"},{"color":"#ffffff"},{"weight":1.8}]},{"featureType":"road.local","elementType":"geometry.stroke","stylers":[{"color":"#d7d7d7"}]},{"featureType":"poi","elementType":"geometry.fill","stylers":[{"visibility":"on"},{"color":"#ebebeb"}]},{"featureType":"administrative","elementType":"geometry","stylers":[{"color":"#a7a7a7"}]},{"featureType":"road.arterial","elementType":"geometry.fill","stylers":[{"color":"#ffffff"}]},{"featureType":"road.arterial","elementType":"geometry.fill","stylers":[{"color":"#ffffff"}]},{"featureType":"landscape","elementType":"geometry.fill","stylers":[{"visibility":"on"},{"color":"#efefef"}]},{"featureType":"road","elementType":"labels.text.fill","stylers":[{"color":"#696969"}]},{"featureType":"administrative","elementType":"labels.text.fill","stylers":[{"visibility":"on"},{"color":"#737373"}]},{"featureType":"poi","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"poi","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"road.arterial","elementType":"geometry.stroke","stylers":[{"color":"#d6d6d6"}]},{"featureType":"road","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{},{"featureType":"poi","elementType":"geometry.fill","stylers":[{"color":"#dadada"}]}];


		var image = new google.maps.MarkerImage("https://www.roxxmedia.pl/wp-content/themes/roxxit/images/marker.png",
			// This marker is 20 pixels wide by 32 pixels tall.
			null, 
			// The origin for this image is 0,0.
			new google.maps.Point(0,0)
		);
		
		function mapPosition() {
			map.panBy(-200, 0);
		}
		
		
        var mapOptions = {
			center: { lat: lat, lng : lng},
			zoom: 17,
			mapTypeControl: false,
			panControl: false,
			streetViewControl: false,
			zoomControl: true,
			scrollwheel: false,
			styles: mapStyle
		};
		
		//set map height
		//$('#map-canvas').height($('.contact .padded').height()+200); //200 paddings
		
        map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
		
		var myLatlng = new google.maps.LatLng(lat, lng);
		
		/*
var marker = new google.maps.Marker({
			icon: image,
			map: map,
			position: myLatlng
		});
*/
		
		mapPosition();
		
		overlay = new CustomMarker(
			myLatlng, 
			map,
			{
				marker_id: '123'
			}
		);
    }


	$.getScript('https://www.google.com/jsapi', function()
	{
		google.load('maps', '3.exp', { 
			other_params: 'key=AIzaSyDzv4gozpcF9CjrI6OWHpLavj2hTLfH4IY', 
			callback: function() {						
				initialize();
			}
		});
	});
	

	
	//if(jQuery(window).width() > 922) {
    
	//}
	
	
	

}(window, document, jQuery, window.mint = window.mint || {}));
