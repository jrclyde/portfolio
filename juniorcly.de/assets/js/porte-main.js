// Loading Animation
$(window).bind("load", function() {
	
	// Works Masonry
	$('#main-works-container').masonry({
		columnWidth: '.work-item',
		itemSelector: '.work-item'
	});

	// Blog Masonry
	$('#main-blog-container').masonry({
		columnWidth: '.blog-item',
		itemSelector: '.blog-item'
	});
	
	$("#main-load").delay(200).fadeOut("slow", function() {
			$('html, body').css('overflowY', 'auto'); 
	});
});


// Mobile Menu
$(".menu-item").bind("click", function() {
	$('html, body').css('overflowY', 'hidden'); 
	$(".menu-item").fadeToggle(200);
	$(".exit-item").fadeToggle(200);
	$(".header-menu-open").fadeToggle(500, function() {
		var d = 100, factor = d / 3 * 2;
		$(".header-menu-open ul li").each(function(){
			$(this).delay(d = d + factor).animate({opacity:'1'}, 100);
		});
	});
});
	
$(".exit-item").bind("click", function() {
	$('html, body').css('overflowY', 'auto'); 
	$(".menu-item").fadeToggle(200);
	$(".exit-item").fadeToggle(200);
	$(".header-menu-open").fadeToggle(500, function() {
		var d = 100, factor = d / 3 * 2;
		$(".header-menu-open ul li").each(function(){
			$(this).delay(d = d + factor).animate({opacity:'0'}, 100);
		});
	});
});


// Sticky Menu
$(window).scroll(function() {
	if($(window).scrollTop() > 10) {
		$(".header").addClass("header-sticky");
		$(".scroll-down").css("opacity", "0");
	} else {
		$(".header").removeClass("header-sticky");
		$(".scroll-down").css("opacity", "1");
	}
	
});

// Buttons
$('#all-works-button').bind("click", function() {
	window.location = "works.html";
});

$('#all-blog-button').bind("click", function() {
	window.location = "blog.html";
});

$('#load-more-blog').bind("click", function() {
	// Function ...
});

$('#load-more-works').bind("click", function() {
	// Function ...
});


