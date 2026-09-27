module.exports = {
  name: 'eightball',
  description: '8ball (placeholder)',
  execute: async (client, msg, args) => {
    const answers = ['Yes', 'No', 'Maybe', 'Ask later'];
    const ans = answers[Math.floor(Math.random()*answers.length)];
    return msg.reply && msg.reply(ans);
  }
};
