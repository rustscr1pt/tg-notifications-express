const express = require('express');
const app = express();
const core_router = require('./routes/core_router');

const port = process.env.PORT || 8000;

app.use(express.json());
app.use(core_router);

app.listen(port, function() {
    console.log('Started at 8000 port')
});