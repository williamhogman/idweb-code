var cheats = (function(){
    var osc = [];

    return {
	makeOvertones: function(speaker, amp, n) {
	    for(var i = 0; i < n; i++) {
		var o = speaker.createOscillator();
		waveform.type = 'sine';
		o.connect(amp);		
		osc.push(o);
	    }
	},

	start: function() {
	    osc.forEach(function(wavegen){
		wavegen.start(0);
	    });
	},

	stop: function() {
	    osc.forEach(function(wavegen){
		wavegen.stop();
	    });	    
	},

	setFrequency: function(hz) {
	    osc.forEach(function(wavegen, i){
		wavegen.frequency.value = (hz * (1+i));
	    });
	},
    }
})();
