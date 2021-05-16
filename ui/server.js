const express = require('express');
const proxy = require('http-proxy-middleware');
const cookieParser = require('cookie-parser');
require('dotenv').config();

const app = express();

app.use(cookieParser());


app.use(express.static('public'));

const apiProxyTarget = process.env.API_PROXY_TARGET;
if (apiProxyTarget) {
  app.use('/graphql', proxy({ target: apiProxyTarget, changeOrigin:true }));
  app.use('/auth', proxy({ target: apiProxyTarget, changeOrigin:true }));
}

app.get('/env.js', function(req, res) {
  const env = { 
    UI_API_ENDPOINT: process.env.UI_API_ENDPOINT,
    UI_AUTH_ENDPOINT: process.env.UI_AUTH_ENDPOINT,
    GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID, 
};
  res.send(`window.ENV = ${JSON.stringify(env)}`)
})





const port=process.env.PORT;

app.listen(port, function (){
    console.log(`App started on port ${port}`)
})