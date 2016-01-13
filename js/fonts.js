function replaceAller(a, c){
	Cufon.replace(a, { fontFamily: 'Aller', color: c });
	$(function(){$('cufon[alt=" "]').css('width','0');});
}												

function replaceAllerLight(a){
	Cufon.replace(a, { fontFamily: 'Aller Light' });
	$(function(){$('cufon[alt=" "]').css('width','0');});
}

function replaceOptima(a){
	Cufon.replace(a, { fontFamily: 'Optima',color:'rgb(45,86,162)' });
	$(function(){$('cufon[alt=" "]').css('width','0');});
}

replaceAller('.language-menu a');
replaceOptima('.logo span');
replaceAller('.navigation-menu a');
replaceAller('.navigation-submenu a.normal', '#888888');
replaceAller('.navigation-submenu a.selected', 'rgb(45,86,162)');
replaceAller('.banner-header');
replaceAllerLight('.header-title');
replaceAllerLight('.header-subtitle');
replaceAller('.banner-link');
replaceAller('.box-title');
replaceAller('.box-link');
replaceAllerLight('.footer-left');
replaceAllerLight('.footer-right');