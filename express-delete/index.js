const express = require('express');
const app = express();
let grades = {
  12: {
    id: 12,
    name: 'Tim Berners-Lee',
    course: 'HTML',
    score: 95
  },
  47: {
    id: 47,
    name: 'Brendan Eich',
    course: 'JavaScript',
    score: 100
  },
  273: {
    id: 273,
    name: 'Forbes Lindsay',
    course: 'JavaScript',
    score: 92
  }
}
// :3000/api/grades/:id
var gradesArray = [];
for (const property in grades) {
  gradesArray.push(grades[property]);
}

app.get('/api/grades', function (req, res) {
  res.json(gradesArray);
});

app.delete('/api/grades/:id', function (req, res) {
  for (let i = 0; i < gradesArray.length; i++) {
    if (Number(req.params.id) === gradesArray[i].id) {
      gradesArray.splice(i, 1);
    }
  }

  res.sendStatus(204);
});
app.listen(3000, () => {
  console.log('Listening on port 3000!');
});
