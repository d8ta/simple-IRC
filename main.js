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

// Namelist
client.addListener('names', function (channel, names) {
    var chatter = Object.keys(names);
    console.log(chatter);
    $('#names').append('<p> chatter' + chatter + '</p>');

});

function say() {
    var speak = document.getElementById("text").value;
    $('#chatwindow').append('<p> me =>' + speak + '</p>');
    client.say('#schnitzelwirt', speak);
}

function disco() {
    client.part('#schnitzelwirt');

}function connect() {
    client.join('#schnitzelwirt nodewebkit');
}
