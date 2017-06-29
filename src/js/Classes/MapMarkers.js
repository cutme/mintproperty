(function(window, document, $, mint, undefined) {
	'use strict';
	

	var MapMarkers = mint.MapMarkers = function (el) { };

	var container = document.getElementById('map'),
		markers = [],
		map, 
		initialized = false,
		lat =  51.5402644, 
		lng =  19.4280405,
		locations = [],
		markerHeight = $(container).data('marker-height'),
		markerWidth = $(container).data('marker-width'),
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
		},
		rwd = $(container).data('rwd'),
		bounds;

	function openUrl() {	
		window.location.href = this.url;
		/*
var obj = {
		    f: function() {
		        this.prop = 'url';
		        g.bind( this )();
		    }
		};
		
		function g() {
		    alert( this.prop );
		}
		
		g.call(this);
*/
	}
	
	function deleteMarkers(_map) {
		for (var i = 0; i < markers.length; i++) {
			markers[i].setMap(_map);
		}
	}

	MapMarkers.prototype.addMarkers = function() {

		bounds = new google.maps.LatLngBounds();		

		for (var i = 0; i < locations.length; i++) {
	
			var location = locations[i],
				position = new google.maps.LatLng(location[0], location[1]),
				image = {
					url: $(container).data('marker'),
					size: new google.maps.Size(markerWidth, markerHeight),
					scaledSize: new google.maps.Size(markerWidth, markerHeight),
					origin: new google.maps.Point(0, 0),
					anchor: new google.maps.Point(markerWidth/2, markerHeight),
					labelOrigin: new google.maps.Point(0, markerHeight)
				},
				marker = new google.maps.Marker({
					position: position,
					map: map,
					draggable: false,
					zIndex: 20,
					icon: image,
					url: location[2]					
				});
				
			bounds.extend(position);

			
			// zmniejszamy przybliżenie
		var minDistance = 0.00098,
			sumA = bounds.getNorthEast().lng() - bounds.getSouthWest().lng(),
			sumB = bounds.getNorthEast().lat() - bounds.getSouthWest().lat();
		if ((sumA < minDistance && sumA > -minDistance) && (sumB < minDistance && sumB > -minDistance)) {
			var extendPoint1 = new google.maps.LatLng(bounds.getNorthEast().lat() + minDistance, bounds.getNorthEast().lng() + minDistance),
				extendPoint2 = new google.maps.LatLng(bounds.getNorthEast().lat() - minDistance, bounds.getNorthEast().lng() - minDistance);
			bounds.extend(extendPoint1);
			bounds.extend(extendPoint2);
		}
			// link to marker
			google.maps.event.addListener(marker, "click", openUrl);
		}
		
		


		// center map to markers 
		map.fitBounds(bounds);
		markers.push(marker);
	};

	MapMarkers.prototype.getLocations = function() {

		var location = $('.js-location');

		location.each(function() {
			
			var $$ = $(this),
				lat = $$.data('lat'),
				lng = $$.data('lng'),
				url = $$.data('url');				

			locations.push([lat, lng, url]);
		});	
		
		deleteMarkers(map);
		mint.MapMarkers.addMarkers();
			
	};

	MapMarkers.prototype.init = function() {
	
		function initialize() {
		
			var center,
				myLatlng = new google.maps.LatLng(lat, lng);
		
	        map = new google.maps.Map(container, mapOptions);
			
			
			MapMarkers.prototype.getLocations(map);
			
			initialized = true;
			


			function calculateCenter() {
				center = map.getCenter();
			}
	
			google.maps.event.addDomListener(map, 'idle', function() {
				calculateCenter();
			});
		
			google.maps.event.addDomListener(window, 'resize', function() {
				setTimeout(function() {
					map.setCenter(center);

					if ( rwd === 1) {
						deleteMarkers(null);
						markers = [];
						mint.MapMarkers.addMarkers();
					}
				}, 1);
			});
	    }

		if (initialized === false) {
			
		    
			$.getScript('https://www.google.com/jsapi', function()
			{
				google.load('maps', '3.exp', { 
					other_params: 'key=AIzaSyDzv4gozpcF9CjrI6OWHpLavj2hTLfH4IY', 
					callback: function() {
						initialize();
						//google.maps.event.addDomListener(window, "load", initialize);					
					}
				});
			});
		} else {
			MapMarkers.prototype.getLocations(map);
		}
	};	
	
	mint.MapMarkers = new MapMarkers();



}(window, document, jQuery, window.mint = window.mint || {}));
