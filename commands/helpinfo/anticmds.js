const { MessageEmbed } = require ("discord.js")
module.exports = {
  name:'help-anti',
  aliases:["help-anticommands"],
  run: async (client, message, args) => {
    const embed = new MessageEmbed() 
 .addField('__Anti Commands__','\`setswear\` | \`setlink\`')


 
        .setTimestamp()
.setColor('#00298c')
message.lineReply(embed)
  }
}