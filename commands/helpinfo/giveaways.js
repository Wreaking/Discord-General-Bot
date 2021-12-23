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
// CREATED BY WREAKING#5515
//IF YOU ARE USING IT PLEASE MENTION MY NAME OR MY BOTS NAME