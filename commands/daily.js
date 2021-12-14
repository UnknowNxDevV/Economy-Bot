module.exports.execute = async (client, message, args) => {
    let amount = Math.floor(Math.random() * 3000) + 1000;
    let addMoney = client.eco.daily(client.ecoAddUser, amount);
    if (addMoney.onCooldown) return message.reply(`You have already claimed your daily credit. Come back after ${addMoney.time.hours} hours, ${addMoney.time.minutes} minutes & ${addMoney.time.seconds} seconds to claim it again.`);
    else return message.reply(`You have claimed **${addMoney.amount}** as your daily credit**.`);
};

module.exports.help = {
    name: "daily",
    aliases: [],
    usage: "daily"
}
