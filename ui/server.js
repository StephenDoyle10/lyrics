const express = require('express');
require('dotenv').config();

const app = express();

app.use(express.static('public'));

port=process.env.PORT ||4000;

app.listen(port, function (){
    console.log(`App started on port ${port}`)
})