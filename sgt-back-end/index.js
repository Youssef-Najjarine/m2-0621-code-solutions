const express = require('express');
const app = express();
const pg = require('pg');
const db = new pg.Pool({
  connectionString: 'postgres://dev:dev@localhost/studentGradeTable',
  ssl: {
    rejectUnauthorized: false
  }
});

app.use(express.json());

app.get('/api/grades', (req, res, next) => {
  const sql = `SELECT  "gradeId",
                        "name",
                        "course",
                        "score",
                        "createdAt"
                    from "grades"`;
  db.query(sql, (err, res2) => {
    if (err) {
      return res.status(500).send({ error: 'database querying failed.' });
    } else {
      return res.status(200).send(res2.rows);
    }
  });
});

app.post('/api/grades', function (req, res) {
  if (req.body.name === undefined || req.body.course === undefined || req.body.score === undefined || Number(req.body.score) < 0 || Number(req.body.score) > 100) {
    return res.status(400).send({ error: 'name and course is a required field that is equal to a valid value.Score is a required field that is equal to an integer from 0 to 100' });
  }
  const sql = `insert into "grades" ("name","course","score")
                values ('${req.body.name}','${req.body.course}','${req.body.score}')
                returning *`;

  db.query(sql, (err, res2) => {
    if (err) {
      return res.status(500).send({ error: 'database querying failed.' });
    } else {
      return res.status(201).send(res2.rows);
    }
  });
});

app.put('/api/grades/:gradeId', function (req, res) {
  const id = Number(req.params.gradeId);
  if (id <= 0 || Number.isNaN(id) || !Number.isInteger(id)) {
    return res.status(400).send({ error: 'gradeId must be a positive integer.' });
  } else if (req.body.name === undefined || req.body.course === undefined || req.body.score === undefined || Number(req.body.score) < 0 || Number(req.body.score) > 100 || Number.isNaN(Number(req.body.score))) {
    return res.status(400).send({ error: 'name, course, and score must be defined and score must be a number between 0 and 100.' });
  }
  const sqlSelect = `SELECT  "gradeId",
                              "name",
                              "course",
                              "score",
                              "createdAt"
                        from "grades"`;
  db.query(sqlSelect, (err, res3) => {
    if (err) {
      return res.status(500).send({ error: 'database querying failed.' });
    } else {
      if (res3.rows[id] === undefined) {
        return res.status(404).send({ error: 'the gradeId entered does not exist.' });
      } else {
        const sqlUpdate = `update "grades"
                set "name" = '${req.body.name}',
                    "course" = '${req.body.course}',
                    "score" = '${req.body.score}'
                where "gradeId" = ${id}
                returning *`;
        db.query(sqlUpdate, (err, res2) => {
          if (err) {
            return res.status(500).send({ error: 'database querying failed.' });
          } else {
            return res.status(200).send(res2.rows);
          }
        });
      }
    }
  });
});

app.delete('/api/grades/:gradeId', function (req, res) {
  const id = Number(req.params.gradeId);
  if (id <= 0 || Number.isNaN(id) || !Number.isInteger(id)) {
    return res.status(400).send({ error: 'gradeId must be a positive integer.' });
  }
  const sqlSelect = `SELECT  "gradeId",
                              "name",
                              "course",
                              "score",
                              "createdAt"
                        from "grades"`;
  db.query(sqlSelect, (err, res3) => {
    if (err) {
      return res.status(500).send({ error: 'database querying failed.' });
    } else {
      if (res3.rows[id] === undefined) {
        return res.status(404).send({ error: 'the gradeId entered does not exist.' });
      } else {
        const sqlDelete = `delete from "grades"
                where "gradeId" = ${id}
                returning *`;
        db.query(sqlDelete, (err, res2) => {
          if (err) {
            return res.status(500).send({ error: 'database querying failed.' });
          } else {
            return res.sendStatus(204);
          }
        });
      }
    }
  });
});
app.listen(3000, () => {
  // console.log('Listening on port 3000!');
});
// http get localhost:3000/api/grades
// http post localhost:3000/api/grades name="Youssef" course="Math" score="100"
// http put localhost:3000/api/grades/5 name="Youssef" course="Math" score="100"
// http delete localhost:3000/api/grades/5
