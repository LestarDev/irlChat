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
            var html = '';
            for(let i=0; i<messages.length; i++){
                html  += '<b>' + (messages[i].username ? messages[i].username : 'Server') + ': </b>';
                html += messages[i].message + '<br />';
            }
            content.innerHTML = html;
            content.scrollTop = content.scrollHeight;
        } else {
            console.log('Error, cos nie dziala: ', data);
        }
    });

    sendButton.onclick = function() {
        if(name==""||name==null){
            console.log('Cos jest nie tak,  wpisales nick?')
        } else {
            const text = field.value;
            socket.emit('send', {message: text, username: name.value});
        }
    }

}