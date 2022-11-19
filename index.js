//* Imports *//
require('dotenv').config();
const { Telegraf } = require('telegraf');

// Initialize new Telegraf object
const bot = new Telegraf(process.env.TELEGRAM_TOKEN);

bot.command('start', ctx => {
    console.log(ctx.from);
    bot.telegram.sendMessage(ctx.chat.id, "Which function would you like to do?", {
        reply_markup: {
            inline_keyboard: [
            [{
                text: "I want to know my location",
                callback_data: "location"
            },
            {
                text: "What is my phone number",
                callback_data: "phone"
            }]
            ]
        }
    });
});

bot.action('location', ctx => {
    bot.telegram.sendMessage(ctx.chat.id, "Rly?", {
        "reply_markup": {
            "one_time_keyboard": true,
            "keyboard": [
                [{
                    text: "Show my location",
                    request_location: true,
                    one_time_keyboard: true
                }],
                ["Cancel"]
            ]
        }
    });
});

bot.action('phone', ctx => {
    bot.telegram.sendMessage(ctx.chat.id, "Send my contact?", {
        "reply_markup": {
            "one_time_keyboard": true,
            "keyboard": [
                [{
                    text: "Share my contact",
                    request_contact: true,
                    one_time_keyboard: true
                }],
                ["Cancel"]
            ]
        }
    });
});

bot.launch();