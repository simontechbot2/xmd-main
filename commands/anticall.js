module.exports = {
  name: 'anticall',
  description: 'Anti call handler (placeholder)',
  execute: async (client, msg, args) => {
    return msg.reply && msg.reply('Anticall handler not implemented.');
  }
};
