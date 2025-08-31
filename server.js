const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const PORT = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname)));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index3.html'));
});

app.post('/submit', (req, res) => {
    console.log("Form Data Received:");
    console.log(req.body);
    res.send(`
        <h2>Form Submitted Successfully</h2>
        <p><a href="/">Back to Form</a></p>
    `);
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
