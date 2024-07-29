const express = require('express');
const request = require('request');
const cors = require('cors');
const app = express();



app.use(cors());

app.get('/anyurl', (req, res) => { // Changed route to use query parameter
    const slug = req.query.slug; // Correctly access slug from query

    if (!slug) {
        res.status(400).send('Error: Missing slug parameter');
        return;
    }

    const decodedUrl = decodeURIComponent(slug); // Decode the URL

    console.log(`Received request for URL: ${decodedUrl}`);

    request(decodedUrl, { timeout: 5000 }, (error, response, body) => {
        if (error) {
            console.error(`Error: ${error.message}`);
            res.status(500).send('Error occurred: ' + error.message);
        } else if (response.statusCode !== 200) {
            console.error(`Non-200 status: ${response.statusCode} - ${response.statusMessage}`);
            res.status(response.statusCode).send('Error occurred: ' + response.statusMessage);
        } else {
            res.send(body);
        }
    });
});


app.listen(3030, () => {
  console.log('Proxy server running on port 3000');
});


