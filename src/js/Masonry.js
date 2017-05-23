	var msnry;
	
	function triggerMasonry() {
		
		// don't proceed if masonry has not been initialized
		if ( !msnry ) {
			mint.Helper.blazy();
			return;
		}
		msnry.layout();
		mint.Helper.blazy();
	}
