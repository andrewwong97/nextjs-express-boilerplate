const next = require('next');
const routes = require('./routes');
const config = require('./config');
const app = next({dev: config.env !== 'production'})
const handler = routes.getRequestHandler(app)

const express = require('express')
app.prepare().then(() => {
  console.log('listening on port 3000...');
  express().use(handler).listen(3000);
});

