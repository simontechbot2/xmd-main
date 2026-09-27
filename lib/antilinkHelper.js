// antilink helper utilities
module.exports = {
  extractLinks: (text) => (text||'').match(/https?:\/\/[^\s]+/g) || []
};
