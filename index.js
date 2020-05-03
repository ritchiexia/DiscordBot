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
    
    
    /*
     * Poke people! Get their attention!
     */
    if(message.content.startsWith(`${prefix}poke`)) {
        let pokeUser = message.mentions.users.first();
        if (!talkedRecently.has(message.author.id)) {
            creeperMsg.setDescription('▬▬▬▬▬▬▬▬▬▬\n**Poking <@' + pokeUser.id + '>...** \:point_right:\n▬▬▬▬▬▬▬▬▬▬');
            message.channel.send(creeperMsg).then(sentMessage => {
                sentMessage.react('👉');
                const filter = reaction => reaction.emoji.name === '👉';
                const collector = sentMessage.createReactionCollector(filter, { time: 15000});
                collector.on('collect', r => pokeUser.send('<@' + pokeUser.id + '>, someone else is summoning you!'));
                collector.on('end', collected => console.log(`Collected ${collected.size} items`));
            });
            
            
            // Poking...
            let i;
            pokeUser.send('<@' + pokeUser.id + '>, <@' + message.author.id + '> is summoning you!');

            talkedRecently.add(message.author.id);
            setTimeout(() => {
                talkedRecently.delete(message.author.id);
            }, 120000);
        } else {
            creeperMsg.setDescription('▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬\nWait 2 minutes before using this command again, <@' + message.author.id + '>\n▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬');
            message.channel.send(creeperMsg);
        }
    } 


    /*
     * The classic creepah meme!
     */
    else if(message.content.toLowerCase().includes('creeper')) {
        creeperMsg.setDescription('Awwww man!');
        message.channel.send(creeperMsg);
    }
    

    /*
     * "____ my ass!"
     */
    else if(message.author.id === '83127253449314304') {
        message.channel.send('^ what he said. \:point_up:');
    }
    
    
    /*
     * Ricky and Chipotle!
     */
    else if(message.author.id === '359521834166910977' && message.mentions.users.size !== 0 && message.mentions.users.first().id === '326179308232114180') {
        message.channel.send('Wanna get Chipotle?');
        const chipotleFilter = m => m.content.toLowerCase().startsWith('sure');
        message.channel.awaitMessages(chipotleFilter, { max: 1, time: 10000, errors: ['time'] })
            .then(collected => message.channel.send('Cool. Cool cool cool.'))
            .catch(collected => console.log(`After 10 sec, only ${collected.size} out of 4 voted`));
    }
    

    /*
     * Reminder bot!
     */
    else if(message.content.startsWith(`${prefix}remind`) && message.content.length !== 7) {
        console.log('hello');
    }


    /*
    // Testing embeds!
    else if(message.content.startsWith(`${prefix}embed`)) {
        const embed = new Discord.MessageEmbed();
        embed.setTitle('A slick little embed');
        embed.setColor(0x00ff00);
        embed.setDescription('Hello, this is a slick embed!');

        message.channel.send(embed);
    }
    */
});

client.login(token);