const axios = require('axios');
const  Discord = require('discord.js')
const { MessageEmbed } = require ('discord.js')
module.exports = {
        name: "shrug",
        run: async(client, message, args) => {
                    let tempmsg = await message.channel.send(new MessageEmbed().setColor('#00298c').setAuthor("Loading...", "https://cdn.discordapp.com/emojis/769935094285860894.gif"))
               tempmsg.delete();
const user = message.mentions.users.first() || client.users.cache.get(args[0]) || message.author;
          const tokena = "PASTE UR OWN TOKEN";
      
axios.get(`https://kawaii.red/api/gif/shrug/token=${tokena}/`).then(res => {
    const Embed = new Discord.MessageEmbed()
                        .setTitle(user.username + " is shrugging ")
                        .setDescription(" ")
            .setColor("#00298c")
            .setImage(res.data.response)
            .setTimestamp()
   return message.channel.send(Embed)
                .catch(function (error) {
                console.log(error);
            })
       })
    }
};