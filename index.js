const Discord = require("discord.js");
const { MessageEmbed, Collection, Client } = require ('discord.js')
  const db = require ('quick.db')
  const keepAlive = require('./server.js')
keepAlive()
  require('discord-reply');
  const prefix = 'e!'
// Request the Discord Client
require("dotenv").config();
const client = new Client({
	disableMentions: 'everyone'
});

client.commands = new Collection();
client.aliases = new Collection();

['command'].forEach(handler => {
	require(`./handlers/${handler}`)(client);
});

const fs = require("fs");
const { readdirSync } = require("fs");
const { join } = require("path");
// Login the discord bot using Discord Client

client.on('ready', () => {
  console.log(`https://discord.com/oauth2/authorize?client_id=${client.user.id}&permissions=8&scope=bot`);
});
// Log the startup + make a status
client.on("ready", async => {
    // Log that the bot started
    console.log(`Bot started (Made by Wreaking (don't steal my credits))`)
})

//WHEN SOMEONE MESSAGE
client.on('message', async message => {
	if (message.author.bot) return;
	if (!message.guild) return;
	if (!message.content.startsWith(prefix)) return;
	if (!message.member)
		message.member = await message.guild.fetchMember(message);

	const args = message.content
		.slice(prefix.length)
		.trim()
		.split(/ +/g);
	const cmd = args.shift().toLowerCase();

	if (cmd.length === 0) return;

	let command = client.commands.get(cmd);
	if (!command) command = client.commands.get(client.aliases.get(cmd));
	if (command) command.run(client, message, args, db);
});
// Create the antiswear message event
client.on("message", async (message, guild, channel, member) => {
  
  const { MessageEmbed } = require ('discord.js')
 const check = client.emojis.cache.find(x => x.name === "Neo_Warning")

    let antilink = await db.get(`antilink_${message.guild.id}`)
    if(antilink === "disabled"|| antilink === null) return;
const noWords = JSON.parse(fs.readFileSync("./words/blockedlinks.json"));
    const msg = message.content.toLowerCase();
    for (let i = 0; i < noWords["blockedlinks"].length; i++) {

        // Check the message
        if (msg.includes(noWords["blockedlinks"] [i])) {
            // Remove message
         
        message.delete().catch(() => null)

        message.channel.send(
          new MessageEmbed()
                .setColor('#00298c')
                 .setThumbnail(message.author.displayAvatarURL({ dynamic: true }))
                .setTitle(`${check} | Scam Link Detected`)
                .addFields(
                  {name:'User', value:`<@${message.author.id}>`, inline:true},
                  {name: 'ID', value:`${message.author.id}`, inline:true},
                  {name:'aka', value:`${message.author.username + "#" + message.author.discriminator}` , inline:true}
                  )
                  .addField('Reason','Sending scam links which can either be scam or virus')

                .setFooter('Powered by NeoBot')
                .setTimestamp());

                  
        
        }
    }
 
})
client.on("message", async (message, guild, channel, member) => {
  
  const { MessageEmbed } = require ('discord.js')
  const db = require ('quick.db')
 const check = client.emojis.cache.find(x => x.name === "Neo_Warning")

    let antilink = db.get(`swear_${message.guild.id}`)
    if(antilink === "disabled"|| antilink === null) return;
const noWords = JSON.parse(fs.readFileSync("./words/blockedwords.json"));
    // requesting the file
    const msg = message.content.toLowerCase();

  

    for (let i = 0; i < noWords["blockedwords"].length; i++) {

        // Check the message
        if (msg.includes(noWords["blockedwords"] [i])) {
            // Remove message
        message.delete().catch(() => null)
       


    message.delete().catch(() => null)
    message.channel.send(
      new MessageEmbed()
      .setDescription(`You cannot swear in this server`)//You can change the sentence if you want
       .addFields(
                  {name:'User', value:`<@${message.author.id}>`, inline:true},
                  {name: 'ID', value:`${message.author.id}`, inline:true},
                  {name:'aka', value:`${message.author.username + "#" + message.author.discriminator}` , inline:true}
                  )
      .setColor(`#00298c`)
        .setThumbnail(message.author.displayAvatarURL({ dynamic: true }))
                .setFooter('Powered by NeoBot')
                .setTimestamp()
    ).then(m => {
        m.delete({ timeout:8000 })
    })
  

}
    }        
         

})
const { GiveawaysManager } = require("discord-giveaways")
client.giveawaysManager = new GiveawaysManager(client, {
    storage: "./give.json",
    updateCountdownEvery: 5000,
    default: {
        botsCanWin: false,
        embedColor: "RANDOM",
        reaction: "🎉"
    }
});

