const data = require('./data.json');
const fs = require('fs');
function deleteNotes() {
 if (process.argv[3] === undefined) {
   return console.log('An index number is required after typing delete.Please ensure that you have entered a number to delete.');
 }

 for (let i = 3; i < process.argv.length; i++) {

   if (Number.isNaN(Number(process.argv[i]))) {
        return console.log(process.argv[i],' is not a valid index. Please ensure all process.argv indexes are valid numbers.');
    } else {
     for (let property in data.notes) {
       if (process.argv[i] === property) {
         delete data.notes[process.argv[i]];
       }
     }
    }
  }
  data.nextId--;
  fs.writeFile("data.json", JSON.stringify(data, null, 2), (err) => {
    if (err) throw err;
  }
  );
}
module.exports = deleteNotes;
