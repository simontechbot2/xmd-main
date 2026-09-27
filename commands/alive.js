module.exports = {
  name: 'alive',
  description: 'Alive check',
  execute: async (client, msg, args) => {
    return msg.reply && msg.reply('I am alive!');
  }
};
