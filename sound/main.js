"use strict";

$(document).ready(function(){
    var sf = document.getElementById('surface');

    var lastF = null;
    var lastV = null;

    var draw = function() {
	var frequency = window.frequency;
	var volume = window.volume;


	if(lastF == frequency || volume == lastV) {
	    requestAnimationFrame(draw);
	    return;
	}
	lastF = frequency;
	lastV = volume;

	var ctx = sf.getContext("2d");
	ctx.clearRect (0 , 0 , sf.width, sf.height);

	ctx.lineWidth=1;
	ctx.beginPath();

	ctx.moveTo(0, sf.height/2);

	var f = frequency/50;
	var amplitude = 100 * volume;
	for (var i = 0; i <= 1000; i += 1) {
	    var rads = (i/1000)*Math.PI*5;
	    var y = amplitude * Math.sin(f * rads);

	    ctx.lineTo(i,  Math.round(y) + Math.round(sf.height/2));
	}
	ctx.stroke();

	requestAnimationFrame(draw);
    };
    draw();
})
