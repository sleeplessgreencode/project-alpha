const express = require('express');

const app = express();

// require rute restful API
require('./rute/fungsiDasar')(app);
require('./rute/auth')(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT);
