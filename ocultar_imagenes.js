$(document).ready(function(){
	$("#ocultar").click(function(evento){
		evento.preventDefault();
		$("#ocultar1").hide(2500);
	});

	$("#mostrar").click(function(evento){
		evento.preventDefault();
		$("#ocultar1").show(2500)
	})
});