const express = require('express');


const path = require('path');
const fs = require('fs'); 
const cors = require('cors');
const app = express();
const port = 3000;


app.use(express.json());

app.use(cors());


app.use(express.static(path.join(__dirname, 'public')));


app.post('/submit', (req, res) => {
    console.log("Received Form Data:", req.body);

    
    fs.readFile(path.join(__dirname, 'data.json'), 'utf8', (err, data) => {
        if (err) {
            console.error("Error reading data file:", err);
            return res.status(500).json({ error: "Failed to read data file." });
        }

        let jsonData = [];
        if (data) {
            try {
                jsonData = JSON.parse(data);
            } catch (parseErr) {
                console.error("Error parsing JSON data:", parseErr);
                return res.status(500).json({ error: "Failed to parse data." });
            }
        }

        
        jsonData.push(req.body);

    
        fs.writeFile(path.join(__dirname, 'data.json'), JSON.stringify(jsonData, null, 2), (writeErr) => {
            if (writeErr) {
                console.error("Error writing data file:", writeErr);
                return res.status(500).json({ error: "Failed to write data file." });
            }

            res.json({ message: "Form data received", data: req.body });
        });
    });
});

app.get('/data.json', (req, res) => {
    res.sendFile(path.join(__dirname, 'data.json'));
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
