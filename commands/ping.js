module.exports = {
  name: 'ping',
  description: 'Ping the bot',
  execute: async (sock, message) => {
    await sock.sendMessage(message.key.remoteJid, { text: 'Pong!' });
  }
};
