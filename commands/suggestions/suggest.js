const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const db = require("quick.db");
 
module.exports = {
  name: "suggest",
  category:"moderation",
  
  run: async (client, message, args) => {
   
  let channel = await db.fetch(`suggestion_${message.guild.id}`);
    if (channel === null) return;
  
  const suggestionQuery = args.join(" ");
  if(!suggestionQuery) return message.reply("Please Suggest Something.");
    
  const embed = new MessageEmbed()
         
       .setAuthor(message.author.tag, message.author.displayAvatarURL({dynamic: true}))
       .setDescription(`${suggestionQuery}`)
       .setColor("#00298c")
       .setFooter("Powered by NeoBot")
       .setTimestamp();
       
    const done = new MessageEmbed()
       .setDescription(` Your suggestion is Submitted here, <#${channel}>\n\nNote: You agreed to get a DM on a reply over your Suggestion!`)
       .setColor("#00298c")
       
    message.channel.send(done)
    
    let msgEmbed = await message.guild.channels.cache.get(channel).send(embed)
    
    await msgEmbed.react('✅')
    await msgEmbed.react('⛔')
        await msgEmbed.react('❌')
  }
}
// CREATED BY WREAKING#5515
//IF YOU ARE USING IT PLEASE MENTION MY NAME OR MY BOTS NAME