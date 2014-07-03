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
    $("#0").click(function(){
    	$("#big_image").attr("src", "http://wecan.hasthe.technology/flash/Flashlight.php?port=5901");
    	$('#overlay').html('Node 1');
    	lastimg = 0;
  	});
  	$("#1").click(function(){
    	$("#big_image").attr("src", "http://wecan.hasthe.technology/flash/Flashlight.php?port=5902");
    	$('#overlay').html('Node 2');
    	lastimg = 1;
  	});
  	$("#2").click(function(){
    	$("#big_image").attr("src", "http://wecan.hasthe.technology/flash/Flashlight.php?port=5903");
    	$('#overlay').html('Node 3');
    	lastimg = 2;
  	});
  	$("#3").click(function(){
    	$("#big_image").attr("src", "http://wecan.hasthe.technology/flash/Flashlight.php?port=5904");
    	$('#overlay').html('Node 4');
    	lastimg = 3;
  	});
  	$("#4").click(function(){
    	$("#big_image").attr("src", "http://wecan.hasthe.technology/flash/Flashlight.php?port=5905");
    	$('#overlay').html('Node 5');
    	lastimg = 4;
  	});
  	$("#5").click(function(){
    	$("#big_image").attr("src", "http://wecan.hasthe.technology/flash/Flashlight.php?port=5906");
    	$('#overlay').html('Node 6');
    	lastimg = 5;
  	});
  	$("#6").click(function(){
    	$("#big_image").attr("src", "http://wecan.hasthe.technology/flash/Flashlight.php?port=5907");
    	$('#overlay').html('Node 7');
    	lastimg = 6;
  	});
  	$("#popup").click(function(){
  		$("#popup").hide();

  	});
 	window.setInterval(function(){
  		updateimages();
	}, 10000);
/*	window.setInterval(function(){
  		checkforupdates();
	}, 300000);*/

});
function updateimages () {
	for (var i = pics.length - 1; i >= 0; i--) {
		var seconds = new Date().getTime() / 1000;
		var file = "http://wecan.hasthe.technology/screens/" + pics[i] + "?time=" + seconds;
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