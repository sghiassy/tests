$(document).ready(function() {
	$('p').click(function(evt) {
		var txt = $(this).html();

		setTimeout(function() {
			alert(txt);
		}, 1000);
	})
});