const telegramBot = require('node-telegram-bot-api');
const config = require('./config.js');
const bot = new telegramBot(config.TOKEN, {
    polling: true
});

bot.on("message", async (message) => {
    const text = message.text;
    const chat_id = message.chat.id;
    const firstname = message.from.first_name;
    const username = message.from.username;
    if(text == "/start") {
        bot.sendMessage(chat_id, `Salom ${firstname}, 
Sizning usernamingiz: @${username}, 
IDiyingiz: ***${chat_id}***`, {
    parse_mode: "Markdown"
})
    }
});

bot.on("document", async (message) => {
    const file_name = message.document.file_name;
    const mime_type = message.document.mime_type;
    const file_id = message.document.file_id;
    const file_unique_id = message.document.file_unique_id;
    const file_size = message.document.file_size;
    const chat_id = message.chat.id;
    const document = message.document;
    bot.sendDocument(chat_id, document)
})