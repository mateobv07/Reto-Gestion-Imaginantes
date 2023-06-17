import express from "express";
import bodyParser from "body-parser";
import cors from 'cors';
import knex from 'knex';
import * as path from 'path';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
//dotenv
import * as dotenv from 'dotenv'
dotenv.config()


export const db = knex({
  client: 'mysql2',
  connection: {
    host : process.env.DATABASE_URL,
    port : process.env.DATABASE_PORT,
    user : process.env.DATABASE_USER,
    password : process.env.DATABASE_PASSWORD,
    database : process.env.DATABASE_NAME,
  }
});

//declaring routes
import assignmentRoutes from './routes/assignment.js';
import commentRoutes from './routes/comment.js';
import requestRoutes from './routes/request.js';
import userRoutes from './routes/user.js';
import announcementRoutes from './routes/announcement.js'

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

const corsOptions = {
  exposedHeaders: 'SET-AUTH',
};
app.use(cors(corsOptions));


//routes
app.use('/assignment', assignmentRoutes);
app.use('/comment', commentRoutes);
app.use('/request', requestRoutes);
app.use('/user', userRoutes);
app.use('/announcement', announcementRoutes);

const __dirname = dirname(fileURLToPath(import.meta.url));

//deployment
app.use(express.static(path.resolve(__dirname, '../client/GestionImaginantes-Front/dist')));

app.get('/', function(req,res){
  res.sendFile(path.join(__dirname, '..', 'build'));
});

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../client/GestionImaginantes-Front/dist', 'index.html'));
});

export default app;