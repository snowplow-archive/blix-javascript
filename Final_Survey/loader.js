document.ready(function()){
	$("#content").load("home.html");
});

$('a').click(function(){
	var page = $(this).attr('href');
	alert(page);
	
});