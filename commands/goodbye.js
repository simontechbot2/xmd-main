module.exports = {
  name: 'goodbye',
  description: 'Goodbye message',
  execute: async (client, msg, args) => msg.reply && msg.reply('Goodbye!')
};
