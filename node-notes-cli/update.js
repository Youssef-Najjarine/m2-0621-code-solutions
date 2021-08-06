const data = require('./data.json');
const fs = require('fs');

function updateNotes() {
  if (process.argv[3] === undefined || Number.isNaN(Number(process.argv[3])) || process.argv[3] === '' || process.argv[3] === ' ') {
    return console.log('Error, please enter a valid index to update.');
  } else {
    let str = '';
    str += process.argv[4] + ' ';
    for (let i = 5; i < process.argv.length; i++) {
      str += process.argv[i] + ' ';
    }
    let result = str.trim();
    data.notes[process.argv[3]] = result;

    fs.writeFile("data.json", JSON.stringify(data, null, 2), (err) => {
      if (err) throw err;
      console.log('Note has been updated');
    }
    );
  }


}
module.exports = updateNotes;
