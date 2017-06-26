(function(window, document, $, mint, undefined) {
	'use strict';
	
	var Filters = mint.Filters = function () { };
	
	Filters.prototype.init = function() {
		this.elements();
		this.moreOptions();
	};
	
	Filters.prototype.moreOptions = function() {
		var el = document.getElementById('filters'),
			btn = $('.js-moreOptions'),
			offersNum = $('.js-offersNum'),
			start = $('.js-start'),
			submit = $('.js-submit'),
			end = $('.js-end');
		
		btn.on('click', function(e) {
			e.preventDefault();
			
			var $$ = $(this),
				more = $$.data('more'),
				less = $$.data('less');

			$$.toggleClass('is-opened');
			
			$(el).toggleClass('is-expanded');

			if ($$.hasClass('is-opened')) {
				$('span', $$).text(less);
				
				// Move Submit and summary to the end of form
				
				if (mint.Helper.isWindowSmallerThan(640)) {
					offersNum.detach();
					submit.detach();
					
					end.prepend(offersNum);
					end.append(submit);
				}
				
				
			} else {
				$('span', $$).text(more);
				
				offersNum.detach();
				submit.detach();
				
				start.prepend(offersNum);
				start.append(submit);
			}
		});
		
		// Back Submit and summary to their place
		
		$(window).on('resize', function() {
			if ( $(el).hasClass('is-expanded') ) {
				if (mint.Helper.isWindowSmallerThan(640) === false) {
					offersNum.detach();
					submit.detach();
					
					start.prepend(offersNum);
					start.append(submit);
				} else {
					
					offersNum.detach();
					submit.detach();
					
					end.prepend(offersNum);
					end.append(submit);
					
				}
			}
		});
		
	};

	Filters.prototype.ajax = function() {

	};
	
	Filters.prototype.destroy = function() {
		
	};
	
	Filters.prototype.elements = function() {
	
		function area() {
			var slider = document.getElementById('slider-area'),
				min = $(slider).parents('.c-filters__item').find('.min'),
				max = $(slider).parents('.c-filters__item').find('.max'),
				max_default = 160;

			noUiSlider.create(slider, {
				start: [0, 80],
				connect: true,
				range: {
					'min': 0,
					'max': max_default
				},
				format: wNumb({
					decimals: 3,
					thousand: '.',
					postfix: ' m2',
				})
			});
			
			slider.noUiSlider.on('update', function(){
				var min_value = slider.noUiSlider.get()[0],
					max_value = slider.noUiSlider.get()[1];

				min.text(min_value);
				max.text(max_value);
					
				if (parseInt(min_value) === 0) {
					min.text('Min');
				}
				
				if (parseInt(max_value) == max_default) {
					max.text('Max');
				}
			});
		}
		
		function bathrooms() {
			var el = document.getElementById('bathrooms'),
				minus = $('.js-minus', el),
				input = document.getElementById('number_of_bathrooms'),
				plus = $('.js-plus', el),
				num = $('.num', el),
				index = 1;
				
			function changeNum() {
				$('.num').text(index);
				$(input).val(index);
			}
			
			minus.on('click', function(e) {
				e.preventDefault();
				
				if (index > 1) {
					index --;
					changeNum();
				}				
			});
			
			plus.on('click', function(e) {
				e.preventDefault();
				index ++;
				changeNum();
			});
		}
		
		function rooms() {
			var slider = document.getElementById('slider-rooms'),
				min = $(slider).parents('.c-filters__item').find('.min'),
				max = $(slider).parents('.c-filters__item').find('.max'),
				max_default = 10;

			noUiSlider.create(slider, {
				start: [0, 5],
				connect: true,
				range: {
					'min': 1,
					'max': max_default
				},
				format: wNumb({
					decimals: 0
				})
			});
			
			slider.noUiSlider.on('update', function(){
				var min_value = slider.noUiSlider.get()[0],
					max_value = slider.noUiSlider.get()[1];

				min.text(min_value);
				max.text(max_value);

				if (parseInt(max_value) == max_default) {
					max.text('Max');
				}
			});
		}
		
		function price() {
			var slider = document.getElementById('slider-price'),
				min = $(slider).parents('.c-filters__item').find('.min'),
				max = $(slider).parents('.c-filters__item').find('.max'),
				max_default = 500;

			noUiSlider.create(slider, {
				start: [0, max_default],
				connect: true,
				step: 10,
				range: {
					'min': 0,
					'max': max_default
				},
				format: wNumb({
					decimals: 0,
					postfix: ' (tys. zł)',
				})
			});
			
			slider.noUiSlider.on('update', function(){
				var min_value = slider.noUiSlider.get()[0],
					max_value = slider.noUiSlider.get()[1];

				min.text(min_value);
				max.text(max_value);
					
				if (parseInt(min_value) === 0) {
					min.text('Min');
				}
				
				if (parseInt(max_value) == max_default) {
					max.text('Max');
				}
			});
		}
		
		function floor() {
			var slider = document.getElementById('slider-floor'),
				min = $(slider).parents('.c-filters__item').find('.min'),
				max = $(slider).parents('.c-filters__item').find('.max'),
				max_default = 5;

			noUiSlider.create(slider, {
				start: [0, max_default],
				connect: true,
				step: 1,
				range: {
					'min': 0,
					'max': max_default
				},
				format: wNumb({
					decimals: 0
				})
			});
			
			slider.noUiSlider.on('update', function(){
				var min_value = slider.noUiSlider.get()[0],
					max_value = slider.noUiSlider.get()[1];

				min.text(min_value);
				max.text(max_value);
					
				if (parseInt(min_value) === 0) {
					min.text('Min');
				}
				
				if (parseInt(max_value) == max_default) {
					max.text('Max');
				}
			});
		}
		
		if (mint.Helper.exist('#bathrooms')) bathrooms();
		if (mint.Helper.exist('#slider-floor')) floor();
		if (mint.Helper.exist('#slider-area')) area();
		if (mint.Helper.exist('#slider-price')) price();	
		if (mint.Helper.exist('#slider-rooms')) rooms();	
		
	};
	
	mint.Filters = new Filters();
	

}(window, document, jQuery, window.mint = window.mint || {}));

