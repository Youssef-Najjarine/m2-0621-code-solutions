const express = require('express');
const app = express();
var nextId = 1;
var grades = {};

app.use(express.json());
app.get('/api/grades', function (req, res) {
  let gradesArray = [];
  for (const property in grades) {
    gradesArray.push(grades[property]);
  }
  res.json(gradesArray);
})
app.post('/api/grades', function (req, res) {
  req.body.id = nextId;
  nextId++;
  res.statusCode = 201;
  res.send(req.body);

})
app.listen(3000, () => {
  console.log('Listening on port 3000!');
});


// localhost:3000/api/grades
// name="Minecraft Steve" course="Smash Bros." score=64
