const fs = require('fs');
const path = require('path');
const config = require('../config');

const commandsDir = path.join(__dirname, '..', 'commands');

function loadCommands() {
  const commandFiles = fs.readdirSync(commandsDir)
    .filter((file) => file.endsWith('.js') && file !== 'index.js');

  const commands = new Map();

  for (const file of commandFiles) {
    try {
      const filePath = path.join(commandsDir, file);
      const mod = require(filePath);

      if (mod && mod.name) {
        commands.set(mod.name.toLowerCase(), mod);
      }
    } catch (error) {
      console.warn(`Failed to load command file: ${file}`, error.message);
    }
  }

  return commands;
}

module.exports = { loadCommands };
