module.exports = {
  name: 'autotyping',
  description: 'Auto typing placeholder',
  execute: async (client, msg, args) => {
    return msg.reply && msg.reply('Auto typing placeholder.');
  }
};
