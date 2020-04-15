const express = require('express');
const app = express();
const morgan = require('morgan');
const port = 8080

// Middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use((req, res, next)=> {
    console.log('Testing out this middleware 💪🏾');
    next();
})

// Routes

// Start Server
app.listen(port, () => {
    console.log(`Running on the designated port : ${port}`)
})