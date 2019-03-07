require('dotenv').config()
const TelegramBot = require('node-telegram-bot-api');
const bot = new TelegramBot(process.env.TOKEN, {polling: true});


bot.on('message', (msg) => {
  const chatId = msg.chat.id;
  const msgId = msg.message_id;
  let message = msg.text;
  if (message.startsWith('你才')) {
    ;
  } else if (message.startsWith('我才')) {
    message = '對';
  } else if (message.match('(你|我).*')) {
    message = '你才' + message.substring(1);
  } else {
    message = '你才' + message;
  }
  bot.sendMessage(chatId, message, {reply_to_message_id: msgId});
});
