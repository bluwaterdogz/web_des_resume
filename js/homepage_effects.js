 $(document).ready(function($) {
	$(' header, h1 , .titleheadlinebox').hide();

	$('h1').fadeIn(1000, function(){
		$('.titleheadlinebox').fadeIn(2000,function(){
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

	$('a.backToTop').click(function (e) {
  e.preventDefault();
  $(document.body).animate({scrollTop: 0}, 2000, 'swing');
});

});

// Calculates positiond for dancing divs
function newPosition(){
	var RANGE = 15,
		halfRange = Math.floor(RANGE/2),
		x = Math.floor(Math.random()*RANGE-halfRange),
		y = Math.floor(Math.random()*RANGE-halfRange);

	return [x,y];
}
