//* Imports *//
require('dotenv').config();
const { Telegraf } = require('telegraf');

// Initialize new Telegraf object
const bot = new Telegraf(process.env.TELEGRAM_TOKEN);

bot.command('start', ctx => {
    console.log(ctx.from);
    bot.telegram.sendMessage(ctx.chat.id, "Hello World!");
});

bot.launch();