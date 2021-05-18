
const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
require('dotenv').config();


const app = express();

app.use(express.static('public'));

const apiProxyTarget = process.env.API_PROXY_TARGET;
if (apiProxyTarget) {
  app.use('/graphql', createProxyMiddleware({ target: apiProxyTarget }));
  app.use('/auth', createProxyMiddleware({ target: apiProxyTarget }));
}

app.get('/env.js', function(req, res) {
    const env = { 
      UI_API_ENDPOINT: process.env.UI_API_ENDPOINT,
      UI_AUTH_ENDPOINT: process.env.UI_AUTH_ENDPOINT,
      GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID, 
  };
    res.send(`window.ENV = ${JSON.stringify(env)}`)
  })
  

port=process.env.PORT ||8000;

app.listen(port, function (){
    console.log(`App started on port ${port}`)
})