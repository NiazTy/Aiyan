const { Prefix } = require("../resources/config.json")

 module.exports = {
     execute(message) {
         return message.channel.send(
             `🖋️ Hi ${message.author}!, apakah ada yang bisa saya bantu? Terlihatnya ada kesulitan, tolong silahkan ketik \`${Prefix}help\` atau \`/help\` `
         )
     },
 }
