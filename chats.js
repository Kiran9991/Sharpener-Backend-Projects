const express = require('express');

const routers = express.Router();

const fs = require('fs');

routers.get('/',(req, res) => {
    fs.readFile('message.txt', 'utf8', (err, data) => {
        if(err) {
            console.log('the data is not reading');
        }
        console.log('the data is = '+data);
        res.send(`<form action="/" method="POST"><p>${data}<br><input type="text" name="userChats"><br><br><button type="submit">Send</button></form>`);
        res.redirect('/saved');
    })
})

routers.use('/', (req, res) => {
    const data = req.body.username+' = '+req.body.userChats;
    data.toString();
    fs.writeFile('message.txt', data, (err) => {
        if(err) {
            console.log('there was an error on writing a file');
        }
    })
})

routers.use('/saved', (req, res) => {
    res.send('<h1>the data is saved</h1>')
})

module.exports = routers;