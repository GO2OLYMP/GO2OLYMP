const Discord = require('discord.js');
const client = new Discord.Client();
const { Client, MessageEmbed } = require('discord.js')
let prefix = "!!"; 

client.on('guildMemberAdd', (member) =>
{
	member.send('Ты вошёл на сервер **Go2Olymp**. Приветствуем тебя!\nsite: ...\n(что-то ещё LMAO)')
	member.defaultChannel.send(`Приветствуем ${member} на нашем сервере!`);
	member.send('Для получения полного доступа на сервере, пожалуйста, выбери соответствующую роль на сервере.')
	member.roles.add('763076716872335411')
})

client.on('guildMemberRemove', (member) =>
{
	member.defaultChannel.send(`${member} покинул наш сервер.`);
	member.send('Очень жаль, что ты вышел с сервера **Go2Olymp**! :(')
})

client.login("...");
