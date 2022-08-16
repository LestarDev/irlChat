window.onload = function() {

    var messages = [];
    var socket = io.connect('http://localhost:3700');
    var field = document.getElementById("field");
    var sendButton = document.getElementById("send");
    var content = document.getElementById("content");
    var name = document.getElementById("name");

    socket.on('message', async function(data){
        if(data.message){
            messages.push(data);
        } else {
            console.log('Error, cos nie dziala: ', data);
        }
    });

}