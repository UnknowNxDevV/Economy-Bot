const { MessageEmbed } = require("discord.js");
const i = '<:infomation:779736273639440394>'
module.exports.run = async (bot, message, args) => {
    const usertag = message.member;
    let begembed = new MessageEmbed()
    .setColor("BLUE")
    .setDescription(`${i} **${usertag.user.username}** : Vote For Kcoins Here : https://top.gg/bot/911376535129325619/vote`)
    message.channel.send(begembed).catch();
}
