const axios = require('axios');
const Discord = require('discord.js')
const { MessageEmbed } = require ('discord.js')
module.exports = {
        name: "laugh",
        run: async(client, message, args) => {
                    let tempmsg = await message.channel.send(new MessageEmbed().setColor('#00298c').setAuthor("Loading...", "https://cdn.discordapp.com/emojis/769935094285860894.gif"))
              tempmsg.delete(); 
const user = message.mentions.users.first() || client.users.cache.get(args[0]) || message.author;
          const tokena = "PASTE UR OWN TOKEN";
      
axios.get(`https://kawaii.red/api/gif/kiss/token=${tokena}/`).then(res => {
    const Embed = new Discord.MessageEmbed()
            .setTitle(user.username + " You have been kissed! ")
        .setDescription((user.toString() + " got kissed by " + message.author.toString()))
            .setColor("#00298c")
            .setImage(res.data.response)
            .setFooter("NeoBot")
            .setTimestamp()
            
   return message.channel.send(Embed)
                .catch(function (error) {
                console.log(error);
            })
       })
    }
};