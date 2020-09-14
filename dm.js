module.exports.run= async(client, message, args) => {

let user = message.mentions.users.first()
if (!user) return message.reply("please mention a user!")
if (user.id === message.author.id) return message.channel.send("You can't send yourself messages")
let message = args.slice(1).join(' ')
if (!message) return message.reply("You must provide a message!")

message.channel.send("Successfully sent")

user.send(message)
}
module.exports.conf = {
aliases: ["dmuser"]
}

module.exports.help = {
name: "dm"
}
