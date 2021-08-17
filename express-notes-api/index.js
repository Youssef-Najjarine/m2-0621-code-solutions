const fs = require('fs');
const express = require('express');
const app = express();
const data = require('./data.json');

app.use(express.json());

app.get('/api/notes', function (req, res) {
  const notesArray = [];
  for (const property in data.notes) {
    notesArray.push(data.notes[property]);
  }
  res.status(200).json(notesArray);
});

app.get('/api/notes/:id', function (req, res) {
  const id = Number(req.params.id);
  let outcome = {};
  outcome.error = `Cannot find note with id ${id}`;
  let statusCode = 404;
  if (id <= 0 || Number.isNaN(id) || !Number.isInteger(id)) {
    statusCode = 400;
    outcome.error = 'id must be a positive integer.';
  } else {
    const notesArray = [];
    for (const property in data.notes) {
      notesArray.push(data.notes[property]);
    }
    for (let i = 0; i < notesArray.length; i++) {
      if (id === notesArray[i].id) {
        statusCode = 200;
        outcome = notesArray[i];
      }
    }
  }
  res.status(statusCode).send(outcome);
});

app.post('/api/notes', function (req, res) {
  if (req.body.content === undefined) {
    const error1 = {};
    error1.error = 'content is a required field';
    return res.status(400).send(error1);
  } else if (req.body.content !== undefined) {
    req.body.id = data.nextId;
    data.notes[data.nextId] = req.body;
    data.nextId++;
    fs.writeFile('data.json', JSON.stringify(data, null, 2), 'utf8', err => {
      if (err) {
        const error2 = {};
        error2.error = 'An unexpected error occurred.';
        return res.status(500).send(error2);
      }
      return res.status(201).send(req.body);
    });
  }
});

app.delete('/api/notes/:id', function (req, res) {
  const id = Number(req.params.id);
  if (id <= 0 || Number.isNaN(id) || !Number.isInteger(id)) {
    const error1 = {};
    error1.error = 'id must be a positive integer.';
    return res.status(400).send(error1);
  } else if (data.notes[id] === undefined) {
    const error2 = {};
    error2.error = `cannot find note with id ${id}`;
    return res.status(404).send(error2);
  } else if (data.notes[id] !== undefined) {
    delete data.notes[id];
    fs.writeFile('data.json', JSON.stringify(data, null, 2), 'utf8', err => {
      if (err) {
        const error2 = {};
        error2.error = 'An unexpected error occurred.';
        return res.status(500).send(error2);
      }
      return res.sendStatus(204);
    });
  }
});

app.put('/api/notes/:id', function (req, res) {
  const id = Number(req.params.id);
  if (id < 0) {
    const error1 = {};
    error1.error = 'id must be a positive integer.';
    return res.status(400).send(error1);
  } else if (req.body.content === undefined) {
    const error2 = {};
    error2.error = 'content is a required field';
    return res.status(400).send(error2);
  } else if (data.notes[id] === undefined) {
    const error3 = {};
    error3.error = `cannot find note with id ${id}`;
    return res.status(404).send(error3);
  } else if (id > 0 && req.body.content !== undefined && data.notes[id] !== undefined) {
    data.notes[id].content = req.body.content;
    fs.writeFile('data.json', JSON.stringify(data, null, 2), 'utf8', err => {
      if (err) {
        const error2 = {};
        error2.error = 'An unexpected error occurred.';
        return res.status(500).send(error2);
      }
    });
    return res.status(200).send(data.notes[id]);
  }
});

app.listen(3000, () => {
  // console.log('Listening on port 3000!');
});
// localhost:3000/api/notes
// localhost:3000/api/notes/:id
