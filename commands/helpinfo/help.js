const pagination = require('discord.js-pagination');
const Discord = require('discord.js');

const { MessageEmbed } = require('discord.js')

const DiscordButtons = require('discord-buttons'); //Requiring Discord-BUttons module.

let button = require('discord-buttons');

module.exports = {
    name: "help",
category: "help",
    description: "The help command, what do you expect?",

       run: async (client, message, args) => {
           let firstbutton = new button.MessageButton()
      .setLabel("Support server")
      .setStyle("url")
      .setURL("https://discord.gg/3hMK4bVxt5")
    let thirdbutton = new button.MessageButton()
      .setLabel("invite me")
      .setStyle("url")
      .setURL("https://discord.com/api/oauth2/authorize?client_id=882247829039505439&permissions=8&scope=bot%20applications.commands")
    //button row:
    let row1 = new button.MessageActionRow()
      .addComponent(firstbutton)
      .addComponent(thirdbutton)
      .addComponent(secondbutton)

        //Sort your commands into categories, and make seperate embeds for each category
        const listofcommands = new Discord.MessageEmbed()
        .setTitle('LIST OF COMMANDS')
          .setDescription("Hey! This is an another general bot consist of fun and automod commands. You can get this type of bot by joining our [supportiveserver](https://discord.gg/3hMK4bVxt5) \n My prefix is `e!` \n You can mention me if you forgot my prefix```yaml\nHere are the commands:```")
        .setColor("#00298c")
.addFields(
  {name:'Actions', value:'e!help-actions', inline:true},
  {name:'Giveaways', value:'e!help-giveaway', inline:true},
  {name:'Anticommands', value:'e!help-anti', inline:true},
  {name:'reddits', value:'e!help-reddit', inline:true},
  {name:'Suggestion', value:'e!help-suggest', inline:true},
  {name:'Fun commands', value:'e!help-fun', inline:true},
)
  .setTimestamp()
  .setFooter(`Requested by ${message.author.username} | Made by Wreaking#5515 | Copyrights Reserved`, message.author.displayAvatarURL());


return message.channel.send({
    embed: listofcommands,
    components: [row1],
  });
       }
}
// CREATED BY WREAKING#5515
//IF YOU ARE USING IT PLEASE MENTION MY NAME OR MY BOTS NAME