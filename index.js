var Telebot = require('telebot');
var lang = require('./lang/lang-default'); // Change this to change the language
var dict = lang.vortaro();


const bot = new Telebot(process.env.TOKEN);

var map = new Object();
bot.on('/start', (ctx) => {
  if (ctx.from.username == 'XvaiKawaii') {
    map = {"stateCRUPC":"closed", "counterHolis":"0"};
    ctx.reply.text("Holi crupcero!");
  } else {
      ctx.reply.text(dict['5']);
  }
});
bot.on('/isopen', (ctx) => {
  var isopen = (map.stateCRUPC == "open") ? true : false;
  if (isopen) bot.sendSticker(ctx.chat.id, 'CAADBAADRgADZhkVBXvnbcBrbN7EAg');
  else bot.sendSticker(ctx.chat.id, 'CAADBAADSAADZhkVBR-6hyRG6fjYAg');
});
bot.on('/countholis', (ctx) => {
  ctx.reply.text(map.counterHolis + dict['1']);
});
bot.on('/eurobeat', (ctx) => {
  ctx.reply.text('https://www.youtube.com/watch?v=6ftCIfHwqtg');
});
bot.on('/slure', (ctx) => {
  ctx.reply.text('¯\\_(ツ)_/¯');
});
bot.on('/lemmy', (ctx) => {
  ctx.reply.text('( ͡° ͜ʖ ͡°)');
});
bot.on('/fliptable', (ctx) => {
  ctx.reply.text('(╯°□°）╯︵ ┻━┻');
});
bot.on('/repository', (ctx) => {
  ctx.reply.text('https://github.com/wolframtheta/BotCRUPC');
});
bot.on('/kawaiipotato', (ctx) => {
    bot.sendSticker(ctx.chat.id, 'CAADBAADkAADm9tZAcSYdB1cDI0jAg');
});
bot.on(/kawaii+/, (ctx) => kannaAtack(ctx));

bot.on(/(^h|^H)i$/, (ctx) => holis(ctx));
bot.on('sticker', (ctx) => {
  if (ctx.chat.id < 0 || (ctx.chat.id > 0 && ctx.from.username == 'XvaiKawaii')) {
    if (ctx.sticker.emoji == '🚪' && ctx.sticker.set_name == "CRUPC") {
      console.log("map:" + map.stateCRUPC);
      if (map.stateCRUPC == "closed") {
        map.stateCRUPC = "open";
        console.log("write");
      }
      console.log("open");
      ctx.reply.text(dict['6']);
    }
    else if (ctx.sticker.emoji == '😒' && ctx.sticker.set_name == "CRUPC") {
      console.log("map:" + map.stateCRUPC);
      if (map.stateCRUPC == "open") {
        map.stateCRUPC = "closed";
        console.log("write");
      }
      console.log("closed");
      ctx.reply.text(dict['7']);
    }
  }
  else {
  ctx.reply.text(dict['5']);
  }
});
bot.start();

function holis(ctx) {
  map.counterHolis++;
  ctx.reply.text(dict['4'])
}

function kannaAtack(ctx){
  var kannaStickers = ["CAADBQADVAEAAhHsTwg9N6p2qMTE3wI","CAADBQADVQEAAhHsTwgIQ0YyGdeH9QI","CAADBQADWAEAAhHsTwj9HGLnMngW1QI",
                       "CAADBQADVwEAAhHsTwicB3U_qK86oAI","CAADBQADVgEAAhHsTwhs3Z6OMn1UawI","CAADBQADUwEAAhHsTwhB0-MIi9feVAI",
                       "CAADBQADUgEAAhHsTwg5I4hPQelh4gI","CAADBQADUQEAAhHsTwg5RdDBLjoHdQI","CAADBQADTgEAAhHsTwhpePGVn-6t9QI",
                       "CAADBQADTwEAAhHsTwh70Gb8FU0DsgI","CAADBQADTQEAAhHsTwjahOlLCxcjIAI","CAADBQADUAEAAhHsTwj4FpK-IIMZ8QI",
                       "CAADBQADTAEAAhHsTwiD24TUwFrgZgI","CAADBQADRQEAAhHsTwgJN6oJRfab5gI","CAADBQADRgEAAhHsTwjJlxDWHYKFagI",
                       "CAADBQADSAEAAhHsTwiCvCzQ_OE7wQI","CAADBQADSgEAAhHsTwi8htmZ7HlbDwI","CAADBQADUAEAAhHsTwj4FpK-IIMZ8QI",
                       "CAADBQADSQEAAhHsTwgIFSX340oseQI","CAADBQADSwEAAhHsTwgDcnQQAgYb8wI","CAADBQADRwEAAhHsTwgSs4dLAAEw0-YC",
                       "CAADBQADRAEAAhHsTwizLpgWuol3egI","CAADBQADQwEAAhHsTwiLT7gXtD7hEgI","CAADBQADQgEAAhHsTwgZw93YJEw8pwI",
                       "CAADBQADNQEAAhHsTwh2vqA8YAke1QI","CAADBQADNgEAAhHsTwgIkNgxKOiWtwI","CAADBQADNwEAAhHsTwhW_BdNqlTtsAI",
                       "CAADBQADOAEAAhHsTwh3u4a5BYLc6gI","CAADBQADOwEAAhHsTwjTDnphc1JaMgI","CAADBQADPAEAAhHsTwhGoP0qNuDe7gI",
                       "CAADBQADPQEAAhHsTwgtSje5XWFTaQI","CAADBQADPgEAAhHsTwiu4CgORjWQaQI","CAADBQADPwEAAhHsTwiK56bndPAnZwI",
                       "CAADBQADQQEAAhHsTwhr-9Ep0-ZvwQI","CAADBQADQAEAAhHsTwhZdn81emDM1AI","CAADBQADNAEAAhHsTwiCsq4UgEk05QI",
                       "CAADBQADMwEAAhHsTwgOGL07V0CZlAI","CAADBQADMgEAAhHsTwicRdiV65zXvQI","CAADBQADMQEAAhHsTwjyk_Fn-P_GKgI"];
    var rand = Math.floor(Math.random() * kannaStickers.length) + 1;
    bot.sendSticker(ctx.chat.id, kannaStickers[rand]).catch(function(){});
}
