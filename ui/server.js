const express = require('express');

const app = express();

app.use(express.static('public'));

port=4000;

app.listen(port, function (){
    console.log(`App started on port ${port}`)
})