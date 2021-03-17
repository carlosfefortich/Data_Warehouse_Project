const express = require('express');
const cors = require('cors');
require('dotenv').config();
require('./db');

const usersRouter = require('./routes/users');
const locationsRouter = require('./routes/locations');
const companiesRouter = require('./routes/companies');
const contactsRouter = require('./routes/contacts');

const app = express();
const PORT = process.env.PORT || 3000;

const helmet = require('helmet');
app.use(helmet.permittedCrossDomainPolicies({permittedPolicies: "by-content-type"}));
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://127.0.0.1:5500");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    res.header("Access-Control-Allow-Methods", "POST, GET");
    next();
});

app.use(express.json());
app.use(express.urlencoded())
app.use(cors({
    origin: 'http://127.0.0.1:5500'
}));
app.use('/users', usersRouter);
app.use('/locations', locationsRouter);
app.use('/companies', companiesRouter);
app.use('/contacts', contactsRouter);

app.listen(PORT, ()=>{
    console.log('Server running at port ' + PORT);
});