function getPageSize() {
    var xScroll, yScroll;
    if (window.innerHeight && window.scrollMaxY) {
        xScroll = document.body.scrollWidth;
        yScroll = window.innerHeight + window.scrollMaxY;
    } else if (document.body.scrollHeight > document.body.offsetHeight) { // all but Explorer Mac
        xScroll = document.body.scrollWidth;
        yScroll = document.body.scrollHeight;
    } else { // Explorer Mac...would also work in Explorer 6 Strict, Mozilla and Safari
        xScroll = document.body.offsetWidth;
        yScroll = document.body.offsetHeight;
    }

    var windowWidth, windowHeight;
    if (self.innerHeight) {    // all except Explorer
        windowWidth = self.innerWidth;
        windowHeight = self.innerHeight;
    } else if (document.documentElement && document.documentElement.clientHeight) { // Explorer 6 Strict Mode
        windowWidth = document.documentElement.clientWidth;
        windowHeight = document.documentElement.clientHeight;
    } else if (document.body) { // other Explorers
        windowWidth = document.body.clientWidth;
        windowHeight = document.body.clientHeight;
    }

    // for small pages with total height less then height of the viewport
    if (yScroll < windowHeight) pageHeight = windowHeight;
    else pageHeight = yScroll;

    // for small pages with total width less then width of the viewport
    if (xScroll < windowWidth) pageWidth = windowWidth;
    else pageWidth = xScroll;

    if (navigator.userAgent.indexOf("Firefox") != -1)
    { pageWidth = pageWidth - 17; }

    return {
        "pageWidth": pageWidth,
        "pageHeight": pageHeight,
        "windowWidth": windowWidth,
        "windowHeight": windowHeight
    };
}



//Show popup
function showPopup() {
   Q("snowplowOverlay");
   
   
	//createOverlay();
    ///Display popup and background divs
    document.getElementById("content").style.display = 'block';
    document.getElementById("snowplowOverlay").style.display = 'block';
	fade(document.getElementById("snowplowOverlay"));
}

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
    document.getElementById("fade").style.display = 'none';
}

//validator
function confirm(){
	var done = false;
	var checkElements = document.getElementsByClassName("check");
	var allChecked = true;
	for (var i = 0; i < checkElements.length; i++) {
		if (!checkElements[i].checked) {
			allChecked = false;
		}
	}
	if (allChecked){
		alert("Thanks friend");
		done = true;
		closePopup();
	}
}




function Q(elementId){
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















