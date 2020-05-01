const Discord = require('discord.js');
const { prefix, token } = require('./config.json');
new Discord.Message(705681327231467541, String, 591893573167874051);

const client = new Discord.Client();

client.once('ready', () => {
	console.log('Ready!');
});

client.on('message', message => {
	if(message.content.startsWith(`${prefix}ping`)) {
        message.channel.send(`${message.author.username}`);
    } else if(message.content === `${prefix}nig`) {
        message.channel.send('ger.');
    } else if(message.content.startsWith(`${prefix}poke`)) {
        let pokeUser;
        if(message.mentions) {
            pokeUser = message.
        }
        
        let i;
        for(i = 0; i < 5; i++) {
            message.channel.send('poke');
        }
    }
    
    else if(message.mentions.users.first() === '@326179308232114180') {
        message.channel.send('Wanna get Chipotle?');
    }
});

client.login(token);