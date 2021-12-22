const { MessageEmbed } = require ("discord.js")
module.exports = {
  name:'help-giveaways',
  aliases:["help-giveaway"],
  run: async (client, message, args) => {
    const embed = new MessageEmbed()
    .addField('__GIVEAWAY COMMANDS__','\`start\` | \`reroll\` | \`end\`')
.setTimestamp()
.setColor('#0099ff')
message.lineReply(embed)
  
}
}