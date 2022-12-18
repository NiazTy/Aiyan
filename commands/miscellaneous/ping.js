module.exports = {
    name: "ping",
    description: "",
    category: "🐛 Miscellaneous",
    aliases: "",
    usage: "",

    execute(message) {
        message.channel.send('🏓 Ping, get your ping...').then (async (msg) =>{
            msg.delete()
            message.channel.send(`🎉 Pong, Your latency is ${Date.now() - message.createdTimestamp}`)
          })
    }
}
