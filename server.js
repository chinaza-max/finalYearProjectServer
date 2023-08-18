'use strict';

require("dotenv").config();
require('./db/db.js')


const http = require('http');
const express = require('express');
const app = express();
const server = http.createServer(app)
const port=5000;


app.use(express.json());
app.use(express.urlencoded({ extended: true}));


const router=require('./router/router')

router(app);

server.listen(port,()=>console.log(`server started.... ${port}`))


module.exports = app;



/**
  this help to solve mongodb error whe trying to connect
    from Control Panel -> Administration -> Services -> MongoDB
    control panel  -> system and security  ->Administrative tools  -> Services -> MongoDB
 */