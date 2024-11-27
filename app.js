const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('Welcome to Amazing world of Shakul!. You will be trilled to reach here'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
