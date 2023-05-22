const mineflayer = require('mineflayer')
var AutoAuth = require('mineflayer-auto-auth')
const antiafk = require("mineflayer-antiafk");

const bot = mineflayer.createBot({
  host: 'localhost', // minecraft server ip
  username: 'MapArtB', // minecraft username
  auth: 'offline', // for offline mode servers, you can set this to 'offline'
  // port: 25565,                // only set if you need a port that isn't 25565
  // version: false,             // only set if you need a specific version or snapshot (ie: "1.8.9" or "1.16.5"), otherwise it's set automatically
  // password: '12345678'        // set if you want to use password-based auth (may be unreliable)
  plugins: [AutoAuth],
  AutoAuth: 'anan123*'

})

bot.on('serverAuth', function() {
    // Here bot should be already authorized
    setTimeout(50000);
  });
  bot.chat('/lobby')
  bot.chat('/joinq townyklasik')
  bot.chat('/accept Shopier')
  bot.afk.setOptions({ fishing: false, chatting: false, killauraEnable: false, breaking: false }); //disables fishing
  bot.afk.start();
  if (config.utils['auto-reconnect']) {
    bot.on('end', () => {
       setTimeout(() => {
          createBot();
       },);
    });
 }
bot.on('kicked', console.log)
bot.on('error', console.log)