const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const mongoose = require('mongoose')
const usersRouter = require('./routes/users');
const postsRouter = require('./routes/posts');


const app = express();

mongoose.connect("").then(() => console.log("db connected")).catch(err => "db err:" + err)

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/users', usersRouter);
app.use('/posts', postsRouter);

module.exports = app;
