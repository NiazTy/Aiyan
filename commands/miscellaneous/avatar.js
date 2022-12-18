const { ActionRowBuilder, ButtonBuilder, EmbedBuilder } = require("discord.js")

module.exports = {
    name: "avatar",
    description: "",
    category: "miscellaneous",
    aliases: "ava",
    usage: "[user]",

    execute(message, args) {
        const usersA = message.mentions.users.first() || message.guild.members.cache.get(args[0]) || message.author
        const imageURL = usersA.displayAvatarURL({ format: "png", size: 4096 })

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
			.setURL(imageURL)
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
