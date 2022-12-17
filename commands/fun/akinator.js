const akinator = require("discord.js-akinator")

module.exports = {
    name: "akinator",
    description: "He will try to read your mind through a sequence of questions.",
    category: "🎉 Fun",
    aliases: "readmymind",
    usage: "",

    execute(message)  {
        akinator(message, {
            useButtons: true,
            embedColor: "#ffffff"
        })
      }
}
