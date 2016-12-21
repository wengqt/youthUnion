function switchPage(idname){
		var main = document.getElementById("main");
		var member = document.getElementById("member");
		var path = document.getElementById("path");
		var base = document.getElementById("base");
		var service = document.getElementById("service");
		var carousel= document.getElementById("carousel");
		var current = document.getElementById(idname);
		main.style.display = "none";
		member.style.display = "none";
		path.style.display = "none";
		base.style.display = "none";
		service.style.display = "none";
		carousel.style.display = "none";
		current.style.display = "block";
		if(idname=='main'){
			carousel.style.display = "block";
		}
		if(idname=='base'){
			showcontent(articall1);
		}

	$(".nav").find(".active").removeClass("active");
	$("."+idname+"_").addClass("active");
}
