require('dotenv').config();

const http = require('http');
const express = require('express');
const helmet = require('helmet');
const path = require('path');
const cookie_parser = require('cookie-parser');

const app = express();
const server = http.createServer(app);

app.use(helmet);

server.listen(
    process.env.APP_PORT,
    () => {console.log(`Server is running on port ${process.env.APP_PORT}.`)}
);