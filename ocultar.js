$(document).ready(function(){
	$("#ocultar").click(function(evento){
		evento.preventDefault();
		$("#ocultar1").hide(2500);
	});

	$("#mostrar").click(function(evento){
		evento.preventDefault();
		$("#ocultar1").show(2500)
	});
	$("#img").fadeOut(3000 , function(){
		$("#img").css({'top':300, 'left':200});
		$("#img").fadeIn(3000);
	});
		$("#ocultar1").fadeOut(3000 , function(){
		$("#ocultar1").css({'top':300, 'left':200});
		$("#ocultar1").fadeIn(3000);
	});
dinosaurios$1
dinosaurios$1
});