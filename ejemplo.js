$(document).ready(function(){
	$(".clothes").click(function(){
        $(".cl_toggle").slideToggle("slow");
    });
});

$(document).ready(function(){
	$(".cl_toggle").mouseleave(function(){
        $(".cl_toggle").slideUp("slow");
    });
});

$(document).ready(function(){
	$(".cl_toggle").mouseleave(function(){
        $(".clothes").css("background-color","#660029");
    });
});
/*------------------------el header----------------------*/

$(document).ready(function(){
	$(".acce").click(function(){
        $(".ac_toggle").slideToggle("slow");
    });
});

$(document).ready(function(){
	$(".ac_toggle").mouseleave(function(){
        $(".acce").css("background-color","#660029");
    });
});
$(document).ready(function(){
	$(".ac_toggle").mouseleave(function(){
        $(".ac_toggle").slideUp("slow");
    });
});
/*------------------------el header----------------------*/

$(document).ready(function(){
	$(".sho").click(function(){
        $(".sh_toggle").slideToggle("slow");
    });
});

$(document).ready(function(){
	$(".sh_toggle").mouseleave(function(){
        $(".sho").css("background-color","#660029");
    });
});
$(document).ready(function(){
	$(".sh_toggle").mouseleave(function(){
        $(".sh_toggle").slideUp("slow");
    });
});