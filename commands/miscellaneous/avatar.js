const { ActionRowBuilder, ButtonBuilder, EmbedBuilder } = require("discord.js")

module.exports = {
    name: "avatar",
    description: "Shows the avatar of the person you are talking about",
    category: "🐛 Miscellaneous",
    aliases: "",
    usage: "[user]",

    execute(message, args) {
        const usersA = message.mentions.users.first() || message.guild.members.cache.get(args[0]) || message.author

        const avatar = new EmbedBuilder()
            .setColor(0xffffff)
            .setAuthor({
                name: message.author.tag, 
                iconURL: message.author.displayAvatarURL()
            })
            .setTitle(`📸 **Avatar**`)
            .setImage(usersA.displayAvatarURL({ format: "png", size: 4096}))
            .setTimestamp()

        const actionRow = new ActionRowBuilder()
		.addComponents([
			new ButtonBuilder()
			.setLabel('LINK')
			.setURL(usersA.displayAvatarURL({ dynamic: true, size: 4096, format: "png" }))
			.setStyle(5)
		])

        message.channel.send({ 
            embeds: [ 
                avatar 
            ],
            components: [
                actionRow
            ]
        })
    }
}
