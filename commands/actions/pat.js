const client = require('nekos.life');
const  Discord = require('discord.js')
const neko = new client();

const { MessageEmbed } = require ('discord.js')
module.exports = {
  name: "pat",
  category: "🤩 Emotions Commands",
  description: "pats a mentioned user",
  usage: "pat [@User]",
  run: async (client, message, args) => {
                  let tempmsg = await message.channel.send(new MessageEmbed().setColor('#00298c').setAuthor("Loading...", "https://cdn.discordapp.com/emojis/769935094285860894.gif"))
               tempmsg.delete();
    let user = message.mentions.users.first();
    if(!user) message.author;
       
        async function work() {
        let owo = (await neko.sfw.pat());

        const patembed = new Discord.MessageEmbed()
        .setTitle(user.username + " !!! ")
        .setDescription((user.toString() + " got patted by " + message.author.toString()))
        .setImage(owo.url)
        .setColor(config.colors.yes).setFooter(client.user.username, config.AVATARURL)
        .setURL(owo.url);
        message.channel.send(patembed);

}

      work();
}
                };
                // CREATED BY WREAKING#5515
//IF YOU ARE USING IT PLEASE MENTION MY NAME OR MY BOTS NAME