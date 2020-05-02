const Discord = require('discord.js');
const { prefix, token } = require('./config.json');
const talkedRecently = new Set();

const client = new Discord.Client();

const creeperMsg = new Discord.MessageEmbed();
creeperMsg.setTitle('<:creeper:706020688925949983>');
creeperMsg.setColor(0x00ff00);

client.once('ready', () => {
	console.log('Ready!');
});

client.on('message', message => {
    
    
    // Poke people! Get their attention!
    if(message.content.startsWith(`${prefix}poke`)) {
        let pokeUser = message.mentions.users.first();
        if (!talkedRecently.has(message.author.id)) {
            creeperMsg.setDescription('▬▬▬▬▬▬▬▬▬▬\n**Poking <@' + pokeUser.id + '>...** \:point_right:\n▬▬▬▬▬▬▬▬▬▬');
            message.channel.send(creeperMsg).then(sentMessage => {
                sentMessage.react('👉');
            })

            //poking...
            let i;
            pokeUser.send('<@' + pokeUser.id + '>, <@' + message.author.id + '> is summoning you!');

            talkedRecently.add(message.author.id);
            setTimeout(() => {
                talkedRecently.delete(message.author.id);
            }, 300000);
        } else {
            message.channel.send('** **\n▬▬▬▬▬▬▬▬▬▬\nWait 5 minutes before using this command again, <@' + message.author.id + '>\n▬▬▬▬▬▬▬▬▬▬');
        }
    } 



    // The classic creepah meme!
    else if(message.content.toLowerCase().includes('creeper')) {
        creeperMsg.setDescription('Awwww man!');
        message.channel.send(creeperMsg);
    }
    

    
    // "____ my ass!"

    else if(message.author.id === '83127253449314304') {
        message.channel.send(message.content + ' my ass! Also I\'m gay');
    }
    


    /*
    // Ricky and Chipotle!

    else if(message.author.id === '359521834166910977' && message.mentions.users.size !== 0 && message.mentions.users.first().id === '326179308232114180') {
        message.channel.send('Wanna get Chipotle?');

        var stop = 0;
        client.on('message', message => {
            while(stop != 1) {
                if(message.author.id === '326179308232114180' && message.content.includes('sure')) {
                    message.channel.send('Cool. Cool cool cool. See you later!');
                    console.log('test');
                    stop = 1;
                }
            }
        });
    }
    */



    // Testing embeds!
    else if(message.content.startsWith(`${prefix}embed`)) {
        const embed = new Discord.MessageEmbed();
        embed.setTitle('A slick little embed');
        embed.setColor(0x00ff00);
        embed.setDescription('Hello, this is a slick embed!');

        message.channel.send(embed);
    }
});

client.login(token);





/*
.then(
                client.on('messageReactionAdd', function(reaction, user) {
                    if(!user.bot) {
                        pokeUser.send('<@' + pokeUser.id + '>, <@' + user.id + '> is summoning you!');
                    }
                }))

*/