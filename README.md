# Clear Chat History

<center>
	<a href="https://nodei.co/npm/clear-chat/">
		<img alt="Clear Chat History NPM Package Statistics" src="https://nodei.co/npm/clear-chat.png">
	</a>
</center>

* NPM package that saves cleared messages online to view it later
* Useful for bots where users can save cleared messages history online
* Supports the Promise-API, you will be able to use .then, .catch, etc...

<center>
	<img style="border-radius: 7px;" alt="Example Picture" src="https://cdn.discordapp.com/attachments/765407817191522325/816582265979011112/unknown.png">
	<a href="https://clearchat.xyz/chat/1" target="_blank">
		<img style="border-radius: 7px;" alt="Example Picture" src="https://cdn.discordapp.com/attachments/817001110589669426/817302090242195497/unknown.png">
	</a>
</center>

Check out or website [Clear Chat History](https://clearchat.xyz).

# Installation from [NPM](https://www.npmjs.com/package/clear-chat)

`npm i clear-chat`

# Usage

- `createChat(messages)` - Saves cleared messages chat online
    - `messages`: (REQUIRED) Array of cleared messages

##
it will return an object looks like this:
```
{
	"url": "https://clearchat.xyz/chat/1",
	"code": "1"
}
```

## Example

```js
const clearChat = require('clear-chat');
const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '!';

client.on('ready', () => {
	console.log('Logged in as ' + client.user.tag);
});

client.on('message', async message => {
	if (!message.content.startsWith(prefix) || message.author.bot) return;

	const args = message.content.slice(prefix.length).trim().split(/ +/);
	const command = args.shift().toLowerCase();

	if (command === 'clear') {
		let messages = await message.channel.bulkDelete(args[0] || 10);
		let chat = await clearChat.createChat(messages);
		let embed = new Discord.MessageEmbed()
			.setTitle(`Cleared ${messages.size} Messages`)
			.setColor("#7289DA")
			.setThumbnail(message.guild.iconURL({dynamic:true}))
			.setDescription(`[View Cleared Messages Chat Online](${chat.url})`)
			.addField("Channel", message.channel, true)
			.addField("Chat History Code", chat.code, true)
		message.channel.send(embed);
		await message.delete();
	}
});

client.login("TOKEN")
```

## Contributing

© Clear Chat History, 2021 - 2022 | TARIQ (contact@itariq.dev)