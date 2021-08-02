const fs = require('fs');
const data = Math.random().toString();

fs.writeFile('random.txt', data, 'utf8', (err) => {
  if (err) throw err;
});
