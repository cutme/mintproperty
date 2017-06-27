(function(window, document, $, mint, undefined) {
	'use strict';
	
	var ContactMap = mint.ContactMap = function () { };
	
	

	ContactMap.prototype.init = function() {
		function initialize() {
	
			var map, overlay,
				lat = 50.0559333,
				lng = 19.9592909,
				center;
		
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
						
						/*
google.maps.event.addDomListener(div, "click", function(event) {
							alert('You clicked on a custom marker!');			
							google.maps.event.trigger(self, "click");
						});
*/
						
						var panes = this.getPanes();
						panes.overlayImage.appendChild(div);
					}
					
					var point = this.getProjection().fromLatLngToDivPixel(this.latlng);
					
					if (point) {
						div.style.left = (point.x - 100) + 'px';
						div.style.top = (point.y - 70) + 'px';
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
			
			var mapStyle = mint.Helper.mapstyle();
	
	
			var image = new google.maps.MarkerImage("https://www.roxxmedia.pl/wp-content/themes/roxxit/images/marker.png",
				// This marker is 20 pixels wide by 32 pixels tall.
				null, 
				// The origin for this image is 0,0.
				new google.maps.Point(0,0)
			);
			
			function calculateCenter() {
				center = map.getCenter();
			}
			
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
			},	moved = false;
			
			//set map height
			//$('#map-canvas').height($('.contact .padded').height()+200); //200 paddings
			
	        map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
			
			var myLatlng = new google.maps.LatLng(lat, lng);
			
			google.maps.event.addDomListener(map, 'idle', function() {
				calculateCenter();
			});
		
			google.maps.event.addDomListener(window, 'resize', function() {
				setTimeout(function() {
					map.setCenter(center);

					setTimeout(function() {
						if (( $(window).width() <= 768 ) && (moved === false) ) {
							map.panBy(0, 0);
							moved = true;
						} 
					}, 1000);


				}, 1);
			});
			
			
			if (( $(window).width() <= 768 ) && (moved === false) ) {
				map.panBy(200, -100);
				moved = true;
			}
			
			
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
	};	
	
	mint.ContactMap = new ContactMap();


}(window, document, jQuery, window.mint = window.mint || {}));
