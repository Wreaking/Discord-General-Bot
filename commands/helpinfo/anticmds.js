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
// CREATED BY WREAKING#5515
//IF YOU ARE USING IT PLEASE MENTION MY NAME OR MY BOTS NAME