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
