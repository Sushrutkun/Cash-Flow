import express from 'express'
import cors from 'cors'
import {readdirSync} from 'fs'
import db from './db/db.js'
import 'dotenv/config';
import userRouter from './routes/userRoutes.js';
import { errorHandler, notFound } from './middlewares/errorMiddlewares.js';

const app = express()


const PORT = process.env.PORT

//middlewares
app.use(express.json())
app.use(cors())

//routes

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

app.use('/api/v1/users', userRouter);
app.use(notFound)
app.use(errorHandler)


const server = async() => {
    await db();
    app.listen(PORT, () => {
        console.log('listening to port:', PORT)
        console.log("http://localhost:5000/api/v1/get-incomes")
    })
}

server()