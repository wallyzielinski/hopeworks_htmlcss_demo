$(document).ready( function() {
	var pokemon = $('.poke');

	pokemon.mouseenter(function() {
		// $(this).css('opacity', 1);
		$(this).find('p').css('transform', 'scale(2)');
	}).mouseleave(function() {
		// $(this).css('opacity', 0.5);
		$(this).find('p').css('transform', 'scale(1)');
	});


});