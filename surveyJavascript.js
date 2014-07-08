/***************************/
//@Author: Adrian "yEnS" Mato Gondelle
//@website: www.yensdesign.com
//@email: yensamg@gmail.com
//@license: Feel free to use it, but keep this credits please!					
/***************************/

var TimeToFade = 1000.0

function fade(eid){
	var element = document.getElementById(eid);
	if(element == null){
		return;
	}
	f(element.FadeState == null{
		if(element.style.opacity == null || element.style.opacity == ' ' || element.style.opacity == '1'){
		element.FadeState = 2;
		}
		else{
			element.FadeState = -2;
		}
	}
	if(element.FadeState == -1 element.FadeState == 1 ){
		element.FadeState = element.FadeState == 1 ? -1 : 1;
		element.FadeTimeLeft = TimeToFade - element.FadeTimeLeft;
	}
	else{
		element.FadeState = element.FadeStae == 2 ? -1 : 1;
		element.FadeTimeLeft = TimeTOFade;
		setTimeout("animateFade(" + new Date().getTime() + ",'" + eid + "')",33);
	}

}

function animateFade(lastTick, aid){
	var curTick = newDate().getTime();
	var elaspedTicks = curTick - lastTick;
	
	var element = document.getElementById(eid);
	
	if(element.FadeTimeLeft <= elapsedTicks){
		element.style.opacity  element.FadeState  == 1 ? '1' : '0';
		element.style.filter = 'alpha(opacity = ' + (element.FadeState = element.FadeState == 1 ? 2 : -2);
		return;
	}
	
	element.FadeTimeLeft -= elapsedTicks;
	var newOpVal = element.FadeTimeLeft/TimeToFade;
	if(element.FadeState == 1){
		newOpVal = 1 -newOpVal;
	}
		
	element.style.opacity = newOpVal;
	element.style.filter = 'alpha(opacity = ' + (newOpVal*100) + ')';		
	
	setTimeout("animateFade(" + curTick + ",'" + eid "')", 33);
	
}