exports.execute = async (client, message, args) => {
    let users = [
        "deer",
        "bear",
        "boar",
        "horse"
    ];
    let amount = Math.floor(Math.random() * 80) + 50;
    let beg = client.eco.beg(client.ecoAddUser, amount, { canLose: true });
    if (beg.onCooldown) return message.reply(`you have already hunted! Come back after ${beg.time.seconds} seconds.`);
    if (beg.lost) return message.channel.send(`**${users[Math.floor(Math.random() * users.length)]}:** kicked you and you went flying away LMAO! Try again later.`);
    else return message.reply(`**${users[Math.floor(Math.random() * users.length)]}** got shot and you sold it for **${beg.amount}** 💸. Now you have **${beg.after}** 💸.`);
};

exports.help = {
    name: "hunt",
    aliases: [],
    usage: "hunt"
}
