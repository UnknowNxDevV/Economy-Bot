exports.execute = async (client, message, args) => {
    let users = [
        "rocks",
        "iron",
        "diamonds",
        "rubys"
    ];
    let amount = Math.floor(Math.random() * 200) + 100;
    let beg = await client.eco.beg(client.ecoAddUser, amount, { canLose: true, cooldown: 15000, customName: "mine" });
    if (beg.onCooldown) return message.reply(`You have already mined! Come back after ${beg.time.minutes} minutes & ${beg.time.seconds} seconds.`);
    if (beg.lost) return message.channel.send(`**${users[Math.floor(Math.random() * users.length)]}:** went into your bag but you relized there was a hole LMAO!`);
    else return message.reply(`**${users[Math.floor(Math.random() * users.length)]}** somehow fell into your hands and you sold it for **${beg.amount}** 💸. Now you have **${beg.after}** 💸.`);
};

exports.help = {
    name: "mine",
    aliases: [],
    usage: "mine"
}
