// const express = require('express')
// const cors = require('cors');
// const { db } = require('./db/db');
// const {readdirSync} = require('fs')
// require('dotenv').config()
import express from 'express'
import cors from 'cors'
import {readdirSync} from 'fs'
import db from './db/db.js'
import 'dotenv/config';

const app = express()


const PORT = process.env.PORT

//middlewares
app.use(express.json())
app.use(cors())

//routes
// readdirSync('./routes').map((route) => app.use('/api/v1', require('./routes/' + route)))

// Define an async function for dynamic imports
const importRouteModule = async (route) => {
    const routeModule = await import(`./routes/${route}`);
    return routeModule.default;
};

//routes
const routeFiles = readdirSync('./routes');
routeFiles.forEach(async (route) => {
    const routeModule = await importRouteModule(route);
    app.use('/api/v1', routeModule);
});



const server = async() => {
    await db();
    app.listen(PORT, () => {
        console.log('listening to port:', PORT)
    })
}

server()