(function(window, document, $, mint, undefined) {
	'use strict';
	
	var Filters = mint.Filters = function () { },
	    form, offers_num, submit, results, script;
	
	Filters.prototype.init = function() {
	
	    form = document.getElementById('filters');
	    offers_num = document.getElementsByClassName('js-resultsNum');
	    submit = document.getElementsByClassName('js-submit')[0];
        results = document.getElementById('results');
        script = grid.getAttribute('data-script')+'?a=';
        
		this.elements();
		this.moreOptions();
		this.listen();
		this.loadMore();
	};
	
	Filters.prototype.loadMore = function(data) {

		var data = serialize(form),
		    lomo = document.getElementById('loadMore'),
		    url_items = script + 'oferty&' + data,
		    request = new XMLHttpRequest();
		
		var action = function(e) {
            classie.add(lomo.parentNode, 'is-loading');

            request.open('GET', url_items, true);
            request.send(null);
    
            request.onreadystatechange = function() {
                if (request.readyState == 4) {
                    if (request.status == 200) {
                    
                        console.log(url_items);
                        
                        classie.remove(lomo.parentNode, 'is-loading');
    
                        var tmp = document.createElement('div');
                            tmp.innerHTML = request.responseText.trim();
    
                        // Add data in grid
                        while (tmp.firstChild) {  
                              grid.appendChild(tmp.firstChild);        
                        }
    
                        // Refresh lazy load and waypoints
                        bLazy.revalidate();  
    
                    } else if (failure) {
                        console.log(request.status, request.statusText);
                    }
                }
            }
            
            e.returnValue = false;
		};
		
		lomo.addEventListener('click', action, false);    
    }
	
	Filters.prototype.reloadData = function() {

		var data = serialize(form),
		    url_items = script + 'oferty&' + data,
		    url_amount = script + 'liczbaOfert&' + data,
			request_items = new XMLHttpRequest(),
			request_amount = new XMLHttpRequest();

        classie.add(results, 'is-ajaxloading');


        // Read offers
        
        request_items.open('GET', url_items, true);
        request_items.send(null);

        request_items.onreadystatechange = function() {
            if (request_items.readyState == 4) {
                if (request_items.status == 200) {
                
                    console.log(url_items);
                    
                    classie.remove(results, 'is-ajaxloading');

                    var tmp = document.createElement('div');
                        tmp.innerHTML = request_items.responseText.trim();

                    // Replace data in grid
                    grid.innerHTML = tmp.innerHTML;

                    // Refresh lazy load and waypoints
                    bLazy.revalidate();  

                } else if (failure) {
                    console.log(request_items.status, request_items.statusText);
                }
            }
        }
        

        // Read total number of offers

        request_amount.open('GET', url_amount, true);
        request_amount.send(null);

        request_amount.onreadystatechange = function() {
            if (request_amount.readyState == 4) {
                if (request_amount.status == 200) {
                
                    for (var i = 0; i<offers_num.length; i ++) {
                        offers_num[i].innerHTML = request_amount.responseText.trim();
                    }
                    
                } else if (failure) {
                    console.log(request_amount.status, request_amount.statusText);
                }
            }
        }     
    }
	
	Filters.prototype.moreOptions = function() {
		var el = document.getElementById('filters'),
			btn = $('.js-moreOptions'),
			offersNum = $('.js-offersNum'),
			start = $('.js-start'),
			submit = $('.js-submit'),
			end = document.getElementsByClassName('js-end')[0];
		
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
		
		var checkAndPlace = function() {
			if ( $(el).hasClass('is-expanded') ) {
				if (mint.Helper.isWindowSmallerThan(769) === false) {
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
		};
		
		var resetForm = function(e) {

            form.reset();

            $('.nice-select').niceSelect('update');            
            
            var sliders = document.getElementsByClassName('js-slider');
            for (var k = 0; k<sliders.length; k++) {
                sliders[k].noUiSlider.destroy();
            }
            
            Filters.prototype.elements();

            if ( submit === undefined ) {
                Filters.prototype.reloadData();
        	}
            
            e.returnValue = false;
		};
		
		document.getElementsByClassName('js-reset')[0].addEventListener('click', resetForm, false);
        window.addEventListener('resize', checkAndPlace, false);
/*
		$(window).on('resize', function() {
			checkAndPlace();
		});
*/		
		checkAndPlace();
	};

	Filters.prototype.elements = function() {
	
		function area() {
			var slider = document.getElementById('area'),
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
			var el = document.getElementsByClassName('js-bathrooms')[0],
				minus = $('.js-minus', el),
				input = document.getElementById('bathrooms'),
				plus = $('.js-plus', el),
				num = $('.num', el),
				index = 1;
				
			function changeNum() {
				$('.num').text(index);
				$(input).val(index);
				if ( submit === undefined ) {
                    Filters.prototype.reloadData();
            	}
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
			var slider = document.getElementById('rooms'),
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
			var slider = document.getElementById('price'),
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
			var slider = document.getElementById('floor'),
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
		if (mint.Helper.exist('#floor')) floor();
		if (mint.Helper.exist('#area')) area();
		if (mint.Helper.exist('#price')) price();	
		if (mint.Helper.exist('#rooms')) rooms();	
		
	};
	
	Filters.prototype.listen = function() {

		var selects = document.getElementsByClassName('nice-select'),
		    sliders = document.getElementsByClassName('js-slider'), data;


        // Dropdowns

        for (var i = 0; i < selects.length; i ++) {
                
            selects[i].onchange = function() {
                if ( submit === undefined ) {
                    Filters.prototype.reloadData();
            	}
            };
            
            

        }


        // Sliders

        for (var j = 0; j < sliders.length; j ++) {
        
            var id = sliders[j].getAttribute('id'),
                val = [parseInt(sliders[j].noUiSlider.get()[0]), parseInt(sliders[j].noUiSlider.get()[1])],
                input = document.getElementsByName(id)[0];
                input.setAttribute('value', JSON.stringify(val));

            sliders[j].noUiSlider.on('change', function( values, handle ) {
                
                id = this.target.id;
                input = document.getElementsByName(id)[0];
                val = [parseInt(values[0]), parseInt(values[1])];
                    
                input.setAttribute('value', JSON.stringify(val));
                
                if ( submit === undefined ) {
                    Filters.prototype.reloadData();
            	}
            });
        }
        
        
        // Checkboxes

        form.addEventListener('click', function(e) {

            if (e.target.classList.contains('js-checkbox')) {
                if ( submit === undefined ) {
                    Filters.prototype.reloadData();
            	}
            }
        });
        


        // Submit
  	
       /*
 if ( submit === undefined ) {
            Filters.prototype.reloadData(serialize(form));
    	}
*/
	};
	
	mint.Filters = new Filters();
	

}(window, document, jQuery, window.mint = window.mint || {}));


