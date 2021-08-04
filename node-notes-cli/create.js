const data = require('./data.json');
const fs = require('fs');

function createNotes() {
  if (process.argv[3] === undefined || process.argv[3] === '' || process.argv[3] === ' ') {
    return console.log('Error, please enter a valid entry.');
  } else {
    data.notes[data.nextId] = process.argv[3];
    data.nextId++;
  }
  fs.writeFile("data.json", JSON.stringify(data, null, 2), (err) => {
    if (err) throw err;
  }
  );
}
module.exports = createNotes;
