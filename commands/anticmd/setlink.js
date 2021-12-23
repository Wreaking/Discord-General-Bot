const db = require ('quick.db')
const { MessageEmbed } = require ('discord.js')
module.exports = {
    name:"setswear",
    run: async (client, message, args, db) => {
      try{
                  const check = client.emojis.cache.find(x => x.name === "Neo_Verified")
const cross = client.emojis.cache.find(x => x.name === "Neo_Cross")
        if (!message.channel.permissionsFor(message.author).has("MANAGE_GUILD")) return message.channel.send(
      new MessageEmbed()
      .setTitle(`${cross} | Invalid`)
      .addField('Reason','You need to have **MANAGE_GUILD** permission to execute the command')
                .setColor('#00298c')
        .setFooter(`Requested by ${message.author.username}`, message.author.displayAvatarURL())
    );
     if(!message.guild.me.hasPermission('MANAGE_MESSAGES')) return message.channel.send(
      new MessageEmbed()
      .setTitle(`${cross} | Invalid`)
      .addField('Reason','I need to have **MANAGE_MESSAGES** permission to execute the command')
                .setColor('#00298c')
        .setFooter(`Requested by ${message.author.username}`, message.author.displayAvatarURL())
    );

        var option = args.join(" ")
        if(!option) {
            return message.lineReply(
              new MessageEmbed()
              .setTitle(`${cross} | Invalid`)
              .addField('Reason ',`Please provide an option! (\`on - off\`)`)
                      .setColor('#cc0000')
        .setFooter(`Requested by ${message.author.username}`, message.author.displayAvatarURL())
     )
        }
        if(
            option.toLowerCase() !== "on" &&
            option.toLowerCase() !== "off"
        ) {
            return message.lineReply(
              new MessageEmbed()
              .setTitle(`Invalid`)
              .addField('Reason,'` Invalid second argument!`)
                      .setColor('#cc0000')
        .setFooter(`Requested by ${message.author.username}`, message.author.displayAvatarURL())
     )
        }
        if(option.toLowerCase() == "on") {
            let antiLink = await db.get(`swear_${message.guild.id}`)
            if(antiLink === "enabled") {
                return message.lineReply(
              new MessageEmbed()
              .setTitle(`Invalid`)
              .addField('Reason',`swear feature is already enabled on this server!`)
              .addField("Hint",'You can disable it by commanding \`n!setswear off\`')
                )
            }
            
            db.set(`swear_${message.guild.id}`, "enabled")
            message.lineReply(
              new MessageEmbed()
              .setTitle(`Successful`)
              .addField('Reason',`Successfully enabled swear feature.`)
              .addField('Feature','In this feature, i will detect curse words contain in my database (150+curse words)')
                      .setColor('#cc0000')
        .setFooter(`Requested by ${message.author.username}`, message.author.displayAvatarURL())
     )
              
        }else {
            if(option.toLowerCase() == "off") {
                let antiLink = await db.get(`swear_${message.guild.id}`)
                if(antiLink === "disabled") {
                    return message.lineReply(
              new MessageEmbed()
              .setTitle(`Invalid`)
              .addField('Reason',`Swear feature is already disabled on this server!`)
              .addField("Hint",'You can disable it by commanding \`n!setswear on\`')
                      .setColor('#cc0000')
        .setFooter(`Requested by ${message.author.username}`, message.author.displayAvatarURL())
            )
     
                }
                db.set(`swear_${message.guild.id}`, "disabled")
                message.lineReply(
              new MessageEmbed()
              .setTitle(`${check} | Successful`)
              .addField('Reason',`Successfully disabled Swear feature`)
                      .setColor('#cc0000')
        .setFooter(`Requested by ${message.author.username}`, message.author.displayAvatarURL())
     )
        }
    }
    } catch (e) {
      return message.channel.send(
        `An error has occured, i think i do not have permissions please try again.`
      
      );
  }
}
}
// CREATED BY WREAKING#5515
//IF YOU ARE USING IT PLEASE MENTION MY NAME OR MY BOTS NAME