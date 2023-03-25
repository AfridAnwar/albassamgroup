function getCookie(c_name)
{
	"use strict";
	var i,x,y,ARRcookies=document.cookie.split(";");
	for (i=0;i<ARRcookies.length;i++)
	{
		x=ARRcookies[i].substr(0,ARRcookies[i].indexOf("="));
		y=ARRcookies[i].substr(ARRcookies[i].indexOf("=")+1);
		x=x.replace(/^\s+|\s+$/g,"");
		if (x==c_name)
		{
			return unescape(y);
		}
	}
}
function setCookie(c_name,value,exdays)
{
	"use strict";
	var exdate=new Date();
	exdate.setDate(exdate.getDate() + exdays);
	var c_value=escape(value) + ((exdays==null) ? "" : "; expires="+exdate.toUTCString());
	document.cookie=c_name + "=" + c_value + ";domain=;path=/";
}
jQuery(document).ready(function($){
	"use strict";
	$(".style-selector select option[selected]").prop("selected", true);
	$(".style-selector select input[checked]").prop("checked", true);
	$(".style-selector-icon").click(function(){
		$(this).parent().toggleClass("opened");
		setCookie("fp_style_selector", ($(this).parent().hasClass("opened") ? "opened" : ""));
	});
	
	$(".style-selector [name='menu_type']").change(function(){
		if($(this).val()=="sticky")
		{
			$(".header-container").addClass("sticky");
			setCookie("fp_menu_type", "sticky");
			if(menu_position==null)
				menu_position = $(".header-container").offset().top;
			$(".header-container.sticky").after($(".header-container.sticky").clone().attr("id", "fp-sticky-clone").css("visibility", "visible"));
			$(document).scroll();
		}
		else
		{
			$(".header-container").removeClass("sticky").css("visibility", "visible");
			$("#fp-sticky-clone").remove();
			setCookie("fp_menu_type", "no_sticky");
		}
	});
	
	$(".style-selector [name='header_type']").change(function(){
		setCookie("fp_header_type", $(this).val());
		location.reload();
	});
	
	$(".style-selector [name='header_top_bar']").change(function(){
		setCookie("fp_header_top_bar", $(this).val());
		location.reload();
	});
	
	$(".style-selector [name='fp_preloader']").change(function(){
		setCookie("fp_preloader", $(this).val());
		location.reload();
	});
});