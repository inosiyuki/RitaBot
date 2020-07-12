const Discord = require('discord.js');

const client = new Discord.Client();

 

client.on('ready', () => {

    console.log('I am ready!');

});

 

client.on('message', message => {

    if (message.content === 'ping') {

       message.reply('pong');

       }

});

 

// THIS  MUST  BE  THIS  WAY

client.login(process.env.NzMxNzM1NjIyOTM4NjU2Nzc4.XwqYAQ.-0x239KrENFG62NeryS-txq5_D0);//BOT_TOKEN is the Client Secret
