const Discord = require("discord.js");
const NSFW = require("anilewd-npm");
const lewd = new NSFW();

module.exports = {
    name: "hentai",
    run: async (client, message, args) => {
      if(!message.channel.nsfw && message.channel.id != '970054253525733386') return message.channel.send("Channel is not NSFW");
        const image = await lewd.hentai();

        const embed = new Discord.MessageEmbed()
                .setTitle(`Hentai Image`)
                .setColor(`#b60c0c`)
                .setTimestamp()
                .setFooter('oof')
                .setImage(image);
        message.channel.send(embed);
    }
}
