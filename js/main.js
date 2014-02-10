$(window).load(function(){


});
$(window).bind("resize", function() {



});

$(document).ready(function(){

	for (var i = 0; i < 80; i++) {
		con(i);
		crea_esfera(i);
	};

	var tween = TweenMax.to(
							$('#main'),
							40,
							{

								delay                :  3,
								rotation			 :  360,
								scaleX               :  .2,
								scaleY               :  .2,
								repeat				 :  -1,
								yoyo 				 :  true,
							});
});



function crea_esfera(a){

	var core = $('#main');
	var ids= 'id'+a;
	var alea = aleatorio(1,3);
	var esfera = '<div class="circulo color'+alea+' '+ids+'"></div>';
	core.append(esfera);

	var nombre = $('.'+ids);
	var retardo= a/19;
	var ancho = 1200;
	var mita = ancho/2;

	var tween = TweenMax.to(
							nombre,
							4,
							{

								display			     :  'block',
								delay                :  retardo,
								width                :  ancho,
								height               :  ancho,
								rotation			 :  360,
								repeat				 :  -1,
								yoyo 				 :  true
							});


}
function aleatorio(a,b) {
         return Math.round(Math.random()*(b-a)+parseInt(a));
}
function con(s){
	console.log(s);
}