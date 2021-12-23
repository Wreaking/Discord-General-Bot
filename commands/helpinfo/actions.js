const { MessageEmbed } = require ("discord.js")
module.exports = {
  name:'help-actions',
  run: async (client, message, args) => {
    const embed = new MessageEmbed()

.addField('__ACTIONS COMMANDS__','\`kiss\` | \`laugh\` | \`lonely\` | \`mad`\` | \`pat\` | \`peek\` | \`run\` | \`shrug\` | \`sleepy\` | \`uwu\` | \`wave\` | \`yeet\`')
        .setTimestamp()
.setColor('#00298c')
message.lineReply(embed)
  }
}
// CREATED BY WREAKING#5515
//IF YOU ARE USING IT PLEASE MENTION MY NAME OR MY BOTS NAME