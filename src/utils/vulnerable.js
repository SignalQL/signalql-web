// Sample code demonstrating common web vulnerabilities in Node.js
const express = require('express');
const app = express();
const fs = require('fs');

app.get('/read-file', (req, res) => {
    // VULNERABILITY: User-controlled input directly enters the file system
    // This triggers the alert: "Tainted data used in file system relative path"
    const filePath = req.query.path;
    
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            res.status(500).send("Error reading file");
            return;
        }
        res.send(data);
    });
});

app.get('/display', (req, res) => {    
    // VULNERABILITY: Reflected XSS
    // Data from URL goes into HTML without sanitization

    const name = req.query.name;
    res.send("<h1>Hello, " + name + "</h1>"); 
});

app.listen(3000);