const http = require('http');
const mongoose = require('mongoose');
require('dotenv').config({ path: './.env' });

const hostname = process.env.HOSTNAME;
const port = process.env.PORT;
const uriDB = process.env.URI_DB;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World!');
});

server.listen(port, hostname, () => {
  console.log('Server is running...');
});

mongoose.connect(uriDB, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.once('open', () => {
  console.log('Connected to the database');
});

db.on('error', (err) => {
  console.log('Error: ', err);
});
