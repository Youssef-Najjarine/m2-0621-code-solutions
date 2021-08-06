const data = require('./data.json');
const fs = require('fs');

function createNotes() {
  if (process.argv[3] === undefined || process.argv[3] === '' || process.argv[3] === ' ') {
    return console.log('Error, please enter a valid entry.');
  } else {
    let str = '';
     str += process.argv[3] + ' ';
    for (let i = 4; i < process.argv.length; i++) {
     str += process.argv[i] + ' ';
    }
    let result = str.trim();
    data.notes[data.nextId] = result;
    data.nextId++;
  }
  fs.writeFile("data.json", JSON.stringify(data, null, 2), (err) => {
    if (err) throw err;
  }
  );
}
module.exports = createNotes;
