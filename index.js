const Discord = require('discord.js');
var bot = new Discord.Client();

bot.on('ready', () => {
  console.log(`Rita is now online`);
});

bot.on('message', msg => {
  if (msg.content === '~Vợ ơi') {
    msg.reply('Vâng?');
  }
});

bot.login('NzMxNzM1NjIyOTM4NjU2Nzc4.XwqYAQ.-0x239KrENFG62NeryS-txq5_D0');