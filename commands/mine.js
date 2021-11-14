exports.execute = async (client, message, args) => {
    let users = [
        "rocks",
        "iron",
        "diamonds",
        "rubys"
    ];
    let amount = Math.floor(Math.random() * 80) + 50;
    let beg = client.eco.beg(client.ecoAddUser, amount, { canLose: true });
    if (beg.onCooldown) return message.reply(`you have already mined! Come back after ${beg.time.seconds} seconds.`);
    if (beg.lost) return message.channel.send(`**${users[Math.floor(Math.random() * users.length)]}:** went into your bag but you relised there was a hole LMAO! Try again later.`);
    else return message.reply(`**${users[Math.floor(Math.random() * users.length)]}** somehow fell into your hands and you sold them for **${beg.amount}** 💸. Now you have **${beg.after}** 💸.`);
};

exports.help = {
    name: "mine",
    aliases: [],
    usage: "mine"
}
