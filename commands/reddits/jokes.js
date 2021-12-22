const got = require('got');
const { MessageEmbed } = require ('discord.js');
module.exports = {
	name: 'jokes',
	description: 'Send a random joke from Reddit.',
	botPermissions: ['EMBED_LINKS', 'SEND_MESSAGES', 'VIEW_CHANNEL', 'READ_MESSAGE_HISTORY'],
	cooldown: 2,
 run: async (client, message, args) => {
		got('https://www.reddit.com/r/Jokes/random/.json').then(response => {
			const content = JSON.parse(response.body);
			const permalink = content[0].data.children[0].data.permalink;
				const embed = new MessageEmbed()
				.setTitle(content[0].data.children[0].data.title)
				.setURL(`https://reddit.com${permalink}`)
				.setDescription(content[0].data.children[0].data.selftext)
				.setFooter(`👍 ${content[0].data.children[0].data.ups} | 💬 ${content[0].data.children[0].data.num_comments}`)
				.setTimestamp();
				message.channel.send(embed);
		});
	},
};