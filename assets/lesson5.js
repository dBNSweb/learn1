$(document).ready(function() {
	$('#toggleMenu').on('click', function(e){
		e.preventDefault();

		$('.ui.left.sidebar').sidebar('show');
	});
});