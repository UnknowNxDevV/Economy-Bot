exports.execute = async (client, message, args) => {
    let users = [
        "Rainbow trout",
        "Tuna",
        "cod",
        "Mackerel"
    ];
    let amount = Math.floor(Math.random() * 200) + 100;
    let beg = await client.eco.beg(client.ecoAddUser, amount, { canLose: true, cooldown: 10000, customName: "search" });
    if (beg.onCooldown) return message.reply(`You have already fished! Come back after ${beg.time.minutes} minutes & ${beg.time.seconds} seconds.`);
    if (beg.lost) return message.channel.send(`**${users[Math.floor(Math.random() * users.length)]}:** taunted you and swam away LMAO!`);
    else return message.reply(`**${users[Math.floor(Math.random() * users.length)]}** Swam into your net and you sold it for **${beg.amount}** 💸. Now you have **${beg.after}** 💸.`);
};

exports.help = {
    name: "fish",
    aliases: [],
    usage: "fish"
}
