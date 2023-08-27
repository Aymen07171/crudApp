const express = require('express');
const app = express();
const cors = require('cors');
const sqlite3 = require('sqlite3').verbose();

app.use(cors());
app.use(express.json());

const db = new sqlite3.Database('./Systememployee.db', sqlite3.OPEN_READWRITE, (err) => {
  if (err) {
    console.error(err.message);
  } else {
    console.log('Connected to the database.');
  }
});

app.post('/create', (req, res) => {
  const name = req.body.name;
  const age = req.body.age;
  const country = req.body.country;
  const position = req.body.position;
  const wage = req.body.wage;

  const insertQuery = 'INSERT INTO employees (name, age, country, position, wage) VALUES (?, ?, ?, ?, ?)';
  const values = [name, age, country, position, wage];

  db.run(insertQuery, values, function (err) {
    if (err) {
      console.error(err.message);
      res.status(500).send('Error inserting data.');
    } else {
      res.send('Values Inserted');
    }
  });
});



app.get('/employees', (req, res) => {
    db.all('SELECT * FROM employees', (err, rows) => {
      if (err) {
        return res.status(500).json({ error: err.message });
      }
      res.json({ employees: rows });
    });
  });





const port = 3001;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
