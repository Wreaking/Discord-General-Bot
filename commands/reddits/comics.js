const got = require('got');
const { MessageEmbed } = require ('discord.js');
module.exports = {
	name: 'comics',
	description: 'Send a comic from Reddit.',
	botPermissions: ['EMBED_LINKS', 'SEND_MESSAGES', 'VIEW_CHANNEL', 'READ_MESSAGE_HISTORY'],
	cooldown: 2,
	run: async (client, message, args) => {
		got('https://www.reddit.com/r/comics/random/.json').then(response => {
			const content = JSON.parse(response.body);
			const permalink = content[0].data.children[0].data.permalink;
			const embed = new MessageEmbed()
				.setTitle(content[0].data.children[0].data.title)
				.setURL(`https://reddit.com${permalink}`)
				.setImage(content[0].data.children[0].data.url)
				.setFooter(`👍 ${content[0].data.children[0].data.ups} | 💬 ${content[0].data.children[0].data.num_comments}`)
				.setTimestamp();
message.channel.send(embed);
		});
	},
};
// CREATED BY WREAKING#5515
//IF YOU ARE USING IT PLEASE MENTION MY NAME OR MY BOTS NAME