jQuery(function($){
	 
 

		if($('body').hasClass('home')){
			$.backstretch("http://waterstreetgm.org/wp-content/themes/waterstreetv4/images/header_images/harbour.jpg");
			}

// Scroll to TOP
$(function(){
		   
	$.fn.scrollToTop=function(){
		
		$(this).hide().removeAttr("href");
		
		if($(window).scrollTop()!="0"){
			$(this).fadeIn("slow")
		}
		var scrollDiv=$(this);
		
		$(window).scroll(function(){
								  
			if($(window).scrollTop()=="0"){
				$(scrollDiv).fadeOut("slow")
			}else{
				$(scrollDiv).fadeIn("slow")
			}
		
		});
		
		$(this).click(function(){
			$("html, body").animate({scrollTop:0},"slow");
		});
	
	}
			
});




$(function() {
	$("#toTop").scrollToTop();
});
	
$(document).ready(function(){
	
	$(".scroll").click(function(event){
		//prevent the default action for the click event
		event.preventDefault();
		
		//get the full url - like mysitecom/index.htm#home
		var full_url = this.href;
		
		//split the url by # and get the anchor target name - home in mysitecom/index.htm#home
		var parts = full_url.split("#");
		var trgt = parts[1];
		
		//get the top offset of the target anchor
		var target_offset = $("#"+trgt).offset();
		var target_top = target_offset.top;
		
		//goto that anchor by setting the body scroll top to anchor top
		$('html, body').animate({scrollTop:target_top}, 500);
	});

   });
	
});


