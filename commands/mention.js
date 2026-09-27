module.exports = {
  name: 'mention',
  description: 'Mention user(s) placeholder',
  execute: async (client, msg, args) => msg.reply && msg.reply('Mention placeholder')
};
