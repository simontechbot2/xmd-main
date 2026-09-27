module.exports = {
  name: 'goodnight',
  description: 'Goodnight message',
  execute: async (client, msg, args) => msg.reply && msg.reply('Goodnight! Sleep well.')
};
