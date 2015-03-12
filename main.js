var irc = require('irc');
var client = new irc.Client('chat.freenode.org', 'D8ta', {
    channels: ['#schnitzelwirt']
});

// shows message and name
client.addListener('message', function (from, to, message) {
    console.log(from + ' => ' + to + ': ' + message);
    $('#chatwindow').append('<p>' + from + ' => ' + to + ': ' + message + '</p>');
});

// throw error message if nessecary
client.addListener('error', function(message) {
    console.log('error: ', message);
});

// Namelist via Object.keys from the Object
client.addListener('names', function (channel, names) {
    var chatter = Object.keys(names);
    console.log(chatter);
    $('#names').append('<p> chatter' + chatter + '</p>');

});

// function for texting to the IRC chat
function say() {
    var speak = document.getElementById("text").value;
    $('#chatwindow').append('<p> me =>' + speak + '</p>');
    client.say('#schnitzelwirt', speak);
}

// disconnecet from IRC
function disco() {
    client.part('#schnitzelwirt');
}

// connect to IRC
function connect() {
    client.join('#schnitzelwirt nodewebkit');
}
