// import and start express 
const express = require('express');
const server = express();
const path = require('path');
const pages = require('./pages.js');

server
    // Use req body
    .use(express.urlencoded({ extended: true }))

    // using static archives
    .use(express.static('public'))

    // configure template engine
    .set('views', path.join(__dirname, 'views'))
    .set('view engine', 'hbs')

    // create app routes
    .get('/', pages.index)
    .get('/orphanage', pages.orphanage)
    .get('/orphanages', pages.orphanages)
    .get('/create-orphanage', pages.createOrphanage)
    .post('/save-orphanage', pages.saveOrphanage)

// start server
server.listen(5500); 