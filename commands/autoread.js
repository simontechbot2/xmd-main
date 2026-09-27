module.exports = {
  name: 'autoread',
  description: 'Auto read toggle placeholder',
  execute: async (client, msg, args) => {
    return msg.reply && msg.reply('Auto read toggled (placeholder).');
  }
};
