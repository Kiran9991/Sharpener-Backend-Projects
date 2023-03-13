const express = require('express');

const routers = express.Router();

routers.get('/login',(req, res) => {
    res.send(`<form onsubmit="localStorage.setItem('username',document.getElementById('username').value)" action="/login" 
    method="POST">
                   <input id="username" type="text" name="username" placeholder="Username"><br><br>
                   <button type="submit">Login</button>
             </form>`);
})

routers.post('/login', (req, res) => {
    res.redirect('/');
})

module.exports = routers;