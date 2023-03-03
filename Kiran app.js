//*******************************///Creating a node server///**************************************************** */
const http = require('http');
const server = http.createServer((req, res) => {
    // console.log(req.url, req.method, req.headers)
    const url = req.url
    if(url === '/home') {
        res.write('<h1>Welcome home</h1>')
        res.end();
    }else if(url === '/about') {
        res.write('<h1>Welcome to About Us page</h1>')
        res.end();
    }else if(url === '/node') {
        res.write('<h1>Welcome to my Node Js project</h1>')
        res.end();
    }else {
        res.write('<h1>Hello! from Kiran Agiwale</h1>')
        res.end();
    }
    
}).listen(5000)
