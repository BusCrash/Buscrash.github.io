var currversion = "1.1.0"
var lastimg = 1;
var pics = ["node1.jpg",
			"node2.jpg",
			"node3.jpg",
			"node4.jpg",
			"node5.jpg",
			"node6.jpg",
			"node7.jpg",
			"node8.jpg",
			"node9.jpg"];

$( document ).ready(function() {
 	$("#version").html('Version '+ currversion);
    $("#0").mouseenter(function(){
    	$("#big_image").attr("src", "http://img.hasthe.technology/screens/node1.jpg");
    	$('#overlay').html('Node 1');
    	lastimg = 0;
  	});
  	$("#1").mouseenter(function(){
    	$("#big_image").attr("src", "http://img.hasthe.technology/screens/node2.jpg");
    	$('#overlay').html('Node 2');
    	lastimg = 1;
  	});
  	$("#2").mouseenter(function(){
    	$("#big_image").attr("src", "http://img.hasthe.technology/screens/node3.jpg");
    	$('#overlay').html('Node 3');
    	lastimg = 2;
  	});
  	$("#3").mouseenter(function(){
    	$("#big_image").attr("src", "http://img.hasthe.technology/screens/node4.jpg");
    	$('#overlay').html('Node 4');
    	lastimg = 3;
  	});
  	$("#4").mouseenter(function(){
    	$("#big_image").attr("src", "http://img.hasthe.technology/screens/node5.jpg");
    	$('#overlay').html('Node 5');
    	lastimg = 4;
  	});
  	$("#5").mouseenter(function(){
    	$("#big_image").attr("src", "http://img.hasthe.technology/screens/node6.jpg");
    	$('#overlay').html('Node 6');
    	lastimg = 5;
  	});
  	$("#6").mouseenter(function(){
    	$("#big_image").attr("src", "http://img.hasthe.technology/screens/node7.jpg");
    	$('#overlay').html('Node 7');
    	lastimg = 6;
  	});
  	$("#7").mouseenter(function(){
    	$("#big_image").attr("src", "http://img.hasthe.technology/screens/node8.jpg");
    	$('#overlay').html('Node 8');
    	lastimg = 7;
  	});
  	$("#8").mouseenter(function(){
    	$("#big_image").attr("src", "http://img.hasthe.technology/screens/node9.jpg");
    	$('#overlay').html('Node 9');
    	lastimg = 8;
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
		var thumbfile = "http://img.hasthe.technology/screens/thumb/" + pics[i] + "?time=" + seconds;
		if (i==lastimg) {
			var bigfile = "http://img.hasthe.technology/screens/" + pics[i] + "?time=" + seconds;
			$("#big_image").attr("src", bigfile);
		};
		$("#"+ i).attr("src", thumbfile);


	};
};
/*function checkforupdates () {
	var seconds = new Date().getTime() / 1000
	var pageupdate = false;
	
  	$.getJSON('version.json?'+seconds, function(data) { 
		if (data.version != currversion) {
		document.location.reload(true);
	};
  });
  	
	
}*/