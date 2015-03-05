/**
 * Created by danielraudschus on 05.03.15.
 */
var irc = require('irc');
var client = new irc.Client('chat.freenode.org', 'D8ta', {
    channels: ['#schnitzelwirt']
});

client.addListener('message', function (from, to, message) {
    console.log(from + ' => ' + to + ': ' + message);
});


function say() {
    client.say('#schnitzelwirt', ";-)");
}