// server.js

const http = require('http');
const fs = require('fs');

const server = http.createServer(function(req, res)
{
    // read the index.html file located in the same folder
    fs.readFile('index.html', function(err, data)
    {
        if (err)
        {
            res.writeHead(404);
            res.end("Error: index.html not found!");
            return;
        }

        // send the HTML file to the browser
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(data);
    });
});

// listen on port 5500 on all network interfaces (0.0.0.0)
server.listen(5500, '0.0.0.0', function()
{
    console.log("Server is running!");

    console.log("On our phone, we go to: http://192.168.1.100:5500/index.html");
});

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2026
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

