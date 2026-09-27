module.exports = {
  name: 'antilink',
  description: 'Anti link filter (placeholder)',
  execute: async (client, msg, args) => {
    return msg.reply && msg.reply('Antilink feature not implemented.');
  }
};
