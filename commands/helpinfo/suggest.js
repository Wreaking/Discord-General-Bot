const { MessageEmbed } = require ("discord.js")
module.exports = {
  name:'help-suggest',
  aliases:["help-suggestion", 'help-suggestions'],
  run: async (client, message, args) => {
    const embed = new MessageEmbed()

.addField('__SUGGESTION COMMANDS__','\`setsuggest\` | \`reply-suggest\` | \`suggest\`')
        .setTimestamp()
.setColor('#00298c')
message.lineReply(embed)
  }
}
// CREATED BY WREAKING#5515
//IF YOU ARE USING IT PLEASE MENTION MY NAME OR MY BOTS NAME