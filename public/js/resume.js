	
	$(function() {
		$(document).scroll(function () {
			var $nav = $("#mainNavbar");
			$nav.toggleClass("scrolled", $(this).scrollTop() > $nav.height());
		});

		var typed = new Typed('#typed', {
			stringsElement: '#typed-strings'
		});
	});

// var typed2 = new Typed('#typed', {
// 			stringsElement: '#typed-strings2'
// 		});


var myVar=setTimeout(function(){myTimer()},2000);

function myTimer()
{
var t="Former Lawyer evolving into a web developer. Sounds crazy right? Get to know me.";
document.getElementById("p").innerHTML=t;
}
