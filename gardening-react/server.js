const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

//Console log that your server is up and running
app.listen(port, () => console.log(`listening on port ${port}`));

//Create a GET route
app.get('/express_backend', (req, res) => {
    res.send({express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT'});
});