client.on("message", async message => {
  const prefixMention = new RegExp(`^<@!?${client.user.id}>( |)$`);
  if (message.content.match(prefixMention)) {
    return message.lineReply(
      new MessageEmbed()
      .setTitle(`My prefix is \`${prefix}\``)
        .setColor('#00298c')
        .setFooter(`Requested by ${message.author.username}`, message.author.displayAvatarURL())
    )
  }
})
client.on("message", message => {
  if(message.content === "e!automeme") {
     if (!message.member.hasPermission("ADMINISTRATOR")) {
  return message.reply("you don't have permission \n require **ADMINISTRATOR**")
        }
     
 message.channel.send("🔄 **| AutoMeme Starting... (`Please wait 20s`)**").then((msg) => {
    setTimeout(function(){
    msg.edit("🔄 **| AutoMeme Starting... (`Please Wait 10s`)**")
   setTimeout(function(){
    msg.edit("✅ **| AutoMeme Started**")
    }, 10000)
   }, 10000)
   })  //edit the message to look cool
    setInterval(() => {
    got("https://www.reddit.com/r/memes/random/.json").then(response => {
    const [list] = JSON.parse(response.body);
    const [post] = list.data.children;

    const permalink = post.data.permalink;
    const memeUrl = `https://reddit.com${permalink}`;
    const memeImage = post.data.url;
    const memeTitle = post.data.title;
    const memeUpvotes = post.data.ups;
    const memeNumComments = post.data.num_comments;

    const embed = new Discord.MessageEmbed()
      .setTitle(`${memeTitle}`)  
      .setURL(`${memeUrl}`)
      .setColor("#00298c")
      .setImage(memeImage)
      .setFooter(`👍: ${memeUpvotes} | 💬: ${memeNumComments}`);

    message.channel.send(embed)
    })
    }, 20000) //I recommend to put it above 20s to not abuse Discord Api lol

    }
});


//=============================================
const channel_id = ""//PLEASE PASTE CHANNEL ID IF YOU DON'T KNOW HOW TO GET CHANNEL ID ENABLE DEVELOPER MODE ON OR JOIN OUR SERVER
//=============================================
client.on('ready', () => {
	console.log(`[INFO]: Ready on client (${client.user.tag})`);
	console.log('-------------------------------------');
	client.user.setActivity(`Powered By NeoBot |  ${client.users.cache.size} users`, {
		    type: 'WATCHING'
	});
});

client.on('message', async (message) => {
  if (!message.guild) return;
  if (message.author.bot) return;
  message.content = message.content.replace(/@(everyone)/gi, "everyone").replace(/@(here)/gi, "here");
if (message.content.includes(`@`)) {
return message.lineReply(`**:x: Please dont mention anyone**`);
 }
   
   try {
  if (message.channel.id != channel_id) return
  let res = await axios.get(`http://api.brainshop.ai/get?bid=159454&key=RKi4jqvbEarRLLq2&uid=[uid]&msg=[msg]=${encodeURIComponent(message.content)}`);
  message.reply({
    embed:{
      title: "AI ChatBot", //you can remove if you want 
      description:res.data.cnt, //don't remove this
      color: '#cc0000',
    }
    });
  } catch {
   errorEmbed(`Bot error, please try again!`,message)
   }
})


client.login(process.env.TOKEN)