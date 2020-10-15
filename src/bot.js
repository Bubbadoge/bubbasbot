const Discord = require('discord.js');
const client = new Discord.Client();
const cron = require('cron');

client.on('ready', () => {
    console.log('bot is online!');
    scheduledMessage.start()
})

let scheduledMessage = new cron.CronJob('* 24 * * * *', () => {
    var generalChannel = client.channels.cache.get("766129681446600704");
    generalChannel.send("are you still alive <@440220081243422720> ?");
});



//node . is to turn this bad boi on
//control c to turn it off
//587400706105802753 discord
//766129681446600704 channel
//440220081243422720 user id
client.login('NzY2MTIzNTEzMzI4Njk3MzQ0.X4eyHw.u_4KJufqTYQdjhWmyng5mXcW0LY');