const fs = require('fs');
const path = require('path');

module.exports = type => {
  const filePath = path.join(__dirname, type);
  return fs.readFileSync(filePath, 'utf-8');
};
