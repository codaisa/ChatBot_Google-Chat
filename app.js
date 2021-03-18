const express = require('express');
const app = express();

const sendMessage = require('./routes/sendMessage')
app.use('/sendMessage', sendMessage)

module.exports = app;
