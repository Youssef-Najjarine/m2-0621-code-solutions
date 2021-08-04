const data = require('./data.json');
const fs = require('fs');

function deleteNotes() {
  delete data.notes[process.argv[3]];
 data.nextId--;
  fs.writeFile("data.json", JSON.stringify(data, null, 2), (err) => {
    if (err) throw err;
    console.log('Note has been deleted');
  }
  );
}
module.exports = deleteNotes;
