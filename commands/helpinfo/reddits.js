const { MessageEmbed } = require ("discord.js")
module.exports = {
  name:'help-reddits',
  aliases:["help-reddit"],
  run: async (client, message, args) => {
    const embed = new MessageEmbed() 
 .addField('__REDDITS__',' \`blacktwitter\` | \`comics\` | \`jokes\`| \`wholesome\` | \`meme\` | \`automeme\`')


 
        .setTimestamp()
.setColor('#00298c')
message.lineReply(embed)
  }
}