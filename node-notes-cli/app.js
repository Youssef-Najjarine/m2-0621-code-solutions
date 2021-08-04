const data = require('./data.json');
const readNotes = require('./read');
const createNotes = require('./create');
const updateNotes = require('./update');
const deleteNotes = require('./delete');


if (process.argv[2] === 'read') {
  readNotes();
} else if (process.argv[2] === 'add' || process.argv[2] === 'create') {
  createNotes();
} else if (process.argv[2] === 'update') {
  updateNotes();
} else if (process.argv[2] === 'delete') {
  deleteNotes();
}
