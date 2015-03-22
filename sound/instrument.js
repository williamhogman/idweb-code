// Create the speaker :)
var speaker = new (window.AudioContext || window.webkitAudioContext)();

// Create the wave-generator
var waveform = speaker.createOscillator();

// Create amplifier
var amp = speaker.createGain();

// Which waveform?
waveform.type = 'sine';

waveform.detune.value = 100; // value in cents

// Hook up the wave-generator with the amplifier
waveform.connect(amp);

// Connect the amplifer to the speakers
amp.connect(speaker.destination);

// then we can the frequency like this
// osc.frequency.value = x;
// gainNode.gain.value = x;
// Lets start it.
// osc.start(0);

// Lets make a function for setting the frequency, instead
var setFrequency = function(x) {
    waveform.frequency.value = x;
}

// ... and the volume
var setVolume = function(x) {
    amp.gain.value = x;
}

setFrequency(400);
setVolume(0.1);

var start = function() {
    waveform.start(0);
}

var stop = function() {
    waveform.stop();
}
