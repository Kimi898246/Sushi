const { Client, Message, MessageEmbed } = require('discord.js');

module.exports = {
  
    name: 'badges',
    category: 'info',
    run: async(client, message, args) => {
        const user = message.mentions.users.first() || message.author;

        const flags = user.flags.toArray();

        console.log(flags);
        
        message.channel.send(`${user}'s badges: ${flags.join(', ')}`)
    }
}