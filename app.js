const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();
const { dbConnection } = require('./database/config');
dbConnection();
const app = express();
app.use(cors());
app.use( bodyParser.urlencoded( { extended : true }));

app.use('/user', require('./router/user'));

console.clear();
app.listen(process.env.PORT, () => {
    const port = process.env.PORT || 3000;
    console.log('App listening on port ' + port);
});