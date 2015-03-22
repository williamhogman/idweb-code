$(document).ready(function(){
    var socket;

    var addMessage = function(message){
        // add a message to the chat log
	var node =  $("<div>").text(message);
	$("#chatlog").append(node);
    };

    var clear = function(){
        $("#chatlog").empty();
    };

    var send = function(message) {
        // If something doesn't work...
        if(!socket || socket.readyState != 1){
            // ...try again later
            setTimeout(function(){send(message);}, 200);
        } else {
            // Everything works, send it!
            socket.send(message);
        }
    };

    $("#message_form").submit(function(ev){
        ev.preventDefault();

        // Clear the user-interface
	var msg = $("#message").val();
	$("#message").val("");
        send(msg);
        return false;
    });

    var connect = function() {
        window.socket = socket = new WebSocket("ws://localhost:8801");

        socket.onmessage = function(event) {
            // When we receive a message add it to the log
            addMessage(event.data);
        };

        socket.onclose = function() {
            clear();
            setTimeout(connect, 200);
        };
    };

    connect();
});
