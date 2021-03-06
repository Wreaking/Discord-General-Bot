const { Client, Message, MessageEmbed } = require('discord.js');
const ms = require("ms")
const config = require("../../config.json")
module.exports = {
    name: 'gaend',
    description: "End a giveaway",
    usage: "gaend <messageID>",
    aliases: ['end'],
    /** 
     * @param {Client} client 
     * @param {Message} message 
     * @param {String[]} args 
     */
    run: async(client, message, args) => {
        if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("You do not have perm to use this command");

        if(!args[0]) return message.reply("You need to specify the message ID!")

        let giveaway = 
        client.giveawaysManager.giveaways.find((g) => g.prize === args.join(' ')) ||
        client.giveawaysManager.giveaways.find((g) => g.messageID === args[0]);

        if(!giveaway){
            return message.channel.send('Unable to find a giveaway for `'+ args.join(' ') + '`.');
        }
        client.giveawaysManager.edit(giveaway.messageID, {
            setEndTimestamp: Date.now()
        })
      
        .then(() => {
            message.channel.send('Giveaway will end in less than '+(client.giveawaysManager.options.updateCountdownEvery/1000)+' seconds...');
        })
        .catch((e) => {
            if(e.startsWith(`Giveaway with message ID ${giveaway.messageID} is already ended.`)){
                message.channel.send('This giveaway is already ended!');
            } else {
            message.channel.send('An error occured...');
            }
        })
            
    }
}
// CREATED BY WREAKING#5515
//IF YOU ARE USING IT PLEASE MENTION MY NAME OR MY BOTS NAME