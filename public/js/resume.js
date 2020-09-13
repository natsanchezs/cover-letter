	
	$(function() {
		$(document).scroll(function () {
			var $nav = $("#mainNavbar");
			$nav.toggleClass("scrolled", $(this).scrollTop() > $nav.height());
		});

		var typed = new Typed('#typed', {
			stringsElement: '#typed-strings'
		});
	});


