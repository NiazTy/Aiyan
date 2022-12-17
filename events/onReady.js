const { ActivityType } = require("discord.js")
const config = require("../resources/config.json")

module.exports = {
    name : "ready",
    execute(client) {
        client.user.setPresence({
                activities: [
                {
                    "name": "Ahelp | Aiyan!",
                    "type": ActivityType.Listening
                }
            ],
            status: config.STATUS,
            afk: config.AFK
        })

        console.log(`Aku berhasil masuk dengan nama user ${client.user.username}`)
        console.log("")
        console.log("+——————————————————————————————————+")
        console.log(`       ${client.user.username} Siap Membantumu!`)
        console.log(`      Developed by Naiyzk#6994`)
        console.log("+——————————————————————————————————+")
        console.log("")
        console.log("Website: https://Kiyzan.my.id")
        config.YoutubeAPIKey || console.log("\nKamu belum menetapkan API key dalam konfigurasi! API Key Google diperlukan agar pencarian & daftar putar YouTube berfungsi.\nAnda dapat membuatnya di sini: https://console.developers.google.com/apis/credentials\n\nUntuk bantuan, silakan DM aku di discord")
    }
}
