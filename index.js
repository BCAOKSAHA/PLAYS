const Discord = require('discord.js-selfbot-v13');
const client = new Discord.Client({
  readyStatus: false,
  checkUpdate: false
});

const keepAlive = require('./server.js');
keepAlive();

client.on('ready', async () => {
    console.clear();
    console.log(`${client.user.tag} - rich presence started!`);

    const r = new Discord.RichPresence()
        .setApplicationId('1258311684334944286')
        .setType('PLAYING')
        .setURL('https://discord.gg/Warmuts')
        .setState('& N1tro Murah, Aman, Begaransi')
        .setName('Warmut Store')
        .setDetails('Menjual Berbagai App Premium')
        .setAssetsLargeImage('https://media.discordapp.net/attachments/1284020923888046130/1316652337426600006/20240609_172952_0000.png?ex=675bd38b&is=675a820b&hm=cf0d3701cc8323d6d96f63c658d7b3edecf7f8c22124f40cf68e06ef69389776&=&format=webp&quality=lossless&width=400&height=400')
        .setAssetsLargeText('Testimoni 850+')
        .setAssetsSmallImage('https://media.discordapp.net/attachments/1284020923888046130/1316652337779183617/1196765932119408711.gif?ex=675bd38b&is=675a820b&hm=db0fb293fbc9d820dc093d6c5e970deff3816f394dd4f2124da8653528d5a332&=&width=81&height=81')
        .setAssetsSmallText('Verified')
        .addButton('Join Warmut Store', 'https://discord.gg/warmuts')
        .addButton('Slow Respon? Tekan Ini', 'https://wa.me/6283102229967');

    client.user.setActivity(r);
    client.user.setPresence({ status: 'idle' });
});

client.login(process.env.TOKEN);












