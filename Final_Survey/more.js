
window.onload = function() {
	var emptyDiv = document.createElement('div');
		emptyDiv.id = 'includedContent';
		document.body.appendChild(emptyDiv);
	$("#includedContent").load("more.html");
}

//allows more.js implement more.css removing dependency on example.html
var head  = document.getElementsByTagName('head')[0];
var link  = document.createElement('link');
link.rel  = 'stylesheet';
link.type = 'text/css';
link.href = 'more.css';
document.head.appendChild(link);


//Show popup
function showPopup(snowplowFunctionName) {
    window.snowplowFunction = snowplowFunctionName;
    setOpactiy("snowplowOverlay");
   
	//createOverlay();
	
    ///Display popup and background divs
    document.getElementById("content").style.display = 'block';
	document.getElementById("box").value = "";
    document.getElementById("snowplowOverlay").style.display = 'block';
	fade(document.getElementById("snowplowOverlay"));
		
}
//perfoms fade animation
function fade(element) {
    var op = 0.1;  // initial opacity
	element.style.opacity = op;
    var timer = setInterval(function () {
        if (op >= 0.5){
            clearInterval(timer);
            element.style.display = ' ';
        }
        element.style.opacity = op;
        op += op * 0.1;
    }, 20);
}

//Close popup
function closePopup() {
    document.getElementById("content").style.display = 'none';
	document.body.removeChild(document.getElementById("snowplowOverlay"));
}
//the checks after the survey is completed
function confirm(){
	var done = false;
	var checkElements = document.getElementsByClassName("check");
	var anyChecked = false;
	 var theText = document.getElementById("box").value;
	for (var i = 0; i < checkElements.length; i++){
			if(checkElements[i].checked){
				anyChecked = true;
			}//end if
	}//end for
	if(anyChecked && checkRadioBtn() === true && theText !== ""){
		displayText(theText);
		done = true;
		closePopup();
		
	}
	else{
		alert("Hey, you forgot something"); //stops the user from going back to the website if some data is not filled in
	}
}//end function confirm()*/

//to check if the radio button has a value
function checkRadioBtn(){
	var radioSet = document.getElementsByClassName("radiobtn");
	for(var x=0; x<radioSet.length; x++){
		if(radioSet[x].checked){
			return true;
		}
	}
	return false;
}//end function

function displayText(theText){
	boolText = false;
	if (theText == null || theText == ' '){
		boolText = false;
		alert("Hey enter something now");
	}//end if
	else{
		
		sendPopupEvent(theText);
		
	}
	
}//end function

//set the state of the main web page when the popup is activated
function setOpactiy(elementId){
	var overlay = document.createElement("div");
	overlay.style.opacity = ".80"; 
	overlay.style.backgroundColor = "black";
	overlay.style.zIndex = "1001";
	overlay.style.position = "absolute";
	overlay.style.top = "0";
	overlay.style.left = "0";
	overlay.style.width = "100%";
	overlay.style.height = "100%";
	document.body.appendChild(overlay);
	
	overlay.id = elementId;
}

//sets the fading
function fade(element) {
    var op = 0.1;  // initial opacity
	element.style.opacity = op;
    var timer = setInterval(function () {
        if (op >= 0.5){
            clearInterval(timer);
            element.style.display = ' ';
        }
        element.style.opacity = op;
        op += op * 0.1;
    }, 20);
}

function sendPopupEvent(text) {
		window.snowplowFunction('trackUnstructEvent', {
			schema: 'iglu:snowplowanalytics.snowplow/popup/jsonschema/2-0-0',
			data: {
				fieldValue: text
			}
		});
}



