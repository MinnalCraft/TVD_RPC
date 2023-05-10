const Discord = require('discord.js-selfbot-v13');
const client = new Discord.Client({
  readyStatus: false,
  checkUpdate: false
});
const keepAlive = require("./server")

client.on('ready', async () => {


  console.clear();

  console.log(`${client.user.tag} - TVD FEEL THE GAME`
  )
  bitly_axel = "https://bit.ly/3oQZWb0"

  const r = new Discord.RichPresence()
    .setApplicationId('1105860927703756981')
    .setType('PLAYING') 
    .setURL('https://bit.ly/3oQZWb0')
    .setState('Coming Soon...')

    .setName('Tharavad')
    .setDetails('Feel The Game With Us')


    .setStartTimestamp(Date.now())
    .setAssetsLargeImage('https://cdn.discordapp.com/attachments/1093538064422408222/1105861552579551242/tvd.png')
    .setAssetsLargeText('Tharavad')
    .setAssetsSmallImage('https://cdn.discordapp.com/attachments/1093538064422408222/1105861618916663346/tvd_ct.png')
    .setAssetsSmallText('Coming Soon..')
        .addButton('Join Now !!', "https://discord.gg/pjuMDrkEMY")
    .addButton('COMING SOON',"https://discord.gg/pjuMDrkEMY")

  client.user.setActivity(r);
  client.user.setPresence({ status: "dnd" });
})
require('dotenv').config();
keepAlive();
client.login(process.env.token) //Your account token

// man put ur token in secrets