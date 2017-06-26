	function masonryInit() {
		
		var container = document.getElementById('masonry'),			
			item = $('.c-grid__item'),
			isActive = false,
			masonryOptions = {
				itemSelector: '.c-grid__item',
				columnWidth: '.c-grid__sizer',
				gutter: '.gutter-sizer',
				percentPosition: true
			},
			msnry,
			ww = $(window).width();
			
		
		function checkResolutionAndDecide() {
		
			if ((ww <= 640) && (isActive === true)) {
				console.log('disable');
				msnry.destroy();
				
				item.each(function() {
					$(this).attr('style', '');
				});
				
				isActive = false;

			} else if ((ww > 640) && (isActive === false)) {
				
				msnry = new Masonry( container, masonryOptions );
				
				isActive = true;
				console.log('fire');
			}
		}
		

		$(window).on('resize', function() {
		
			ww = $(window).width();
			
			checkResolutionAndDecide();
			
		});
		
		checkResolutionAndDecide();
	}


	