const { EmbedBuilder } = require('discord.js')

module.exports = {
    name: "invite",
    description: "Invite me to your server",
    category: "🧾 General",
    aliases: "",
    usage: "",

    execute(message) {
        message.channel.send(
            `${message.author}` + "Add me to your server through the link below\n" + "https://s.id/add-aiyan"
        )
    }
}
