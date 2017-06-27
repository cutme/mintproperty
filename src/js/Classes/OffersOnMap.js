(function(window, document, $, mint, undefined) {
	'use strict';
	
	var OffersOnMap = mint.OffersOnMap = function () { };

	var container = document.getElementById('offersOnMap'),
		markers = [],
		map, 
		initialized = false,
		lat =  51.5402644, 
		lng =  19.4280405,
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

	
	OffersOnMap.prototype.getLocations = function() {
		
		function addMarkers(locations) {

			var bounds = new google.maps.LatLngBounds(), 
				latPos, 
				targetPosition, 
				rowId, 
				target;

			// the smooth zoom function

			function smoothZoom (map, max, cnt) {
			    if (cnt >= max) {
			        return;
			    }
			    else {
			        z = google.maps.event.addListener(map, 'zoom_changed', function(event){
			            google.maps.event.removeListener(z);
			            smoothZoom(map, max, cnt + 1);
			        });
			        setTimeout(function(){map.setZoom(cnt);}, 80); 
			        // 80ms is what I found to work well on my system -- it might not work well on all systems
			    }
			}  


			for (var i = 0; i < locations.length; i++) {

				var location = locations[i],
					position = new google.maps.LatLng(location[0], location[1]),
					image = {
						url: $(container).data('marker'),
						size: new google.maps.Size(34, 34),
						origin: new google.maps.Point(0, 0),
						anchor: new google.maps.Point(0, 34)
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


				// center map to markers 
				map.fitBounds(bounds);
				markers.push(marker);
				
				// link to marker
				google.maps.event.addListener(marker, 'click', function() {
					window.location.href = marker.url;
				});
			}			
		}


		// Sets the map on all markers in the array.

		// Removes the markers from the map, but keeps them in the array.

		function deleteMarkers() {

			for (var i = 0; i < markers.length; i++) {
				markers[i].setMap(map);
			}
		}


		var location = $('.js-location'),
			locations = [];

			location.each(function() {
				
				var $$ = $(this),
					lat = $$.data('lat'),
					lng = $$.data('lng'),
					url = $('a', $$).attr('href');

				locations.push([lat, lng, url]);
			});
	
			deleteMarkers();
			addMarkers(locations);
	};
	
	
	OffersOnMap.prototype.googleMap = function() {
	
	
	};


	OffersOnMap.prototype.init = function() {
	
		function initialize() {
		
			var center,
				myLatlng = new google.maps.LatLng(lat, lng);
		
	        map = new google.maps.Map(container, mapOptions);
			
			
			OffersOnMap.prototype.getLocations(map);
			
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
			OffersOnMap.prototype.getLocations(map);
		}
	};	
	
	mint.OffersOnMap = new OffersOnMap();


}(window, document, jQuery, window.mint = window.mint || {}));
