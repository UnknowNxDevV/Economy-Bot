exports.execute = async (client, message, args) => {
    let users = [
        "Rainbow trout",
        "Tuna",
        "cod",
        "Mackerel"
    ];
    let amount = Math.floor(Math.random() * 80) + 50;
    let beg = client.eco.fish(client.ecoAddUser, amount, { canLose: true });
    if (fish.onCooldown) return message.reply(`you have already fished! Come back after ${fish.time.seconds} seconds.`);
    if (fish.lost) return message.channel.send(`**${users[Math.floor(Math.random() * users.length)]}:** taunted you and swam away LMAO! Try again later.`);
    else return message.reply(`**${users[Math.floor(Math.random() * users.length)]}** went into your net and you sold it for **${fish.amount}** 💸. Now you have **${fish.after}** 💸.`);
};

exports.help = {
    name: "fish",
    aliases: [],
    usage: "fish"
}
