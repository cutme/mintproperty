(function(window, document, $, mint, undefined) {
	'use strict';
	
	var LocationMap = mint.LocationMap = function () { };
	
	

	LocationMap.prototype.init = function() {
	
		function initialize() {
			var map, overlay, center,
				container = document.getElementById('locationMap'),
				lat =  $(container).data('lat'),
				lng =  $(container).data('lng'),
				mapStyle = mint.Helper.mapstyle(),
				mapOptions = {
					center: { lat: lat, lng : lng},
					zoom: 17,
					mapTypeControl: false,
					panControl: false,
					streetViewControl: false,
					zoomControl: true,
					scrollwheel: false,
					styles: mapStyle
				};
	
			function calculateCenter() {
				center = map.getCenter();
			}
			
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
						div.style.left = (point.x - 55) + 'px';
						div.style.top = (point.y - 55) + 'px';
						div.style.opacity = 1;
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
						
	        map = new google.maps.Map(container, mapOptions);

			var myLatlng = new google.maps.LatLng(lat, lng);
			
			overlay = new CustomMarker(
				myLatlng, 
				map,
				{
					marker_id: '123'
				}
			);
			
			
			google.maps.event.addDomListener(map, 'idle', function() {
				calculateCenter();
			});
		
			google.maps.event.addDomListener(window, 'resize', function() {
				setTimeout(function() {
					map.setCenter(center);
				}, 1);
			});
	    }
	    
		$.getScript('https://www.google.com/jsapi', function()
		{
			google.load('maps', '3.exp', { 
				other_params: 'key=AIzaSyDzv4gozpcF9CjrI6OWHpLavj2hTLfH4IY', 
				callback: function() {
					google.maps.event.addDomListener(window, "load", initialize);					
				}
			});
		});
	};	
	
	mint.LocationMap = new LocationMap();


}(window, document, jQuery, window.mint = window.mint || {}));
