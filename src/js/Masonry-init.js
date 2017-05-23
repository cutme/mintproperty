	function masonryInit() {
		var container = document.getElementById('masonry');
			msnry = new Masonry( container, {
			
			itemSelector: '.c-grid__item',
			columnWidth: '.c-grid__sizer',
			gutter: '.gutter-sizer',
			percentPosition: true
			
		});
	}
