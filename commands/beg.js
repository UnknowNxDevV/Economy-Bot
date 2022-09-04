exports.execute = async (client, message, args) => {
    let users = [
        "PewDiePie",
        "T-Series",
        "Sans",
        "Zero"
    ];
    let amount = Math.floor(Math.random() * 200) + 100;
    let beg = await client.eco.beg(client.ecoAddUser, amount, { canLose: true, cooldown: 15000, customName: "beg" });
    if (beg.onCooldown) return message.reply(`You have already begged! Come back after ${beg.time.seconds} seconds.`);
    if (beg.lost) return message.channel.send(`**${users[Math.floor(Math.random() * users.length)]}:** You were caught! You couldn't get money kiddo.`);
    else return message.reply(`**${users[Math.floor(Math.random() * users.length)]}** you begged and got **${beg.amount}** .`);
};

exports.help = {
    name: "beg",
    aliases: ["beg"],
    usage: "beg"
}


//coded By Unknown