const { EmbedBuilder } = require("discord.js")

module.exports = {
    name: "info",
    description: "",
    category: "🧾 General",
    aliases: "information",
    usage: "<bot|user>",
    args: true,

    execute(message, args) {
        if(args[0]) {
            if (args[0] === "bot") {

                const bot = new EmbedBuilder()
                    .setTitle("My Information")
            } 
            
            else if (args[0] === "user") {
                message.channel.send(`Username : ${message.author.username}`)
            }
        }
    }
}
