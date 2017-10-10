/*$(function (){
	
	$(window).mousemove(function(event) {
		$('#mouse-pointer').css({
			'top' : event.pageY + 'px',
			'left' : event.pageX + 'px'
		});
	});

}); */

	$(document).on('mousemove', function(e){
		$('#mouse-pointer').css({
			left:  e.pageX,
			top:   e.pageY,
            pointerEvents: 'none'
		});
	});