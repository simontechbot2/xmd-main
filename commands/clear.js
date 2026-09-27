module.exports = {
  name: 'clear',
  description: 'Clear messages (placeholder)',
  execute: async (client, msg, args) => msg.reply && msg.reply('Clear placeholder')
};
