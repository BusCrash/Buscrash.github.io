var currversion = "1.0.8"
var lastimg = 1;
var pics = ["node1.jpg",
			"node2.jpg",
			"node3.jpg",
			"node4.jpg",
			"node5.jpg",
			"node6.jpg",
			"node7.jpg"];

$( document ).ready(function() {
 	$("#version").html('Version '+ currversion);
    $("#0").mouseenter(function(){
    	$("#big_image").attr("src", $("#0").attr("src"));
    	$('#overlay').html('Node 1');
    	lastimg = 0;
  	});
  	$("#1").mouseenter(function(){
    	$("#big_image").attr("src", $("#1").attr("src"));
    	$('#overlay').html('Node 2');
    	lastimg = 1;
  	});
  	$("#2").mouseenter(function(){
    	$("#big_image").attr("src", $("#2").attr("src"));
    	$('#overlay').html('Node 3');
    	lastimg = 2;
  	});
  	$("#3").mouseenter(function(){
    	$("#big_image").attr("src", $("#3").attr("src"));
    	$('#overlay').html('Node 4');
    	lastimg = 3;
  	});
  	$("#4").mouseenter(function(){
    	$("#big_image").attr("src", $("#4").attr("src"));
    	$('#overlay').html('Node 5');
    	lastimg = 4;
  	});
  	$("#5").mouseenter(function(){
    	$("#big_image").attr("src", $("#5").attr("src"));
    	$('#overlay').html('Node 6');
    	lastimg = 5;
  	});
  	$("#6").mouseenter(function(){
    	$("#big_image").attr("src", $("#6").attr("src"));
    	$('#overlay').html('Node 7');
    	lastimg = 6;
  	});
  	$("#popup").click(function(){
  		$("#popup").hide();

  	});
 	window.setInterval(function(){
  		updateimages();
	}, 10000);
	window.setInterval(function(){
  		updateimages();
	}, 300000);

});
function updateimages () {
	for (var i = pics.length - 1; i >= 0; i--) {
		var seconds = new Date().getTime() / 1000;
		var file = "http://wecan.hasthe.technology/screens/" + pics[i] + "?time=" + seconds;
		if (i==lastimg) {
			$("#big_image").attr("src", file);
		};
		$("#"+ i).attr("src", file);


	};
};
function checkforupdates () {
	var seconds = new Date().getTime() / 1000
	var pageupdate = false;

  	$.getJSON('version.json?'+seconds, function(data) { 
		if (data.version != currversion) {
		document.location.reload(true);
	};
  });
  	

}