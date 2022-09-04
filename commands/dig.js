exports.execute = async (client, message, args) => {
    let users = [
        "silver",
        "rocks",
        "gold",
        "iron"
    ];
    let amount = Math.floor(Math.random() * 200) + 100;
    let beg = await client.eco.beg(client.ecoAddUser, amount, { canLose: true, cooldown: 15000, customName: "dig" });
    if (beg.onCooldown) return message.reply(`You have already dug! Come back after ${beg.time.minutes} minutes & ${beg.time.seconds} seconds.`);
    if (beg.lost) return message.channel.send(`**${users[Math.floor(Math.random() * users.length)]}:** a sand storm started and you got sand in your eyes LMAO!`);
    else return message.reply(`**${users[Math.floor(Math.random() * users.length)]}** somehow rolled into your hands and you sold it for **${beg.amount}**.`);
};

exports.help = {
    name: "dig",
    aliases: ["dig"],
    usage: "dig"
}

//coded By Unknown