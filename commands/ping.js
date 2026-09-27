module.exports = {
  name: 'ping',
  description: 'Ping command',
  execute: async (client, msg, args) => msg.reply && msg.reply('Pong')
};
