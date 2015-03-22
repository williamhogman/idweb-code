$(document).ready(function() {

    var sf = document.getElementById('surface');

    var draw = function() {
        var ctx = sf.getContext("2d");
        ctx.lineWidth = 5;

        // Börja!
        ctx.beginPath();

        ctx.lineTo(0, sf.height/2);
        ctx.lineTo(sf.width, sf.height/2);

        // Sluta!
        ctx.stroke();
    };

    draw();
});
