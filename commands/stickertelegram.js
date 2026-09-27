module.exports = {
  name: 'stickertelegram',
  description: 'Telegram sticker placeholder',
  execute: async (client, msg, args) => msg.reply && msg.reply('Stickertelegram placeholder')
};
