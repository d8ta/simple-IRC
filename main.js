var irc = require('irc');
var client = new irc.Client('chat.freenode.org', 'D8ta', {
    channels: ['#schnitzelwirt']
});

client.addListener('message', function (from, to, message) {
    console.log(from + ' => ' + to + ': ' + message);
    $('#chatwindow').append('<p>' + from + ' => ' + to + ': ' + message + '</p>');
});

client.addListener('error', function(message) {
    console.log('error: ', message);
});

client.addListener('message#schnitzelwirt', function (from, message) {
    console.log(from + ' => #schnitzelwirt: ' + message);
});


function say() {
    var speak = document.getElementById("text").value;
    document.getElementById("text").innerHTML = speak;
    client.say('#schnitzelwirt', speak);
}

function disco() {
    client.part('#schnitzelwirt');

}function connect() {
    client.join('#schnitzelwirt nodewebkit');
}
