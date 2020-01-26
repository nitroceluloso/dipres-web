
const express = require('express');
const apiMocker = require('connect-api-mocker');
const cors = require('cors');

const app = express();

app.use(cors());

const logger = {
  target: 'mock',
  verbose: ({ req, filePath }) => console.log(`Mocking endpoint ${req.originalUrl} using ${filePath}`)
}

app.use('/api', apiMocker('mock', logger));
app.listen(3001);
console.log("Mock server running on:  http://localhost:3001");
