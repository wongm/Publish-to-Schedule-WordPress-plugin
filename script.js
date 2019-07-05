(function($) {
	$(document).on( 'click', '.nav-tab-wrapper span', function() {
		$('section').hide();
		$('section').eq($(this).index()).show();
		$(".nav-tab-wrapper span").removeClass("nav-tab-active");
		$(this).addClass('nav-tab-active');
	})
	
})( jQuery );