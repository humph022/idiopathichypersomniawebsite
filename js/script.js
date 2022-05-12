$(document).ready(function() {


	$(".nav-bar").click(function() {

        if ($(".nav-menu").css('display') == 'none') {
            $(".nav-menu").show("slide", 200);
						console.log("clicked")
        }

        else {
            $(".nav-menu").hide("slide", 200);
						console.log("clicked to close")
        };

	});


});
