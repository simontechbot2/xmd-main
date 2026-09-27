module.exports = {
  name: 'help',
  description: 'List commands',
  execute: async (client, msg, args) => {
    return msg.reply && msg.reply('Use !help to see available commands (placeholder).');
  }
};
