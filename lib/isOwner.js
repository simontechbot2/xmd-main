// isOwner helper
const owner = require('../data/owner.json');
module.exports = function isOwner(number) {
  return number === (owner.owner && owner.owner.phone) || number === (owner.phone);
};
