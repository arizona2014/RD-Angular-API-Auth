const express = require('express');
const app = express();
const MongoClient = require('mongodb').MongoClient;
const bodyParser = require('body-parser');
const path = require('path');

require('dotenv').config();

let database;

app.use(express.static(path.join(__dirname, 'public')));
app.use('/profiles', express.static(path.join(__dirname, 'profiles')));
app.use(bodyParser.json());


app.get('*', (req, res) => {
  return res.sendFile(path.join(__dirname, 'public/index.html'))
});

MongoClient.connect(process.env.DB_CONN, (err, db) => {

  console.log('connected to mongodb...');

  app.listen(3000, () => {
    database = db;
  console.log('listening on port 3000...');
  });

});
