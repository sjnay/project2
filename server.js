const express = require('express');
const methodOverride = require('method-override');
const session = require('express-session');
const MongoStore = require('connect-mongo');
require('dotenv').config();

const app = express();
const PORT = 4000;

app.set('view engine', 'ejs');

// home route
app.get('/', (req, res) => {
    res.send('hello world');
})

// 404 Wildcard Route
app.route('/*').all((req, res) => {
    res.render('404');
})




app.listen(4000, () => {
    console.log('Listening on port 4000...');
})