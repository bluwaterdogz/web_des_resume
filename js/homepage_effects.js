$(document).ready(function($) {

	$(".project-title-cont li").mouseenter(function() {
		var newImg = $(this).index();
    console.log(newImg);
		$(".img-over").addClass("transparent");
		$(".img-over").eq(newImg).removeClass("transparent");
	});

	$('a.backToTop').click(function (e) {
    e.preventDefault();
    $(document.body).animate({scrollTop: 0}, 2000, 'swing');
  });

});
