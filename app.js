const cookieParser = require('cookie-parser');
const express = require('express');
const logger = require('morgan');
const helmet = require('helmet');
const path = require('path');
const fs = require('fs');

const indexRouter = require('./routes');
const encoderRouter = require('./routes/encoder');

const app = express();

app.use(helmet());
app.use(
  logger('combined', {
    stream: fs.createWriteStream('./logs/access.log', { flags: 'a' }),
  })
);

app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/encode', encoderRouter);

module.exports = app;
