const data = require('./data.json');
const fs = require('fs');

function updateNotes() {
  data.notes[process.argv[3]] = process.argv[4];
  fs.writeFile("data.json", JSON.stringify(data, null, 2), (err) => {
    if (err) throw err;
    console.log('Note has been updated');
  }
  );
}
module.exports = updateNotes;
