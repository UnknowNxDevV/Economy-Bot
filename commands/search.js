exports.execute = async (client, message, args) => {
    let users = [
        "Pocket",
        "T-Shirt",
        "pewdiepies's Databse",
        "Street"
    ];
    let amount = Math.floor(Math.random() * 200) + 100;
    let beg = await client.eco.beg(client.ecoAddUser, amount, { canLose: true, cooldown: 15000, customName: "search" });
    if (beg.onCooldown) return message.reply(`You have already Searched! Come back after ${beg.time.minutes} minutes & ${beg.time.seconds} seconds.`);
    if (beg.lost) return message.channel.send(`**${users[Math.floor(Math.random() * users.length)]}:** You were caught! You couldn't get money kiddo.`);
    else return message.reply(`**${users[Math.floor(Math.random() * users.length)]}** was somewhat profitable, you found **${beg.amount}**.`);
};

exports.help = {
    name: "search",
    aliases: [],
    usage: "search"
}

//coded By Unknown