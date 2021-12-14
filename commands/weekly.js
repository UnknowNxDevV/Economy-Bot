exports.execute = async (client, message, args) => {
    let amount = Math.floor(Math.random() * 8000) + 1000
    let addMoney = client.eco.weekly(client.ecoAddUser, amount);
    if (addMoney.onCooldown) return message.reply(`You have already claimed your weekly credit. Come back after ${addMoney.time.days} days, ${addMoney.time.hours} hours, ${addMoney.time.minutes} minutes & ${addMoney.time.seconds} seconds to claim it again.`);
    else return message.reply(`You have claimed **${addMoney.amount}**as your weekly credit & now you have.`);
};

exports.help = {
    name: "weekly",
    aliases: [],
    usage: "weekly"
}
