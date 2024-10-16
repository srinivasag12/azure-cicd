const express = require('express');
const http = require('http');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 4200;



app.use(express.static(__dirname + '/build_prod/dist'));
app.get('/*', (req, res) => { 
    return res.sendFile(path.join(__dirname)) 
});



const server1 = http.createServer(app);
server1.listen(PORT, () => {
    console.log(`express server listening on http://localhost:${PORT} `);
});