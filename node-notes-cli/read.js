const data = require('./data.json');

function readNotes() {
  for (let property in data.notes) {
    console.log(`${property}: ${data.notes[property]}`);
  }
}
module.exports = readNotes;
