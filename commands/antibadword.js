module.exports = {
  name: 'antibadword',
  description: 'Anti bad word filter (placeholder)',
  execute: async (client, msg, args) => {
    return msg.reply && msg.reply('Antibadword filter is a background feature.');
  }
};
