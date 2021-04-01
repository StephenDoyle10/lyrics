const express = require('express');
const { connectToDb } = require('./db.js');
const { installHandler } = require('./api_handler.js');
require('dotenv').config();

const app = express();

installHandler(app);

const port = process.env.PORT || 5000;

(async function () {
    try {
        await connectToDb();
    
            app.listen(port, function() {
                console.log(`App started on port ${port}`)
            });
    } catch (err) {
        console.log('ERROR:', err);
    } 
   })()