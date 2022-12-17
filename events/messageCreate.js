const { Prefix, OwnerID } = require("../resources/config.json")

const escapeRegex = (string) => {
	return string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
}

module.exports = {
	name: "messageCreate",

	async execute(message) {

		const { client, guild, channel, content, author } = message

		if (
			message.content == `<@${client.user.id}>` ||
			message.content == `<@!${client.user.id}>`
		) {
			require("./onMention").execute(message)
			return
		}
		const checkPrefix = Prefix.toLowerCase()

		const prefixRegex = new RegExp(
			`^(<@!?${client.user.id}>|${escapeRegex(checkPrefix)})\\s*`
		);

		if (!prefixRegex.test(content.toLowerCase())) return

		const [matchedPrefix] = content.toLowerCase().match(prefixRegex)

		const args = content.slice(matchedPrefix.length).trim().split(/ +/)

		const commandName = args.shift().toLowerCase()

		if (!message.content.startsWith(matchedPrefix) || message.author.bot)
			return

		const command =
			client.commands.get(commandName) ||
			client.commands.find(
				(cmd) => cmd.aliases && cmd.aliases.includes(commandName)
			)

		if (!command) return;

		if (command.ownerOnly && message.author.id !== OwnerID) {
			return message.reply({ content: `💢 Maaf ${message.author}, Tapi kamu tidak memiliki akses ke perintah ini!` })
		}

		if (command.guildOnly && message.channel.type === "dm") {
			return message.reply({
				content: "Aku tidak dapat menjalankan perintah itu didalam DM's!",
			});
		}

		if (command.permissions) {
			const authorPerms = message.channel.permissionsFor(message.author)
			if (!authorPerms || !authorPerms.has(command.permissions)) {
				return message.reply({ content: `💢 Maaf ${message.author}, Kamu tidak dapat melakukan itu!` })
			}
		}

		if (command.args && !args.length) {
			let reply = `Argumen yang diberikan kurang, ${message.author}!`

			if (command.usage) {
				reply += `\nPenggunaan yang benar: \`${Prefix}${command.name} ${command.usage}\``
			}

			return message.channel.send({ content: reply })
		}

		try {
			command.execute(message, args)
		} catch (error) {
			console.error(error)
			message.reply({
				content: "Ada kesalahan saat mencoba mengeksekusi perintah itu!",
			})
		}
	},
}
