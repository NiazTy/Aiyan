const { ActionRowBuilder, ButtonBuilder, EmbedBuilder } = require("discord.js")

module.exports = {
    name: "avatar",
    description: "Shows the avatar of the person you are talking about",
    category: "🐛 Miscellaneous",
    aliases: "",
    usage: "[user]",

    execute(message, args) {
        const users = message.mentions.users.first() || message.author

        const avatar = new EmbedBuilder()
            .setColor(0xffffff)
            .setAuthor({
                name: message.author.tag, 
                iconURL: message.author.displayAvatarURL()
            })
            .setTitle(`📸 **Avatar**`)
            .setImage(`https://cdn.discordapp.com/avatars/${users.id}/${users.avatar}.webp?size=4096`)
            .setTimestamp()

        const actionRow = new ActionRowBuilder()
		.addComponents([
			new ButtonBuilder()
			.setLabel('LINK')
			.setURL(`https://cdn.discordapp.com/avatars/${users.id}/${users.avatar}.png?size=4096`)
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
