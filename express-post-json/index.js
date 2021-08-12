const express = require('express');
const app = express();
var nextId = 1;
var grades = {};

app.get('/api/grades', function (req, res) {
  let gradesArray = [];
  for (const property in grades) {
    gradesArray.push(grades[property]);
  }
  res.json(gradesArray);
})

app.use(function (req, res, next) {

})

express.json();
app.post('/api/grades', function (req, res) {
  res.send('Got a POST request');
})

app.listen(3000, () => {
  console.log('Listening on port 3000!');
});
// localhost:3000/api/grades
// {"name": "Brendan Eich","course": "JavaScript","score": 100}
