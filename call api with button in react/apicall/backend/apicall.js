const express = require('express');
const axios = require("axios");

const app = express();

app.get('/get-data', (req, res) => {
    axios.get("https://echo.free.beeceptor.com/sample-request?author=beeceptor")
        .then(response => {
           
            res.json(response.data);
        })
        .catch(error => {
            console.error(error);
           
            res.status(500).json({ error: "Error fetching data" });
        });
});

app.listen(5000, () => {
    console.log("Server is running on http://localhost:5000");
});
