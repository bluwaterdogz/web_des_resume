$(document).ready(function($) {
	$(' header, h1 , .titleheadline').hide();

	$('h1').fadeIn(500, function(){
		$('.titleheadline').fadeIn(1000,function(){
			$('header').fadeIn(500);
		});
	});

	$(".projects li").mouseenter(function() {
		var newImg = $(this).index();
		$(".img-over").addClass("transparent");
		$(".img-over").eq(newImg).removeClass("transparent");
	
	});

	// Dancin Divs in work experience
	$('.workexperience').each(function(){

		var $this = $(this);
		setInterval(function(){
			var pos = newPosition(),
				timeChange = Math.floor(Math.random()*1000)+1000;

			$this.animate({
				top:pos[0],
				left:pos[1]
			}, timeChange, "swing");

		},400);
	});


	// $('h2').each(function(){

	// 	var $this = $(this),
	// 		$window = $(window),
	// 		objPosTop = $this.offset().top;
	// 		objPosBottom = $this.offset().bottom;


	// 	$window.scroll(function() {

	// 		var windowPosY = $window.scrollTop();

	// 		if(
	// 			windowPosY + $window.height()/2 >= objPosTop

	// 			){

	// 			$this.fadeIn(1000, function(){
	// 				$this.removeClass("scrollfade");
	// 			});
	// 		}
	// 	});
	// });


});

// Calculates positiond for dancing divs
function newPosition(){
	var RANGE = 15,
		halfRange = Math.floor(RANGE/2),
		x = Math.floor(Math.random()*RANGE-halfRange),
		y = Math.floor(Math.random()*RANGE-halfRange);

	return [x,y];
}

