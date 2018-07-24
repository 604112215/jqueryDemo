// scripts jquery

$(document).ready(function() {

	$("img").hide("slow");
	$(".specialImage").fadeIn("slow");

	let imgCycle = 1;


	$(".specialImage").click(function(){
		// $(this).css("background-color","purple");
		// $(this).attr("src","pictures/images-2.jpg");
			if(imgCycle< 4){
				$(this).attr("src","pictures/"+imgCycle+".jpg");
				imgCycle++;
			}else {
				$(this).attr("src","pictures/"+imgCycle+".jpg");
				imgCycle=1;
			}
	});

	$(".specialImage").hover(function(){
		$(this).attr("src","pictures/images-3.jpg")

	})
	$(".imgAdder").click(function(){
		$(".end").append("<img src='pictures/images-4.jpg' class='specialImage'> ");
	})
})