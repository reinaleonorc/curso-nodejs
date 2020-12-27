const express = require('express');
const path = require('path');

const homeRouter = require('./Routes/home');
const blogRouter = require('./Routes/blog');
const aboutRouter = require('./Routes/about');
const contactRouter = require('./Routes/contact');

const server = express();
server.use(express.static(path.join(__dirname, 'public')));

server.use('/', homeRouter);
server.use('/about', aboutRouter)
server.use('/blog', blogRouter);
server.use('/contact', contactRouter);
server.listen(8080);


