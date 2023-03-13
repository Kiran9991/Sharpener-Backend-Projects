const express = require('express');

const routers = express.Router();

const fs = require('fs');

routers.get('/',(req, res) => {
    fs.readFile('message.txt', (err, data) => {
        if(err) {
            console.log(err);
            data = `The chat doesn't exists`;
        }
        console.log('the message is saved');
        res.send(`<form action="/" method="POST" onSubmit="document.getElementById('username').value = localStorage.getItem('username')">
                        <p>${data}</p>
                        <input type="text" name="message" id="message">
                        <input type="hidden" name="username" id="username"><br><br>
                        <button type="submit">Send</button>
                 </form>`);
        res.end();
    })
})

routers.post('/', (req, res) => {
    console.log(req.body.username);
    console.log(req.body.message);
    fs.writeFile('message.txt', `${req.body.username}: ${req.body.message}; `,{flag: 'a'}, (err) => {
        err ? console.log(err) : res.redirect('/')
    })
})


module.exports = routers;