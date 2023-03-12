const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({extended: true}));

const loginRoutes = require('./loginDetails');
const chatRoutes = require('./chats');

app.use(loginRoutes);
app.use(chatRoutes);

app.listen(5000);
