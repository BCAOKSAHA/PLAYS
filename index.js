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
        .setURL('https://discord.gg/Warmut')
        .setState('& N1tro Murah, Aman, Begaransi')
        .setName('Warmut Store')
        .setDetails('Menjual Berbagai App Premium')
        .setAssetsLargeImage('https://media.discordapp.net/attachments/1282219539140055101/1282336290825830440/20240609_172952_0000.png?ex=66defc3c&is=66ddaabc&hm=1d15f9681a2ed791a236b79cec0dfcbf50187495d4f1907e2e2e73e745328b91&=&format=webp&quality=lossless&width=423&height=423')
        .setAssetsLargeText('Testimoni 850+')
        .setAssetsSmallImage('https://media.discordapp.net/attachments/1282219539140055101/1282336291333210235/verif.gif?ex=66defc3c&is=66ddaabc&hm=1ae0c26c5628671faeaccbfdcd1fa53bdd2d357a172685ef2c8c6e669c2e72a6&=')
        .setAssetsSmallText('Verified')
        .addButton('Join Warmut Store', 'https://discord.gg/warmut')
        .addButton('Slow Respon? Tekan Ini', 'https://wa.me/6283102229967');

    client.user.setActivity(r);
    client.user.setPresence({ status: 'idle' });
});

client.login(process.env.TOKEN);












