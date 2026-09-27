module.exports = {
  name: 'welcome',
  description: 'Welcome message placeholder',
  execute: async (client, msg, args) => msg.reply && msg.reply('Welcome!')
};
